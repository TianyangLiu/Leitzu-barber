<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    public function client(){

        return $this->belongsTo(Client::class);

    }
}
