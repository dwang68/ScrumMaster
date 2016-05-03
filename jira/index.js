var storiesModel = require('../models/stories.js');
var usersModel = require('../models/users.js');
var sessionsModel = require('../models/sessions.js');
var pointingModel = require('../models/pointing.js');
var response, request, theSessionID, theSprint;
var util = require('util');


var search = function(sessionID, jql_param, sprint, callback) {
	theSessionID = sessionID;
	theSprint = sprint;

	var jiraCookie;
	
	sessionsModel.findById(sessionID, 'jiraCookie',  function (err, doc){
		if (err) {return console.log(err);}
		jiraCookie = doc.jiraCookie;
		console.log("jiraCookie: " + jiraCookie);
		// Get the session information and store it in a cookie in the header
	    var searchArgs = {
	            headers: {
						// Set the cookie from the session information
	                    cookie: jiraCookie,
	                    "Content-Type": "application/json"
	            },
	            data: {
						// Provide additional data for the JIRA search. You can modify the JQL to search for whatever you want.
	                    jql: jql_param，
	                    "maxResults": 20
	            	    //jql: 'type=Story AND status=Open AND Team=DEVX-Dev-Content AND "Story Points"=null AND project="Developer Experience Backlog" AND Sprint=null'

	            }
	    };

	    console.log('jql: ' + jql_param);
		// Make the request return the search results, passing the header information including the cookie.
	    client.post("https://jira.sonos.com/rest/api/2/search", searchArgs, function(searchResult, response) {   
	    	console.log("searchResults: " + util.inspect(searchResult, false, null));
	    	console.log("response" +  response.status);
	    	//if(searchResult.issues !== null){
	        	insertOrUpdateStories(searchResult.issues, function() {
	        		storiesModel.find({sessionID: theSessionID, sprint: theSprint, isPointed: false}, 'key summary description', function(err, docs) {
						console.log("after insertion: %s", docs);
						callback(JSON.stringify(docs));
	        		});
	        	});
	       	//}     
	    });
	});
}

var editPoint = function(sessionID, storyKey, Points, callback) {
	var jiraCookie;
	sessionsModel.findById(sessionID, 'jiraCookie',  function (err, doc){
		if (err) {return console.log(err);}
		jiraCookie = doc.jiraCookie;

		var updateArgs = {
			headers: {
				// Set the cookie from the session information
	            cookie: jiraCookie,
	            "Content-Type": "application/json"
	        },
	        data: {
	        	"update" : { 
					"customfield_10002" : [{"set" : Points}]
				}
	        }
		};

		client.put("https://jira.sonos.com/rest/api/2/issue/".concat(storyKey), updateArgs, function() {   
	          callback("The point for story " + storyKey + " is updated");
	    });
	});
		
}


function insertOrUpdateStories(issues, callback) {
	var length = issues.length;
	var inserted = 0;	
	for (index = 0; index < length; ++index) {	
		var issue = issues[index];
		console.log("issue key: " + issue.key);
		insertOrUpdateStoryHelper(issue, function() {
			if(++inserted === length){
				callback();
			}
		});
	}
}

function insertOrUpdateStoryHelper(issue, callback) {
	storiesModel.findOne({key: issue.key, sessionID: theSessionID}, function(err, doc) {
			if(doc !== null && doc._id !== null) {
				// Story description is changed, or story is moved from one sprint to another sprint
				storiesModel.update({_id: doc._id}, { $set: { summary: issue.fields.summary, 
					description: issue.fields.description, isPointed: false, sprint: theSprint}}, function(err, doc) {
						if(err) {return console.error(err);}
						console.log("Update the story in the sprint");			
        				callback();       				 	
				});
			} else {
				// Bring in a new story into the story from backlog
				var storyRecord = new storiesModel({key: issue.key, summary: issue.fields.summary, 
    				description: issue.fields.description, isPointed: false, sprint: theSprint, sessionID: theSessionID });
    			storyRecord.save(function(err, doc) {
					if(err) {return console.error(err);}
					console.log("Save the story in the sprint");		
        			callback();			 				
    			});
			}
	});
}


module.exports.search = search;
module.exports.editPoint = editPoint;