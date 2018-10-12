<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    protected $fillable = [
        'client_id', 'receipt_date', 'activity_cost'
    ];

    public function client(){
        return $this->belongsTo(Client::class);
    }
}
