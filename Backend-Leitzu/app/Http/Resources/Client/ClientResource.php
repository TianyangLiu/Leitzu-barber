<?php

namespace App\Http\Resources\Client;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
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
                'records' => route('records.index', $this->id),
                'expenses' => route('expenses.index', $this->id)
            ]
        ];
    }
}
