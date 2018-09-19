<?php

namespace App\Http\Resources\Client;

use Illuminate\Http\Resources\Json\Resource;

class ClientCollection extends Resource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'gender' => $this->gender,
            'phone' => $this->phone,
            'amount' => $this->amount,
            'next_contact_date' => $this->next_contact_date,
            'established_date' => $this->created_at->format('Y年m月d日'),
            'href' => [
                'detail' => route('clients.show', $this->id)
            ]
        ];
    }
}
