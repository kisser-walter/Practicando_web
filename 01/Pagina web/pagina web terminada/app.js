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
app.get('/06', function(req, res){
		res.render('06.jade');
	});
app.get('/07', function(req, res){
		res.render('07.jade');
	});
app.get('/08', function(req, res){
		res.render('08.jade');
	});
app.get('/09', function(req, res){
		res.render('09.jade');
	});
app.get('/10', function(req, res){
		res.render('10.jade');
	});	
app.get('/11', function(req, res){
		res.render('11.jade');
	});	
app.get('/12', function(req, res){
		res.render('12.jade');
	});		
app.get('/13', function(req, res){
		res.render('13.jade');
	});		
app.get('/14', function(req, res){
		res.render('14.jade');
	});		
app.use(function(peticion,respuesta){
	respuesta.status(400);
	respuesta.render('404.jade');
});

	app.listen(3000, function(){

		console.log("escuchando puerto 3000");
	});