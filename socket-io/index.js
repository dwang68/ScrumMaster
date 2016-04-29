var socketio = require('socket.io');
var authentication = require('../authentication');
var util = require('util');
var mongoose = require('mongoose');
var storiesModel = require('../models/stories.js');
var usersModel = require('../models/users.js');
var sessionsModel = require('../models/sessions.js');
var pointingModel = require('../models/pointing.js');
const default_sprint = 	"2016 DevContent - ";
const default_jql = 'type=Story AND status=Open AND Team=DEVX-Dev-Content AND "Story Points"=null AND project="Developer Experience Backlog" AND Sprint=';
var jira = require('../jira');
var isPointing = false;


module.exports.listen = function(app){
	function standardDeviation(values, avg){
  		var squareDiffs = values.map(function(value){
   	    var diff = value - avg;
        var sqrDiff = diff * diff;
    	return sqrDiff;
  		});
  
  		var avgSquareDiff = average(squareDiffs);

  		var stdDev = Math.sqrt(avgSquareDiff);
  		return stdDev;
	}

	function average(data){
  		var sum = data.reduce(function(sum, value){
    	return sum + value;}, 0);

  		var avg = sum / data.length;
  		return avg;
	}

	var io = socketio.listen(app);

	var login = io.of('/socketio')
		.on('connection', function(socket){
			// Retrieving required parameters from socket handshake
			console.log("Clinet says hi");
			socket.emit("serverhi", "Server says hi");


			socket.on("editPoint", function(data) {
				var jsonData = JSON.parse(data);
				var sessionID = jsonData['sessionID'];
				var storyKey = jsonData['storyKey'];
				var storyPts = Number(jsonData['storyPts']);
				jira.editPoint(sessionID, storyKey, storyPts, function(result) {
					console.log(result);
				});

			});
			
			// Stores point based on sessionID, userID and storyID
			socket.on("storyPointing", function(data) {
				var jsonData = JSON.parse(data);
				var sessionID = jsonData['sessionID'];
				var userId = mongoose.mongo.ObjectId(jsonData['userID']);
				var storyId = mongoose.mongo.ObjectId(jsonData['storyID']);
				var storyPts = Number(jsonData['storyPts']);
				pointingModel.find({uid: userId, sid: storyId, sessionID: sessionID}, 'pt', function(err, docs) {
					if(docs.length > 0) {
						pointingModel.update({uid: userId, sid: storyId, sessionID: sessionID}, { $set: { pt: storyPts }}, function (err, raw) {
  						if (err) return handleError(err);
  						console.log("update the point this time");
					});
					}else{
						var pointingRecord = new pointingModel({uid: userId, sid: storyId, sessionID: sessionID, pt: storyPts});
						pointingRecord.save(function(err, pointingRecord) {
							if (err) return handleError(err);
							console.log("pointing the first time");
						});
					}
				});
				
			});

			socket.on("isPointing", function(data) {
				var jsonData = JSON.parse(data);
				console.log("in isPointing" + data);
				var sessionID = jsonData['sessionID'];
				var status = jsonData['status'];
				console.log(sessionID + ": " + status);
				if(status){				
					socket.emit("isPointingResponse", "startPointing");
					socket.to(sessionID).emit("isPointingResponse", "startPointing");
					isPointing = true;
				}else{
					var highest = -1, lowest = 100, avg = 0.0, deviation = 0.0;
					var ptsList = [];
					isPointing = false;
					//TODO: Send responses of story statistics to all members and scrum master
					sessionsModel.findOne({_id: sessionID}, 'currentStory', function(err, doc) {
						console.log("doc: " + util.inspect(doc, false, null));
						pointingModel
						.find({sid: doc.currentStory, sessionID: sessionID})
						.populate('uid')
						.populate('sid')
						.exec(function (err, docs) {
							if (err) return handleError(err);
							for(var index = 0; index < docs.length; ++index) {
								var pt = parseInt(docs[index].pt)
								avg += pt;
								if (highest < pt) { highest = pt}
								if (lowest > pt) {lowest = pt}
								ptsList[index] = pt;
								console.log("user: " + docs[index].uid.userName + " pt: " + docs[index].pt + " story: " + docs[index].sid.key);
							}
							avg /= docs.length;
							deviation = standardDeviation(ptsList, avg);
							console.log(avg + " " + deviation + " " + highest + " " + lowest);
							socket.emit("isPointingResponse", JSON.stringify({"avg": avg, "deviation": deviation, "highest": highest, "lowest": lowest}));
							socket.to(sessionID).emit("isPointingResponse", JSON.stringify({"avg": avg, "deviation": deviation, "highest": highest, "lowest": lowest}));
						});
					});
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
				var userID;
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
		 
					if(isScrumMaster === "on" && !sessionExistsInMongoDB){
						// if the sessionID does not exist in the mongoDB
						jiraID = data['jiraID'];
						password = data['password'];
						
						//Save sessionRecord with sessionID
						console.log("c sessionID value: " + sessionID);
						console.log("c sessionID type: " + (typeof sessionID));
						
						
								
						authentication.cookie_authenticate(jiraID, password, sessionID, function(err, jiraCookie){
							if(err) {
								socket.emit("clientLoginResponse", JSON.stringify({"error": "Dear Scrum team master: your JIRA credentials are invalid"}));
								return console.error(err);
							}
							
							var sessionRecord = new sessionsModel({ _id: sessionID, jiraCookie: jiraCookie});
							sessionRecord.save(function(err, sessionRecord){
								if(err) { return console.error(err + "errorA");}
								console.log(util.inspect(sessionRecord, false, null));
								//After sessionRecord is saved, save userRecord
								var userRecord = new usersModel({userName: userName, isScrumMaster: true, jiraID: jiraID, password: password, sessionID: sessionID})
								
								userRecord.save(function(err, userRecord){
									if(err) {return console.error(err + "errorB");}
									console.log(util.inspect(userRecord, false, null));
									userID = userRecord._id.toString();
									socket.emit("clientLoginResponse" , JSON.stringify({"userID": userID}));
								});
							});		
						});
						
					}else if (isScrumMaster === "on" && sessionExistsInMongoDB){
						//If the sessionID already exists in the mongoDB, redirect the scrum master to login
						socket.emit("clientLoginResponse", 
							JSON.stringify({ "error": "Dear Scrum team master: The session you entered has already been register. Please choose another sessionID"}));
						console.log("The sessionID already exists, scrum master should login with a different sessionID to create a new sesssion");
					
					}else if(isScrumMaster !== "on" && sessionExistsInMongoDB ){
						var userName = data['name'];
						var sessionID = data['sessionID'];
						socket.join(sessionID);
						var userRecord = new usersModel({userName: userName, isScrumMaster: false, sessionID: sessionID});
								
						userRecord.save(function(err, userRecord){
							if(err) {return console.error(err);}
							console.log(util.inspect(userRecord, false, null));
							// get the current story id if it exists
							sessionsModel.findOne({_id: sessionID}, "currentStory", function(error, doc) {
								if(err) {return console.error(err + "errorD");}			
								if(doc !== null && doc.currentStory !== null) {
									console.log("There is a currentStory");
									storiesModel.findOne({_id: doc.currentStory}, "_id key summary description", function(err, raw) {
										if(err) {return console.error(err + "errorE");}
										if(raw) {
											console.log("There is a currentStory B");
											socket.emit("clientLoginResponse", JSON.stringify({"userID": userRecord._id.toString(), "_id" : raw._id.toString(), 
												"key" : raw.key, "summary" : raw.summary, "description" : raw.description}));
										}else {
											socket.emit("clientLoginResponse", JSON.stringify({"userID": userRecord._id.toString()}));
										}			
									});					
								} else {
									console.log("There is a currentStory Y");
									socket.emit("clientLoginResponse", JSON.stringify({"userID": userRecord._id.toString()}));
								}
							});
							
						});							
						console.log("Return the current story for scrum user to point");


					}else if(isScrumMaster !== "on" && !sessionExistsInMongoDB) {
						socket.emit("clientLoginResponse", JSON.stringify({"error": "Dear Scrum team member: The session you entered does not exist"}));
						console.log("The session does not exist, scrum member should ask Scrum Master for a valid sessionID");
					}

				});

			});
		});

}
	