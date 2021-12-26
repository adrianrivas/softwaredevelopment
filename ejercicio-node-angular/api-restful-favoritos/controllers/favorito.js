
'use strict'

var Favorito = require('../models/favorito');

function prueba(req, res){ //recibe parámetros una solicitud y proporciona una respuesta y si le coloco ? coloca el parámetro opcional

	if(req.params.nombre){
		var nombre = req.params.nombre; //recibe el parametro nombre
	}else{
		var nombre = 'SIN NOMBRE';
	}

	res.status(200).send({
		data: [2,3,4],
		message: 'Hola mundo con Node.js, express y ' + nombre
	});
};


function getFavorito(req, res){
	var favoritoId = req.params.id;

	Favorito.findById(favoritoId, function(err, favorito){
		if(err) throw err; else if(!favorito) res.status(500).send({message: 'No hay marcador'}); else res.status(200).send({favorito});
	});
};


function getFavoritos(req, res){

	Favorito.find({}).sort('-_id').exec((err, favoritos) => {  //seleccionamos los registros de la base de datos y losordenamos por el titulo
		if(err) res.status(500).send({message: 'Error al devolver marcadores'}); else if(!favoritos) res.status(500).send({message: 'No hay marcadores'}); else res.status(200).send({favoritos});
	});
};

function saveFavorito(req, res){
	var favorito = new Favorito();

	var params = req.body;

	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err, favoritoStored) => {
		if(err) res.status(500).send({message: 'Error al guardar en el servidor'}); else res.status(200).send({favorito: favoritoStored});
	});

	//res.status(200).send({save:true, favorito: params})
};

function updateFavorito(req, res){
	var favoritoId = req.params.id;
	var update = req.body;

	//console.log(update);

	Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) => {
		if(err) res.status(500).send({message: 'Error al actualizar en el servidor'}); else res.status(200).send({favorito: favoritoUpdated});
	});
};

function deleteFavorito(req, res){
	var favoritoId = req.params.id;
	Favorito.findById(favoritoId, function(err, favorito){
		if(err) res.status(500).send({message: 'Error al eliminar el servidor'}); else if(!favorito) res.status(500).send({message: 'No hay favorito para eliminar'}); else favorito.remove(err =>{
			if(err) throw err; else res.status(200).send({message: 'Marcador eliminado'});
		});
	});
};

module.exports = {
	prueba,
	getFavorito,
	saveFavorito,
	getFavoritos,
	updateFavorito,
	deleteFavorito
};

