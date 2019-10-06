var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var todos = [];


app.use(bodyParser.json({limit: '5000kb'}));
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());
app.get('/get-todo', function (req, res) {
    res.send({todos: todos})
});


app.post('/add-todo', function (req, res) {
    todos.push(req.body);
    console.log(req.body);
    res.send({status: 200, todos: todos})
    // res.end()

});


app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});