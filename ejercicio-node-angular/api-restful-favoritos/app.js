'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Accesss-Control-Request-Method');
	res.header('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE');
	res.header('Allow', 'GET, POST, PUT, DELETE');

	next();
});

app.use('/api', api)

//función get para recibir el parametro nombre por una ruta get 
module.exports = app;