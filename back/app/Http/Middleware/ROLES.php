<?php

namespace App\Http\Middleware;

use Closure;
use App\User;
use Auth;

class ROLES
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
      $user=Auth::user();
      if($user->is_admin==1)
        return $next($request);
      else{
        return response()->json(['você nao é admin']);
      }
    }
}
