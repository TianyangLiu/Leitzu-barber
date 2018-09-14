<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Client::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'gender' => '男',
        'amount' => 2000,
        'phone' => $faker->numberBetween($min = 10000000000, $max = 19999999999)
    ];
});
