var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pointingSchema = Schema({
	uid: { type: Schema.Types.ObjectId, ref: 'users' },
	sid: { type: String, ref: 'stories'},
	pt: Number
});

module.exports = mongoose.model('pointing', pointingSchema);