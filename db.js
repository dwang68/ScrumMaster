var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/scrum_test');

module.exports = mongoose.connection;