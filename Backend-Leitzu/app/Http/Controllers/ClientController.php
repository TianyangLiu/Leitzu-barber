<?php

namespace App\Http\Controllers;

use App\Model\Client;
use Illuminate\Http\Request;
use App\Http\Resources\Client\ClientResource;
use App\Http\Resources\Client\ClientCollection;
use App\Http\Requests\NewClientRequest;
use App\Http\Requests\UpdateClientRequest;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $collection = Client::orderBy('id', 'DESC')->paginate(10);

        return ClientCollection::collection($collection);
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
    public function store(NewClientRequest $request)
    {
        $client = Client::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        return new ClientResource($client);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateClientRequest $request, Client $client)
    {
        $client= Client::findOrFail($request->id);


        // set new update data
        $client->name = $request->name;

        $client->gender = $request->gender;

        $client->phone = $request->phone;

        $client->amount += $request->rechargeAmount;

        $client->next_contact_date = $request->next_contact_date;

        // stores the update
        $client->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        //
    }
}
