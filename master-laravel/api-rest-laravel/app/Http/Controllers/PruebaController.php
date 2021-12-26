<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\CategoryModel;
use App\Models\Post;

class PruebaController extends Controller
{
    public function index(){
        $titulo = 'Animales';
        $animales = ['perro', 'gato', 'tigre', 'león'];

        return view('pruebas.index', array(
            'titulo' => $titulo,
            'animales' => $animales
        ));
    }

    public function testORM(){
        /* $posts = PostModel::all(); //Select * from table Post
        foreach($posts as $post){
            echo '<h1>'.$post->POST_TITLE.'</h1>'; //Imprimo el campo POST_TITLE de la tabla POST
            echo "<span style='background-color:lightgray; color:red;'>{$post->user->USER_NAME} - {$post->category->CATEGORY_NAME}</span>"; //Extraigo el nombre del usuario relacionado con el post creado
            echo '<p>'.$post->POST_CONTENT.'</p>'; //Imprimo el campo POST_CONTENT de la tabla POST
            echo '<hr>';
        } */

        $categories = CategoryModel::all();
        foreach($categories as $category){
            echo '<h1>'.$category->CATEGORY_ID.'</h1>'; //Imprimo el campo CATEGORY_ID de la tabla CATEGORY
            echo "<h1 style='background-color:lightgray; color:red;'>{$category->CATEGORY_NAME}</h1>"; //Extraigo el nombre de la categoría creada
            foreach($category->posts as $post){
                echo '<h2>'.$post->POST_TITLE.'</h2>';
                echo '<p>'.$post->POST_CONTENT.'</p>';
            }
            echo '<hr>';
        }
        die();
    }
}

?>
