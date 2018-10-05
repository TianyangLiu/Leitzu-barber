<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

use App\Model\Client;

class Expense extends Model
{
    public function client(){

        return $this->belongsTo(Client::class);

    }
}
