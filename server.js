const express = require('express');
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todoRoutes');

const port = process.env.port || 3000;

var app = express();
app.use(bodyParser.json());

todoRoutes(app);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})