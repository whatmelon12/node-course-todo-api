var {mongoose} = require('./../db/mongoose');
var {Todo} = require('./../model/todo');

var CreateTodo = (req, res) => {
    var todo = new Todo(req.body);
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
}

var GetTodo = (req, res) => {
   Todo.find().then((doc) => {
       res.send(doc);
   }, (e) => {
       res.status(400).send(e);
   })
};

module.exports = {CreateTodo, GetTodo};