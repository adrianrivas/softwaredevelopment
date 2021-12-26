<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostModel extends Model
{
    use HasFactory;
    protected $table = 'POSTS';

    //Relación de muchos a uno
    public function user(){
        return $this->belongsTo('App\Models\UserModel', 'USER_ID', 'USER_ID'); //relaciono la tabla post con la tabla user. Muchos posts pertenecen a un usuario
    }

    public function category(){
        return $this->belongsTo('App\Models\CategoryModel', 'CATEGORY_ID', 'CATEGORY_ID'); //relaciono la tabla post con la tabla user. Muchos posts pertenecen a una categoría
    }

}
