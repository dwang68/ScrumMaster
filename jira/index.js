var request = require('request');

var username = 'Dalin.Wang@sonos.com',
    password = 'dw12345DW$',
    domain = 'https://jira.sonos.com/rest/api/2/search?jql=project="Developer Experience Backlog"&&status="Open"&&Team=DEVX-Dev-Content&&type=Story&&"Story Points"=null'
    url = 'https://' + username + ':' + password + '@' + domain;

module.exports = function() {
	var functions = {};

	functions.authenticate = function() {
		request({url: url}, function (error, response, body) {
			if(error){
				console.log(error.code);
			}
   			// Do more stuff with 'body' here
   			response.json(body);
		});
	}
	return functions;
}
