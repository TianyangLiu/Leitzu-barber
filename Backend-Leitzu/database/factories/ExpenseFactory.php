<?php

use Faker\Generator as Faker;

use App\Model\Client;

$factory->define(App\Model\Expense::class, function (Faker $faker) {
    return [
        'client_id' => function(){
            return Client::all()->random();
        },
        'activity_cost' => 100
    ];
});
