<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    protected $fillable = [
       'client_id', 'content'
    ];

    public function client(){

        return $this->belongsTo(Client::class);

    }
}
