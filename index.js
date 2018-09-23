// dependencies
var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs');
var app = express();
// variables
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
	res.render('response',name_request);
	
});

app.listen(port, function(){
	console.log("Listening on port "+port+"...");
    });