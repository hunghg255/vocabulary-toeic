var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./model/db');

var indexRoute = require('./routes/index.route');


app.use(express.static('public'));
// set cau hinh
app.set('view engine', 'pug');
app.set('views', './views');

// lay du lieu user post len
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', indexRoute);

app.listen(3000, function(){
	console.log('Server is running port 3000');
});