<?php

use Illuminate\Http\Request;


Route::group([

    'middleware' => 'api'
    
], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('sign-up', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});


Route::apiResource('/clients', 'ClientController');

Route::get('/expenses/current-month', 'ExpenseController@currentMonthExpense');

Route::get('/expenses/current-year', 'ExpenseController@currentYearExpense');


Route::group(['prefix' => 'clients'], function(){

    Route::apiResource('/{client}/records', 'RecordController');

    Route::apiResource('/{client}/expenses', 'ExpenseController');

    Route::get('/search/{name}', 'ClientController@search');

});
