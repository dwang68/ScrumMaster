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
	res.send('Hello World!');
});


router.get('/view', function (req, res) {
  res.render('index.jade', { title: 'Hey', message: 'Hello there!'});
});

// router.post('/pointing', cors(), function(req, res) {
// 	var sessionID = req.body['sessionID'];
// 	var storyID = req.body['storyID'];
// 	sessionsModel.update({_id: sessionID}, { $set: { currentStory: storyID }}, function (err, raw) {
//   		if (err) return handleError(err);
//   		console.log('The raw response from Mongo was ', raw);
// 	});
// });

router.get('/basic-authenticate', function (req, res) {
	authentication.basic_authenticate(req, res);
});






