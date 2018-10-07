<?php

namespace App\Http\Controllers;

use App\Model\Expense;
use App\Model\Client;
use App\Http\Resources\Expense\ExpenseResource;
use Illuminate\Http\Request;
use App\Http\Requests\NewExpenseRequest;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Client $client)
    {
        return ExpenseResource::collection($client->expenses);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewExpenseRequest $request)
    {
        $expense = Expense::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client, Expense $expense)
    {
        return new ExpenseResource($expense);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function edit(Expense $expense)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Expense $expense)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function destroy(Expense $expense)
    {
        //
    }

    public function currentMonthExpense(){
        $currentMonth = date('m');

        $data = Expense::whereRaw('MONTH(created_at) = ?', [$currentMonth])->sum('activity_cost');

        return $data;
    }

    public function currentYearExpense(){
        $currentYear = date('Y');

        $data = Expense::whereRaw('YEAR(created_at) = ?', [$currentYear])->sum('activity_cost');

        return $data;
    }
}
