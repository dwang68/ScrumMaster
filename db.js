var mongoose = require('mongoose');

//mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb://localhost:27017/scrum_test')

module.exports = mongoose.connection;