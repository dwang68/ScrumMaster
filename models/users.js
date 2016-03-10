var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = Schema({
	name: { type: String, required: true}, 
	isScrumMaster: {type: Boolean, required: true},
	jiraID: String,
	password: String,
	sessionID: {type: String, ref: 'sessions'}
});

module.exports = mongoose.model('users', usersSchema);