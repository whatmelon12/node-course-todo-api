var express = require('express');
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todoRoutes');

var app = express();
app.use(bodyParser.json());

todoRoutes(app);

app.listen(3000, () => {
    console.log('Started on port 3000');
})