const express = require('express');
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

const port = process.env.port || 3000;

var app = express();
app.use(bodyParser.json());

todoRoutes(app);
userRoutes(app);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})