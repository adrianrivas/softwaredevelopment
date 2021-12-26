<?php
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Cargando Clase del Middleware
use \App\Http\Middleware\ApiAutMiddleware;

Route::get('/', function () {
    return view('welcome');
});

//RUTAS DE PRUEBA
Route::get('/pruebas', function(){
   return "<h2>Texto desde una ruta</h2>";
});

Route::get('/animales', 'PruebasController@index');
Route::get('/test-orm', 'PruebasController@testorm'); //Ruta por get que los métodos del controlador se vean en página web

//RUTAS DEL API
        
        //Rutas de prueba
        Route::get('/usuario/pruebas', 'UserController@pruebas');
        Route::get('/post/pruebas', 'PostController@pruebas');
        Route::get('/categoria/pruebas', 'CategoryController@pruebas');

       //Rutas del Controlador de usuarios
        Route::post('/api/user-register', 'UserController@register');
        Route::post('/api/user-login', 'UserController@login');
        Route::put('/api/user-update', 'UserController@update') -> middleware(\App\Http\Middleware\ApiAutMiddleware::class);
        Route::post('/api/user-upload', 'UserController@upload') -> middleware(\App\Http\Middleware\ApiAutMiddleware::class);
        Route::get('/api/user-avatar/{filename}', 'UserController@getImage');
        Route::get('/api/user-detail/{id}', 'UserController@detail');
        
        //Rutas del contrlador de categorías
        
        