<?php

namespace App\Http\Middleware;

use Closure;

class ApiAutMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
            //Comprobar la autenticación del usuario
            $token = $request->header('Authorization');
            $jwtAuth = new \JwtAuth();
            $checkToken = $jwtAuth -> checkToken($token);
        
            if($checkToken){
                    return $next($request); 
            }else{
                 $data = [
                        'status' => 'error',
                        'code' => 404,
                        'message' => 'El usuario no está identificado',
                 ];
                 return response()->json($data, $data['code']);
            }
    }
}
