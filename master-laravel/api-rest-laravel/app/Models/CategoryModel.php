<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
    use HasFactory;
    protected $table = 'CATEGORIES'; //Le damos el nombre de la tabla sobre la cual se establecerá el modelo

     //Relación de 1 a muchos desde la tabla categoría a la tabla post
    public function posts(){
        return $this->hasMany('App\Models\PostModel', 'CATEGORY_ID', 'CATEGORY_ID');
    }
}
