var mongoose = require('mongoose');

const { db_mongo_prod } = require('./db.config');

//Configure mongoose to use built in Promise engine.
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect(db_mongo_prod);

module.exports = {mongoose};