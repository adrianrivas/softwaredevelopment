<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;//Importo el response para poder usarlo
use App\User; //Instrucción para acceder al modelo de la tabla usuario de la BD

class UserController extends Controller
{
    Public function pruebas(REQUEST $request){
        return "Prueba del Controlador de Usuario";
    }
    
    Public function register(REQUEST $request){
        
        
        //Recoger datos del usuario por POST
            $json = $request->input('json', null);
            //var_dump($json);
            //Decodificar json para obtener datos
            $para=json_decode($json); //Forma de Objeto
            $para_array=json_decode($json, true);//Forma de Array
        
            
            if(!empty($para) && !empty($para_array)){
        //Limpiar espacios en blanco de los campos
            $para_array = array_map('trim', $para_array);
        //ValidarDatos
            $validate = \Validator::make($para_array,[ //Instrucción para validadr datos de un array
                'name' => 'required|alpha',
                'surname' => 'required|alpha',
                'email'   => 'required|email|unique:users', //La instrucción unique comprueba si el usuario existe, y si existe enía un error.
                'password' => 'required'
            ]);
            
            if($validate -> fails()){
               //Validación falló
               $data = [
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'El usuario no ha sido creado correctamente',
                    'errors' => $validate->errors()
                ];
            }else{
                //Validación realizada correctamente
                
                //Cifrar la contraseña
                $clavecifrada = hash('sha256', $para->password); //La contraseña será cifrada
                
                //Crear el usuario
                $user = new User();
                $user->name = $para_array['name'];
                $user->surname = $para_array['surname'];
                $user->email = $para_array['email'];
                $user->password = $clavecifrada;
                $user->role = 'ROLE_USER';
                
                //Guardar el usuario
                $user->save();
                
                $data = [
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'El usuario ha sido creado correctamente',
                    'user' => $user
                ];
            }
            
            }else{
              $data = [
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'Datos no han sido creados correctamente',
                ];
          }
          
          return response()->json($data, $data['code']); //DEvolver datos en JSON con código de error HHTP
                
         //Proceso para sacar respuestas con códigos HTTP y retornar valores con JSON

        //Proceso para captar datos que se envien por post y mostrarlos.
        /*$name = $request->input("name");
        $surname = $request ->input("surname");
        return "Proceso de registro de $name $surname";*/
          
    }
    
    Public function login(REQUEST $request){
        
        $jwtAuth = new \JwtAuth();
        
        //Recoger datos del usuario por POST
        $json = $request->input('json', null);
        //var_dump($json);
        //Decodificar json para obtener datos
        $para=json_decode($json); //Forma de Objeto
        $para_array=json_decode($json, true);//Forma de Array
        
        
        $validate = \Validator::make($para_array,[ //Instrucción para validadr datos de un array
                'email'   => 'required|email', //La instrucción unique comprueba si el usuario existe, y si existe enía un error.
                'password' => 'required'
            ]);
            
            if($validate -> fails()){
               //Validación falló
               $signup = [
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'El usuario no se ha logueado correctamente',
                    'errors' => $validate->errors()
                ];
            }else{
                $clavecifrada = hash('sha256', $para->password);
                
                $signup = $jwtAuth->signup($para -> email, $clavecifrada);
                
                if(!empty($para -> gettoken)){
                    $signup = $jwtAuth->signup($para -> email, $clavecifrada, true);
                }
            }
        
        return response()->json ($signup, 200);
    }
    
    public function update(Request $request){ //Método para actualizar los datos de ususario
       
        //$token = $request->header('Authorization');
        //$jwtAuth = new \JwtAuth();
        //$checkToken = $jwtAuth -> checkToken($token);
        
        //Recoger los datos por POST
        $json = $request->input('json', null);
         //var_dump($json);
        //Decodificar json para obtener datos
         $para=json_decode($json); //Forma de Objeto
         $para_array=json_decode($json, true);//Forma de Array
        
        if(!empty($para_array)){ //valido si el token es correcto
           
            //Sacar el usuario identificado
            $jwtAuth = new \JwtAuth();
            $token = $request->header('Authorization');
            $user = $jwtAuth->checkToken($token, true); //Obtener los datos del usuario identificado
            //Validadr los datos
            
            $validate = \Validator::make($para_array,[ //Instrucción para validadr datos de un array
                'name' => 'required|alpha',
                'surname' => 'required|alpha',
                'email'   => 'required|email|unique:users'.$user->sub //La instrucción unique comprueba si el usuario existe, y si existe enía un error.
            ]);
            
            //Quitar los campos que no quiero actualizar
            unset($para_array['id']);
            unset($para_array['role']);
            unset($para_array['password']);
            unset($para_array['created_at']);
            unset($para_array['remember_token']);
            
            //Actualizar usuario en BD            
            $user_update = User::where('id', $user -> sub) -> update($para_array);
            
            //Devolver mensaje de éxito
            $data = [
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'El usuario ha sido actualizado correctamente',
                    'user' => $user, //Devuelvo la información decodificada del token
                    'changes' => $para_array
                ];
            
        }else{
            $data = [
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'Datos no actualizados correctamente',
                ];
        }
        
        
        return response()->json($data, $data['code']);
        //die(); //No pida ninguna vista  y corte la ejecución del programa
    }
    
    public function upload(Request $request){
        
        //Recoger datos de la petición
        $image = $request->file('file0'); //Recogemos el archivo que viene con nombre file0
        
        //Validación de la imagen
        $validate = \Validator::make($request->all(),[ //Evalúa todos los parámetros de la variable recibida por request file0
            'file0' => 'required|image|mimes:jpg,jpeg,png,gif'
        ]);
        //Guardar la imagen
        if(!$image || $validate->fails()){ //Pregunto si recibió y se validó la imagen satisfactoriamente
            $data = [
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'Error al subir imagen'
            ];
            
        }else{
            $image_name = time().$image->getClientOriginalName(); //Establezco un nombre único para mi imagen
            \Storage::disk('users')->put($image_name, \File::get($image)); //Almaceno la imagen del usuario en el disco Storage de Laravel y luego creo los discos en la carpeta config en el archivo filesystems 
            
             //Devolver el mensaje de éxito
            $data = [
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'Imagen guardada con éxito',
                    'imagen' => $image_name //Enviamos el nombre de la imagen despues de ser subida
            ];   
        }
        
        return response()->json($data, $data['code']);
    }
    
    public function getImage($filename){
        
        $isset = \Storage::disk('users')->exists($filename);
        
        if($isset){
            $file = \Storage::disk('users')->get($filename);
            return new Response($file, 200);
        }else{
            $data = [
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'La imagen no existe'
            ];
            
            return response()->json($data, $data['code']);
        }      
    }
    
    public function detail($id){
        
        $user = User::find($id);
        
        if(is_object($user)){
           $data = [
                    'status' => 'success',
                    'code' => 200,
                    'user' => $user
            ]; 
        }else{
           $data = [
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'Usuario no encontrado'
            ]; 
        }
        
        return response()->json($data, $data['code']);
    }
}
