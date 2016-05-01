var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_c40snst4:fajnliljeaohnlvsg5692k782f@ds023478.mlab.com:23478/heroku_c40snst4');
//mongoose.connect('mongodb://localhost:27017/scrum_test')

module.exports = mongoose.connection;