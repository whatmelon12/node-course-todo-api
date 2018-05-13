module.exports = function(app){
    var controller = require('./../controller/todoController');
    app.post('/todos', controller.CreateTodo);
    app.get('/todos', controller.GetTodos);
    app.get('/todos/:id', controller.GetTodoById);
};