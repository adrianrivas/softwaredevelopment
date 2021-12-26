<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class UsersModel extends Model
{
    use HasFactory;
    protected $table = 'USERS';

    protected $primaryKey = 'USER_ID';

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

    protected $hidden = [ //campos que no se mostraran cuando se hagan consultas a la base de datos
        'USER_PASSWORD',
        'USER_REMEMBER_TOKEN',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function posts(){
        return $this->hasMany('App\Models\PostModel', 'USER_ID', 'USER_ID');
    }
}
