const {ObjectID} = require('mongodb');

const {mongoose} = require('./../db/mongoose');
const {Todo} = require('./../model/todo');

var CreateTodo = (req, res) => {
    var todo = new Todo(req.body);
    todo.save().then((todo) => {
        res.send({todo});
    }, (e) => {
        res.status(400).send(e);
    });
}

var GetTodos = (req, res) => {
    Todo.find().then((todo) => {
        res.send({todo});
    }, (e) => {
        res.status(400).send(e);
    })
};

var GetTodoById = (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(req.params.id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }, (e) => {
        res.status(400).send();
    })
};

module.exports = {CreateTodo, GetTodos, GetTodoById};