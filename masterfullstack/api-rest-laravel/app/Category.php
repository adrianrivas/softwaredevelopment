<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    //
    
    //Relación de 1 a muchos para obtener los posts que están relacionados con una determinada categoría
    public function posts(){
        return $this->hasMany('App\Post');
    }
}
