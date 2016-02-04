function User(theName, theIsScrumMaster) {
	this.name = theName;
	this.isScrumMaster = theIsScrumMaster;
}

User.prototype = {
	constructor: User,
	showUserInfo:function() {
		var info;

		if(this.isScrumMaster) {
			info = this.name + " is Scrum Master" ;
		}else{
			info = this.name + " is not Scrum Master";
		}
		return info;
	}
}


module.exports = User;