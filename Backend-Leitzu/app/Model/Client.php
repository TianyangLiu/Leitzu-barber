<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

use App\Model\Record;

use App\Model\Expense;

class Client extends Model
{
    public function records(){

        return $this->hasMany(Record::class);

    }

    public function expenses(){

        return $this->hasMany(Expense::class);

    }
}
