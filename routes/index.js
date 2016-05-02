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
var jira = require('../jira');

exports.router = router.get('/', cors(), function (req, res) {
	res.send('Hello World!');
});


router.get('/view', function (req, res) {
  res.render('index.jade', { title: 'Hey', message: 'Hello there!'});
});

router.get('/basic-authenticate', function (req, res) {
	authentication.basic_authenticate(req, res);
});








