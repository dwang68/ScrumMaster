function Session(theSessionID, theFrom, theTo) {
	this.sessionID = theSessionID;
	this.users = [];
	this.stories = [];
	this.from = theFrom;
	this.to = theTo;
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