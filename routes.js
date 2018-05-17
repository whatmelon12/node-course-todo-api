const express = require('express');
const passport = require('passport');

const todoController = require('./controller/todoController');
const authController = require('./controller/authController');

//Set up passport authenticator middleware
var requireLogin = passport.authenticate('local', {session: false}),
    requireAuth = passport.authenticate('jwt', {session: false});

module.exports = function(app){
    var apiRoute = express.Router(),
    todoRoute = express.Router(),
    authRoute = express.Router();

    apiRoute.use('/auth', authRoute);
    authRoute.post('/register', authController.register);
    authRoute.post('login', requireLogin, authController.login);

    apiRoute.use('/todo', todoRoute);
    todoRoute.post('/', todoController.CreateTodo);
    todoRoute.get('/', todoController.GetTodos);
    todoRoute.get('/:id', todoController.GetTodoById);
    todoRoute.patch('/:id', todoController.UpdateTodo);
    todoRoute.delete('/:id', todoController.DeleteTodo);

    app.use('/api', apiRoute);
}