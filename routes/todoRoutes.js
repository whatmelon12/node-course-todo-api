module.exports = function(app){
    var controller = require('./../controller/todoController');
    app.route('/todos')
        .post(controller.CreateTodo);
};