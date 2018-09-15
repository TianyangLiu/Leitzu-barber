<?php

use Faker\Generator as Faker;

use App\Model\Client;

$factory->define(App\Model\Record::class, function (Faker $faker) {
    return [
        'client_id' => function(){
            return Client::all()->random();
        },
        'content' => '9月30号做护理'
    ];
});
