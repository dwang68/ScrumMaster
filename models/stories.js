var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storiesSchema = Schema({
	//Mongoose assigns a default _id to each story document, this is to accomodate the situation where two stories have the same key in a different sessions
	key: {type: String},
	summary: {type: String},
	description: {type: String},
	averagePts: { type: Number, min: 0, max: 21 },
	isPointed: {type: Boolean, required: true},
	sprint: {type: String, required: true},
	sessionID: {type: String, ref: 'sessions'}
})

module.exports = mongoose.model('stories', storiesSchema);