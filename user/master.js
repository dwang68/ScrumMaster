var User = require("./user.js");

function Master(theName, theJiraID, thePassword) {
	//var theUser = new User(theName, true);
	//this.prototype = theUser;
	User.call(this, theName, true);
	this.jiraID = theJiraID;
	this.password = thePassword;
	Object.setPrototypeOf(Master.prototype, User.prototype);
}

Master.prototype = {
	constructor: Master,
	showMasterInfo:function() {
		var info;
		info = "Scrum Master " +  this.name +  "has jiraID: " + this.jiraID + "and jira password: " + this.password;	
		return info;
	}
}

module.exports = Master;