var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pointingSchema = Schema({
	uid: { type: Schema.Types.ObjectId, ref: 'users' },
	sid: { type: Schema.Types.ObjectId, ref: 'stories'},
	sessionID: {type: String, ref: "sessions"},
	pt: Number
});

module.exports = mongoose.model('pointing', pointingSchema);