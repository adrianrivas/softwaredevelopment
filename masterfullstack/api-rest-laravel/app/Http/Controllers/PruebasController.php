<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Category;

class PruebasController extends Controller
{
    public function index(){
        $titulo = 'Animales';
        $animales=['Perro','Gato','Paloma'];
        
        return view('pruebas.index', array(
            'titulo' => $titulo,
            'animales' => $animales
        ));
    }
    public function testorm(){
        
        //Código para obtener todos los posts de la base de datos y sus datos relacionados
        /*$posts = Post::all(); //Saca todos los registros de la tabla Post = Select * From table 
        
        foreach($posts as $post){
            echo "<h1>".$post->title."</h1>";
            echo "<span style='color:green; text-transform:capital;'>{$post->user->name} - {$post->category->name}</span>";
            echo "<p>".$post->content."</p>";
            echo "<hr>";
        }*/
        
        //Código para obtener los posts relacionados a una determinada categoría
        $categories = Category::all();
        
        foreach($categories as $category){
            echo "<h1>".$category->name."</h1>";
            
                foreach($category->posts as $post){
                echo "<h3>".$post->title."</h3>";
                echo "<span style='color:green; text-transform:capital;'>{$post->user->name} </span>";
                echo "<p>".$post->content."</p>";
                echo "<hr>";
            }
            
            echo "<hr>";
        }
        
        die();//No pide ninguna vista y corta la ejecución del programa
    }
}
