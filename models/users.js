var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = Schema({
	//Mongoose assigns a default _id to each user document, this is to accomodate the situation where two users have the same name in a session
	userName: { type: String, required: true}, 
	isScrumMaster: {type: Boolean, required: true},
	jiraID: String,
	password: String,
	sessionID: {type: String, ref: 'sessions'}
});

module.exports = mongoose.model('users', usersSchema);