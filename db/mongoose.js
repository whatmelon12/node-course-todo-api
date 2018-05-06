var mongoose = require('mongoose');

//Configure mongoose to use built in Promise engine.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};