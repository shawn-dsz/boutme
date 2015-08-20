var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function(req, res){
	res.render('index');
});

app.post('/add', bodyParser.json(), function  (req, res) {
	var a = req.body.a, 
		b = req.body.b;
		sum = a + b;

		res.json(sum);
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT || 1337);