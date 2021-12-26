<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Models\UsersModel;

class User extends Controller
{
    public function prueba(Request $request)
    {
        return 'Prueba de user controller';
    }

    public function registerUser(Request $request)
    {

        //recoger los datos del usuario
        $json = $request->input('json', null);
        $params_object = json_decode($json); //cambia el json a un objeto php
        $params_array = json_decode($json, true); //cambia el json a un array php

        if (!empty($params_object) && !empty($params_array)) {
            //validar los datos
            $validated = Validator::make($params_array, [
                'name'     => 'required|alpha|max:100',
                'surname'  => 'required|alpha|max:100',
                'email'    => ['required', 'email', Rule::unique('USERS', 'USER_EMAIL')], //valida la columna USER_EMAIL de la tabla USERS como dato unico en la base de datos
                'password' => 'required'
            ]);

            //limpiar los datos
            $params_array = array_map('trim', $params_array); //limpiar los espacios en blanco u otros caracteres de una cadena

            if ($validated->fails()) {
                $data = array(
                    'status' => 'error',
                    'code' => '404',
                    'message' => 'El usuario no se ha creado',
                    'errors' => $validated->errors()
                );
            } else {
                //validación pasada correctamente

                //cifrar la contraseña
                $pwd = password_hash($params_object->password, PASSWORD_BCRYPT, ['cost' => 4]); //cifra la contraseña 4 veces

                //crear el usuario
                $user = new UsersModel(); //creamos un objeto de la clase del modelo usuario
                $user->USER_NAME = $params_array['name'];
                $user->USER_SURNAME = $params_array['surname'];
                $user->USER_EMAIL = $params_array['email'];
                $user->USER_PASSWORD = $pwd;
                $user->USER_ROLE = 'ROLE_USER';

                //guardar el usuario
                $user->save(); //guardo el usuario con el método save

                $data = array(
                    'status' => 'success',
                    'code' => '200',
                    'message' => 'El usuario se ha creado',
                    'user' => $user
                );
            }
        }else{
            $data = array(
                'status' => 'error',
                'code' => '404',
                'message' => 'Los datos enviados no son correctos',
            );
        }
        //cifrar la contraseña

        //comprobar si el usuario está duplicado

        //crear el usuario

        //devolver el JSON

        return response()->json($data); //el metodo json de la libreria response me convierte el array en datos JSON

        //$name = $request->input('name'); //extraigo el dato name enviado por el request HTTP Post
        //$surname = $request->input('surname'); //el metodo input recupera datos del request HTTP enviado
        //return 'Acción de registro de usuario: '.$name.' '.$surname;
    }

    public function loginUser(Request $request)
    {
        return 'Acción de login de usuario';
    }
}
