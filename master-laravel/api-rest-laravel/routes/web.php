<?php

namespace App\Http\Controllers;
use App\Http\Controllers\PruebaController;
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

//rutas de prueba

Route::get('/', function () {
    return '<h1>Hola mundo con Laravel</h1>'; //ruta por get
});

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/prueba/{nombre?}', function($nombre = null){ //Si la variable es opcional, la variable debe declararse en null
    $texto = '<h2> texto desde una ruta</h2>';
    $texto .= $nombre;
    return view('pruebas', array(
        'texto' => $texto //envio la variable texto a la vista pruebas
    ));
});

Route::get('/animales', [PruebaController::class, 'index']);
Route::get('/test-orm', [PruebaController::class, 'testORM']);

//rutas del api

        //rutas de prueba
        Route::get('/usuario/prueba', [User::class, 'prueba']);
        Route::get('/categoria/prueba', [Category::class, 'prueba']);
        Route::get('/entrada/prueba', [Post::class, 'prueba']);

        //rutas del controlador de usuarios
        Route::post('/api/user/register', [User::class, 'registerUser']);
        Route::post('/api/user/login', [User::class, 'loginUser']);
