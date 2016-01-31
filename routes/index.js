/*
 * GET home page.
 */

var data = require('../data');
var express = require('express');
var cors = require('cors');
var router = express.Router();
var jira_interface = require('../jira');
const https = require('https');

exports.router = router.get('/', function (req, res) {
  res.send("This is an express application"); 
});

router.get('/helloWorld', cors(), function (req, res) {
	res.send("Hello World!");
});


router.get('/view', function (req, res) {
  res.render('index.jade', { title: 'Hey', message: 'Hello there!'});
});

router.get('/cookie-authenticate', function (req, res) {
	var Client = require('node-rest-client').Client;
	client = new Client();
	// Provide user credentials, which will be used to log in to JIRA.


	var loginArgs = {
	    data: {
	            "username": "Dalin.Wang@sonos.com",
	            "password": "dw12345DW$"
	    },
	    headers: {
	            "Content-Type": "application/json"
	    } 
	};


	client.post("https://jira.sonos.com/rest/auth/1/session", loginArgs, function(data, response){
	        if (response.statusCode == 200) {
	                console.log('succesfully logged in, session:', data.session);
	                var session = data.session;
	                // Get the session information and store it in a cookie in the header
	                var searchArgs = {
	                        headers: {
									// Set the cookie from the session information
	                                cookie: session.name + '=' + session.value,
	                                "Content-Type": "application/json"
	                        },
	                        data: {
									// Provide additional data for the JIRA search. You can modify the JQL to search for whatever you want.
	                                jql: "type=Bug AND status=Closed"
	                        }
	                };
					// Make the request return the search results, passing the header information including the cookie.
	                client.post("https://jira.sonos.com/rest/api/2/search", searchArgs, function(searchResult, response) {
	                        console.log('status code:', response.statusCode);
	                        console.log('search result:', searchResult);
	                        res.json(searchResult);
	                });
	        }
	        else {
	                throw "Login failed :(";
	        }
	});

});

router.get('/listjson', function (req, res) {
	res.json(data);
});

router.get('/basic-authenticate', function (req, res) {

	var username = 'Dalin.Wang@sonos.com',
	    password = 'dw12345DW$';
	var options = {
	   host: 'jira.sonos.com',
	   port: 443,
	   method: 'GET',
	   /* The query asks for the items that satisfy the following conditions:
			1. Project is under Developer Experience Backlog
			2. Status is open
			3. Team is DEVX-Dev-Content
			4. Type is story
			5. Story points is null, meaninglly unpointed
			6. Display a maximum of TWO results for now
	   */

	   path: '/rest/api/2/search?jql=project=%22Developer%20Experience%20Backlog%22&&status=%22Open%22&&Team=DEVX-Dev-Content&&type=Story&&%22Story%20Points%22=null&&maxResults=2',
	   // authentication headers
	   headers: {
	      'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64'),
	      'Content-Type': 'application/json'
	   }   
	};
	
	var resultJson;
	var req = https.request(options, (response) => {
  		console.log('statusCode: ', response.statusCode);
  		console.log('headers: ', response.headers);

  		response.on('data', (data) => {
    		//process.stdout.write(data);
    		resultJson += data;
  		});
  		
  		response.on('end', () => {
    		console.log('No more data in response.');
    		var s1 = "This is a string with all the \\\" characters escaped";
    		//resultJson = resultJson.replace("\\\"", "\"");
    		//s1 = s1.replace("\\\"", "\"");
    		s1 = s1.replace('\\"', '"');
    		process.stdout.write(resultJson);
    		res.json(unescape(resultJson));
  		});
	});

	req.on('error', (e) => {
  		console.error(e);
	});

	req.end();
});






