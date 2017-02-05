const https = require('https');
var storiesModel = require('../models/stories.js');
var usersModel = require('../models/users.js');
var sessionsModel = require('../models/sessions.js');
var pointingModel = require('../models/pointing.js');
// load all files in models dir
var util = require('util');
var jira = require('../jira');

var cookie_authenticate = function(jiraID, password, sessionID, callback) {
		
	var Client = require('node-rest-client').Client;
	client = new Client();
	// Provide user credentials, which will be used to log in to JIRA.
	var loginArgs = {
	    data: {
	            "username": jiraID,
	            "password": password
	    },
	    headers: {
	            "Content-Type": "application/json"
	    } 
	};
		

	client.post("https://jira.sonos.com/rest/auth/1/session", loginArgs, function(data, response){
	        if (response.statusCode == 200) {
	                console.log('succesfully logged in, session:', data.session);
	                var jiraSession = data.session;
					callback(null, jiraSession.name + '=' + jiraSession.value);
	        
	        }else {
	                callback(new Error('Invalid JIRA Credentials'), null);
	        }
	});

}

var basic_authenticate = function(req, res) {

	var username = 'Dalin.Wang@sonos.com',
	    password = '';
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
}

module.exports.cookie_authenticate = cookie_authenticate;
module.exports.basic_authenticate = basic_authenticate;
