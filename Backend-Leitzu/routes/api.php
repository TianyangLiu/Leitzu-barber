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

Route::group(['prefix' => 'clients'], function(){

    Route::apiResource('/{client}/records', 'RecordController');

    Route::apiResource('/{client}/expenses', 'ExpenseController');

    Route::get('/search/{name}', 'ClientController@search');

    Route::get('/storedValue/all', 'ClientController@totalValueStoredByClients');
    
    Route::get('/nextContactEvents/all', 'ClientController@dailyEvents');

});

Route::group(['prefix' => 'expenses'], function(){

    Route::get('/current-month', 'ExpenseController@currentMonthExpense');

    Route::get('/current-year', 'ExpenseController@currentYearExpense');

    Route::get('/current-month/counts', 'ExpenseController@currentMonthExpenseCounts');
});
