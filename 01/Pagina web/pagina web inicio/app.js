var express = require('express');
var fs = require('fs');
var	app = express();

   app.use(express.static(__dirname + '/public'));


   
	app.get('/', function(req, res){
		res.render('index.jade');
	});

app.get('/datos', function(req, res){
		res.render('datos.jade');
	});
app.get('/01', function(req, res){
		res.render('01.jade');
	});
app.get('/02', function(req, res){
		res.render('02.jade');
	});
app.get('/03', function(req, res){
		res.render('03.jade');
	});
app.get('/04', function(req, res){
		res.render('04.jade');
	});
app.get('/05', function(req, res){
		res.render('05.jade');
	});



	app.listen(3000, function(){

		console.log("escuchando puerto 3000");
	});