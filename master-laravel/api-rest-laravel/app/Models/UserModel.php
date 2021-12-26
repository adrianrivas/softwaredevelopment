<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class UserModel extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = 'USERS';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'USER_NAME',
        'USER_SURNAME',
        'USER_ROLE',
        'USER_EMAIL',
        'USER_PASSWORD',
        'USER_DESCRIPTION',
        'USER_UPDATEDAT',
        'USER_CREATEDAT'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [ //campos que no se mostraran cuando se hagan consultas a la base de datos
        'USER_PASSWORD',
        'USER_REMEMBER_TOKEN',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    //Relación de 1 a muchos desde la tabla user a la tabla post
    public function posts(){
        return $this->hasMany('App\Models\PostModel', 'USER_ID', 'USER_ID');
    }
}
