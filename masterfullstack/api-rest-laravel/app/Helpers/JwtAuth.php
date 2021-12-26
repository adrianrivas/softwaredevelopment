<?php
namespace App\Helpers;
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
use Firebase\JWT\JWT; //Instrucción para llamar a la librería JWT para la autenticación de usuario
use Iluminate\Support\Facades\DB; //Instrucción para acceder a la base de datos;
use App\User; //Instrucción para acceder al modelo de la tabla usuario


class JwtAuth{
    public $key;
        
    public function __construct(){
          $this->key = 'esto_es_una_clave_super_secreta_?lkjop00987?@2#$%&/...,';
    }
    
    public function signup($email, $password, $getToken = null){
        //Buscar si existe el usuario con sus credenciales
        $user = User::where([
            'email' => $email,
            'password' => $password
        ])->first(); //Pregunta si coinciden los registros con los de la tabla usuario y saca un registro
        
        
        //Comprobar si son correctas las credenciales, si es asi la variable $user se convertirá en un objeto
        $signup = false; //Variable bandera
        
        if(is_object($user)){
            $signup = true;
        }
        
        
         if($signup){
            $token = array(   //Creamos el token con la información del usuario autenticado
                'sub'  => $user->id,
                'email' => $user->email,
                'name' =>  $user->name,
                'surname' => $user->surname,
                'iat'   =>  time(), //Hora de la autenticación del usuario
                'exp'  => time() + (2*60*60)//Hora de expiración de la autenticación del usuario
        );
        
            $jwt = JWT::encode($token, $this->key, 'HS256'); //Codificar los datos del usuario autenticado y colocarles una clave de autenticación
            $decoded = JWT::decode($jwt, $this->key, ['HS256']);

            if(is_null($getToken)){
                  $data = $jwt;
            }else{
                  $data = $decoded;
            }
            
        }else{
             $data = array(
                 'status' => 'error',
                 'message' => 'Login incorrecto.'
             );
        }
        return $data;
    }
    
    public function checkToken($jwt, $getIdentity = false){
        $auth = false;
        
        try{
            $jwt = str_replace('"','', $jwt); //Remplazamos las comillas por absolutamente nada para que el token no genere problemas al decodificarse
            $decoded = JWT::decode($jwt, $this->key, ['HS256']); //Se recibe el token y se decodifica
        } catch(\UnexpectedValueException $e){ //Se capturan posibles execpciones
            $auth = false;
        }catch (\DomainException $e){   //Se capturan posibles execpciones
            $auth = false;
        }
        
        if(!empty($decoded) && is_object($decoded) && isset($decoded ->sub)){ //Si el token fue decodificado, y se obtuvieron los valores del token
                                                                              //Se pasa a cambiar la variable auth a true, por que la autenticacion fue exitosa
            $auth = true;
        }else{
            $auth = false;   //Si la decodificación del token no se hace satisfactoriamente, entonces la variable continua igualmente, en su mismo estado
        }
        
        if($getIdentity){
            return $decoded;
        }
        
        return $auth;
    }
}