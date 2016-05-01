var mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb://heroku_c40snst4:fajnliljeaohnlvsg5692k782f@ds023478.mlab.com:23478/heroku_c40snst4');

module.exports = mongoose.connection;