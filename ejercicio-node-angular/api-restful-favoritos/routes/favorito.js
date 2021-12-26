'use strict'


var express = require('express');
var favoritoController = require('../controllers/favorito');
var api = express.Router();

api.get('/prueba/:nombre?', favoritoController.prueba);//llamamos el método prueba del fichero del controlador y le enviamos el parámetro nombre en ruta por metodo get)
api.get('/favorito/:id', favoritoController.getFavorito);
api.get('/favoritos', favoritoController.getFavoritos);
api.post('/favorito', favoritoController.saveFavorito);
api.put('/favorito/:id', favoritoController.updateFavorito);
api.delete('/favorito/:id', favoritoController.deleteFavorito);

module.exports = api;