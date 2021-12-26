<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function prueba(Request $request){
        return 'Prueba de post controller';
    }
}
