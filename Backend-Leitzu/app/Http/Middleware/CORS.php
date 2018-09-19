<?php

namespace App\Http\Middleware;

use Closure;

class CORS
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
        Header('Access-Control-Allow-Origin : *');

        Header('Access-Control-Allow-Methods : *');

        Header('Access-Control-Allow-headers : Content-type, X-Auth-Token, Authorization, Origin');
    
        return $next($request);
    }
}
