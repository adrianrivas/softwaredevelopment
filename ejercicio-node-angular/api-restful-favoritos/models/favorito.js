//se hará el esquema del tipo de registro que se guardará en Mongo

'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoritoSchema = Schema({
	title:String,
	description: String,
	url: String
})


//exportamos el modelo para usarlo al momento de interactuar con Mongo

module.exports = mongoose.model('Favorito', FavoritoSchema) //A no ser que como tercer parámetro se le asigne el nombre la colección a la base de datos, Mongo toma una base de datos por defecto