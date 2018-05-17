const express = require('express');
const passport = require('passport');

//Modules when required executed their code. Thats why passport gets configured with just requiring
//the custom config.
const passportConfig = require('./config/passport');
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
    authRoute.get('/test', requireAuth, (req, res) => {
        res.send({error: 'Success'});
    });

    apiRoute.use('/todo', requireAuth, todoRoute);
    todoRoute.post('/', requireAuth, todoController.CreateTodo);
    todoRoute.get('/', requireAuth, todoController.GetTodos);
    todoRoute.get('/:id', requireAuth, todoController.GetTodoById);
    todoRoute.patch('/:id', requireAuth, todoController.UpdateTodo);
    todoRoute.delete('/:id', requireAuth, todoController.DeleteTodo);

    app.use('/api', apiRoute);
}