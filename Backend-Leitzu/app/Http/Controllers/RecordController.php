<?php

namespace App\Http\Controllers;

use App\Model\Record;
use App\Model\Client;
use App\Http\Resources\Record\RecordResource;
use Illuminate\Http\Request;
use App\Http\Requests\NewRecordRequest;

class RecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Client $client)
    {
        //return RecordResource::collection($client->records);

        $records = $client->records;

        $collection = $records->sortByDesc('id');

        return RecordResource::collection($collection);
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
    public function store(NewRecordRequest $request)
    {
        $newRecord = Record::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client, Record $record)
    {
        return new RecordResource($record);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function edit(Record $record)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function update(NewRecordRequest $request, Client $client, Record $record)
    {
        $record= Record::findOrFail($request->id);

        $record->content = $request->content;

        $record->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client, Record $record)
    {
        $record = Record::findOrFail($record->id);
        $record->delete();
    }
}
