var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storiesSchema = Schema({
	key: {type: String, required: true},
	summary: {type: String, required: true},
	description: {type: String, required: true},
	averagePts: { type: Number, min: 0, max: 21 },
	isPointed: {type: Boolean, required: true},
	sprint: {type: String, required: true},
	sessionID: {type: String, ref: 'sessions'}
})

module.exports = mongoose.model('stories', storiesSchema);