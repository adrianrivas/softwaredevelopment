<?php 
namespace App;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';
   
    //Relación de muchos a uno para obtener el usuario que está relacionados con un determinado número de posts
    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
    
    //Relación de muchos a uno para obtener la categoría que está relacionados con un determinado número de posts
    public function category(){
        return $this->belongsTo('App\Category', 'category_id');
    }
}
?>
