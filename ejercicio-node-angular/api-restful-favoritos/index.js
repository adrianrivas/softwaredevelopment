'use strict'

var mongoose = require('mongoose');
var app = require('./app'); //cargamos el fichero app creado donde se configuró el express y el bodyparser
var port = process.env.PORT || 3678;

mongoose.connect('mongodb://127.0.0.1:27017/cursofavoritos', (err, res) => {
	
	if(err){
		throw err;
	}else{
		console.log("Conexión a Mongo correcta");
		app.listen(port, () => {
		console.log(`API REST FAVORITOS FUNCIONANDO en http://localhost:${port}`); //mensaje de encendido del servidor
	}); //Comando para crear el servidor web y le digo a mi servidor que va a escuhar por el puerto 3678
	
	}
	
});