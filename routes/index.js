var express = require('express');
var cors = require('cors');
var router = express.Router();
var authentication = require('../authentication');
var util = require('util');
var storiesModel = require('../models/stories.js');
var usersModel = require('../models/users.js');
var sessionsModel = require('../models/sessions.js');
var pointingModel = require('../models/pointing.js');
var path = require('path');

exports.router = router.get('/', cors(), function (req, res) {
	res.sendFile(path.resolve(__dirname + '/../index2.html'));
	//res.send("express");
});


router.get('/view', function (req, res) {
  res.render('index.jade', { title: 'Hey', message: 'Hello there!'});
});

router.post('/pointing', cors(), function(req, res) {
	var sessionID = req.body['sessionID'];
	var storyID = req.body['storyID'];
	sessionsModel.update({_id: sessionID}, { $set: { currentStory: storyID }}, function (err, raw) {
  		if (err) return handleError(err);
  		console.log('The raw response from Mongo was ', raw);
	});
});


// router.post('/login', cors(), function (req, res) {
	
	
// 	// Retrieving required parameters from post request
// 	var userName = req.body['name'];
// 	var sessionID = req.body['sessionID'];
// 	var isScrumMaster = req.body['host'];
// 	var clientIP = req.connection.remoteAddress.replace('::ffff:', '');
// 	//var clientIPAddress = req.client._peername.address.replace('::ffff:', '');
// 	var clientPort = req.client._peername.port;
// 	var sessionExistsInMongoDB = false;

// 	sessionsModel.count({_id: sessionID}, function (err, count){ 
//     	count>0 ? sessionExistsInMongoDB = true : sessionExistsInMongoDB = false;
	 
// 		if(isScrumMaster === "on"){
// 			// if the sessionID does not exist in the mongoDB
// 			jiraID = req.body['jiraID'];
// 			password = req.body['password'];
// 			if(!sessionExistsInMongoDB) {
// 				//Save sessionRecord with sessionID
// 				var sessionRecord = new sessionsModel({ _id: sessionID});
// 				sessionRecord.save(function(err, sessionRecord){
// 					if(err) { return console.error(err);}
// 					console.log(util.inspect(sessionRecord, false, null));
// 					//After sessionRecord is saved, save userRecord
// 					var userRecord = new usersModel({name: userName, isScrumMaster: true, ip: clientIP, port: clientPort, jiraID: jiraID, password: password, sessionID: sessionID})
// 					userRecord.save(function(err, userRecord){
// 						if(err) {return console.error(err);}
// 						console.log(util.inspect(userRecord, false, null));
// 						//After userRecord is saved, authenticate scrum master with jira credentials
// 						authentication.cookie_authenticate(req, res, jiraID, password, sessionID);
// 					});
// 				});
			
// 			}else{
// 				//If the sessionID already exists in the mongoDB, redirect the scrum master to login
// 				console.log("The sessionID already exists, scrum master should login with a different sessionID to create a new sesssion");
// 			}



// 		}else if(isScrumMaster !== "on" && sessionExistsInMongoDB ){
// 			console.log("Return the current story for scrum user to point");


// 		}else if(isScrumMaster !== "on" && !sessionExistsInMongoDB) {
// 			console.log("The session does not exist, scrum member should ask Scrum Master for a valid sessionID");
// 		}


// 		//query all sessions and users stored in the mongoDB
// 		sessionsModel.find(function(err, sessions){
// 			if (err){ 
// 				return console.error(err);
// 			}
// 	  		console.log("query sessions:\n " + util.inspect(sessions, false, null));
// 		});

// 		usersModel.find(function(err, users){
// 			if (err){ 
// 				return console.error(err);
// 			}
// 	  		console.log("query users:\n " + util.inspect(users, false, null));
// 		});

// 	});


// });


router.get('/basic-authenticate', function (req, res) {
	authentication.basic_authenticate(req, res);
});






