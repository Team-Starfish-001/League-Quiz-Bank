// dependencies
var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs');
var app = express();
// variables
var quizbase = JSON.parse('{"quizzes":[]}');
var formatQuiz = '{"name":"","desc":"","target":"","questions":[]}';
var port = 8080;

// express settings
app.set('view engine','ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	    extended: true
}));

// get/post

app.get('/',function(req,res){
	res.sendFile(__dirname + '/views/index.html');
});

app.post('/',function(req,res){
	var name_request = req.body;
	console.log(name_request);
	res.render('response',name_request);
	
});

app.get('/create',function(req,res){
	var tempQuiz = JSON.parse(formatQuiz);
	tempQuiz.name = "New Quiz";
	console.log(JSON.stringify(tempQuiz));
	console.log(formatQuiz);
       	res.json(tempQuiz);
});
app.get('/quizzes',function(req,res){
	res.json(quizbase);
});

app.post('/quizzes',function(req,res){
	var quiz_request = req.body;
	console.log(quiz_request);
	res.json(quizbase);
});


app.listen(port, function(){
	console.log("Listening on port "+port+"...");
    });