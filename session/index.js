function Session(theSessionID) {
	this.sessionID = theSessionID;
	this.users = [];
	this.stories = [];
}

Session.prototype = {
	constructor: Session,
	addUser:function(theUser) {
		this.users.push(theUser);
	},
	addStory:function(theStory) {
		this.stories.push(theStory);
	}

}

module.exports = Session;