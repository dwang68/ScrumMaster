/*
 * GET home page.
 */

var data = require('../data');
var express = require('express');
var cors = require('cors');
var router = express.Router();
var jira_interface = require('../jira');
var Story = require('../story');
var User = require('../user/user.js');
var Master = require('../user/master.js');
var authentication = require('../authentication');

exports.router = router.get('/', function (req, res) {
  res.send("This is an express application"); 
});

router.get('/helloWorld', cors(), function (req, res) {
	res.send("Hello World!");
});


router.get('/view', function (req, res) {
  res.render('index.jade', { title: 'Hey', message: 'Hello there!'});
});


router.get('/session', function (req, res) {
	var master = new Master("dalin", "myjiraid", "asdfaaaf");
	var user = new User("dalin", false);
	var SampleStory = new Story("DEVX-3328", "Sample Story", "create a sample story!");
	res.send(master.showUserInfo());
});

router.post('/login', cors(), function (req, res) {

	var session;

	// Retrieving parameters from Post request
	var userName = req.body['name'];
	var sessionID = req.body['sessionID'];
	var jiraID, password;
	if(req.body['host'] === "on") {
		console.log("host is on");
		jiraID = req.body['jiraID'];
		password = req.body['password'];
		//session = new Session(sessionID, "", "");
		authentication.cookie_authenticate(req, res, jiraID, password);
	}



});

router.get('/listjson', function (req, res) {
	res.json(data);
});

router.get('/basic-authenticate', function (req, res) {

	authentication.basic_authenticate(req, res);
});






