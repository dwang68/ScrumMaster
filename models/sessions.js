var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionsSchema = Schema({
	_id: {type: String, required: true},
	jiraCookie: String,
	currentStory: {type: Schema.Types.ObjectId, ref: "stories"}
});

module.exports = mongoose.model('sessions', sessionsSchema);

