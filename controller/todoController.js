const {ObjectID} = require('mongodb');
const _ = require('lodash');

const {mongoose} = require('./../db/mongoose');
const {Todo} = require('./../model/todo');

var CreateTodo = (req, res) => {
    var user = req.user;
    var body = req.body;
    body.user_id = user._id;
    var todo = new Todo(req.body);
    todo.save().then((todo) => {
        res.send({todo});
    }).catch((e) => {
        res.status(400).send(e);
    });
}

var GetTodos = (req, res) => {
    Todo.find({user_id: req.user._id}).then((todo) => {
        res.send({todo});
    }).catch((e) => {
        res.status(400).send(e);
    });
};

var GetTodoById = (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findOne({
        _id: id,
        user_id: req.user._id
    }).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
};

var UpdateTodo = (req, res) =>{
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }
    else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findOneAndUpdate({
        _id: id,
        user_id: req.user._id
    }, {$set: body}, {new: true}).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send(e);
    });
};

var DeleteTodo = (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findOneAndRemove({
        _id: id,
        user_id: req.user._id
    }).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
};

module.exports = {
    CreateTodo, 
    GetTodos, 
    GetTodoById, 
    UpdateTodo, 
    DeleteTodo
};