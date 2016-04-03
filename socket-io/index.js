var socketio = require('socket.io');
var authentication = require('../authentication');
var util = require('util');
var storiesModel = require('../models/stories.js');
var usersModel = require('../models/users.js');
var sessionsModel = require('../models/sessions.js');
var pointingModel = require('../models/pointing.js');
const default_sprint = 	"2016 DevContent - ";
const default_jql = 'type=Story AND status=Open AND Team=DEVX-Dev-Content AND "Story Points"=null AND project="Developer Experience Backlog" AND Sprint=';
var jira = require('../jira');
var isPointing = false;


module.exports.listen = function(app){
	var io = socketio.listen(app);

	var login = io.of('/socketio')
		.on('connection', function(socket){
			// Retrieving required parameters from socket handshake
			console.log("Clinet says hi");
			socket.emit("serverhi", "Server says hi");

			socket.on("isPointing", function(data) {
				var jsonData = JSON.parse(data);
				console.log("in isPointing" + data);
				var sessionID = jsonData['sessionID'];
				var status = jsonData['status'];
				console.log(sessionID + ": " + status);
				if(status){
					console.log("in startPointing");
					socket.emit("isPointingResponse", "startPointing");
					socket.to(sessionID).emit("isPointingResponse", "startPointing");
					isPointing = true;
				}else{
					console.log("in stopPointing");
					socket.emit("isPointingResponse", "stopPointing");
					socket.to(sessionID).emit("isPointingResponse", "stopPointing");
					isPointing = false;
				}
			});

			socket.on("sprintSelect", function(data) {
				var jsonData = JSON.parse(data);
				var sessionID = jsonData['sessionID'];
				var sprint  = default_sprint.concat(jsonData['sprint']);
				var jql = default_jql.concat('"' + sprint + '"');
			    jira.search(sessionID, jql, sprint, function(docs) {
					console.log("sprintSelect:" + sessionID + " " + sprint);
					socket.emit("sprintSelectResponse", docs);
				});
				
			});

			socket.on("storySelect", function(data) {
				var jsonData = JSON.parse(data);
				var sessionID = jsonData['sessionID'];
				var key = jsonData['key'].replace(/['"]+/g, '');
				
				storiesModel.findOne({key: key, sessionID: sessionID}, '_id key summary description', function(err, doc) {
					if (err) return handleError(err);
					console.log('findOne: ', util.inspect(doc, false, null));
					sessionsModel.update({_id: sessionID}, { $set: { currentStory: doc._id }}, function (err, raw) {
  						if (err) return handleError(err);
 						console.log('In update to sessionID ' + sessionID + ' : ', util.inspect(doc, false, null));
  						socket.emit("storySelectResponse", JSON.stringify(doc));
  						socket.to(sessionID).emit("storySelectResponse", JSON.stringify(doc));
					});
					
	        	});
			});
			
			socket.on("clientLogin", function(data){
				
				var sessionID = data['sessionID'];
				socket.join(sessionID);
				var sessionExistsInMongoDB = false;
				console.log("sessionID value: " + sessionID);
				console.log("sessionID type: " + (typeof sessionID));		

				sessionsModel.count({_id: sessionID}, function (err, count){ 
					if(err) { return console.error(err + " count error");}
	    			count>0 ? sessionExistsInMongoDB = true : sessionExistsInMongoDB = false;
	    			var userName = data['name'];
	    			var isScrumMaster = data['host'];
	    			sessionID = data['sessionID'];
	    			console.log("b sessionID value: " + sessionID);
					console.log("b sessionID type: " + (typeof sessionID));
		 
					if(isScrumMaster === "on"){
						// if the sessionID does not exist in the mongoDB
						jiraID = data['jiraID'];
						password = data['password'];
						if(!sessionExistsInMongoDB) {
							//Save sessionRecord with sessionID
							console.log("c sessionID value: " + sessionID);
							console.log("c sessionID type: " + (typeof sessionID));
							var sessionRecord = new sessionsModel({ _id: sessionID});
							sessionRecord.save(function(err, sessionRecord){
								if(err) { return console.error(err + "errorA");}
								console.log(util.inspect(sessionRecord, false, null));
								//After sessionRecord is saved, save userRecord
								var userRecord = new usersModel({name: userName, isScrumMaster: true, jiraID: jiraID, password: password, sessionID: sessionID})
								
								userRecord.save(function(err, userRecord){
									if(err) {return console.error(err + "errorB");}
									console.log(util.inspect(userRecord, false, null));
									//After userRecord is saved, authenticate scrum master with jira credentials
									authentication.cookie_authenticate(jiraID, password, sessionID, function(){
										sessionsModel.findById(sessionID, 'jiraCookie',  function (err, doc){
										if (err) {return console.log(err + "errorC");}
										console.log("server is about to send response to clientLogin" + doc.jiraCookie);
										socket.emit("clientLoginResponse" , doc.jiraCookie);
										});
									});		
								});

							});
						
						}else{
							//If the sessionID already exists in the mongoDB, redirect the scrum master to login
							console.log("The sessionID already exists, scrum master should login with a different sessionID to create a new sesssion");
						}



					}else if(isScrumMaster !== "on" && sessionExistsInMongoDB ){
						var userName = data['name'];
						var sessionID = data['sessionID'];
						socket.join(sessionID);
						var userRecord = new usersModel({name: userName, isScrumMaster: false, sessionID: sessionID})
								
								userRecord.save(function(err, userRecord){
									if(err) {return console.error(err);}
									console.log(util.inspect(userRecord, false, null));	
								});							
						console.log("Return the current story for scrum user to point");


					}else if(isScrumMaster !== "on" && !sessionExistsInMongoDB) {
						console.log("The session does not exist, scrum member should ask Scrum Master for a valid sessionID");
					}

				});

			});
		});

}
	