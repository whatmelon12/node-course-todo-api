module.exports = function(app){
    var controller = require('./../controller/userController');
    app.post('/users', controller.CreateUser);
};