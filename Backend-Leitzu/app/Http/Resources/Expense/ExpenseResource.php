<?php

namespace App\Http\Resources\Expense;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseResource extends JsonResource
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
            'activity_cost' => $this->activity_cost,
            'total_cost' => $this->client->expenses->sum('activity_cost'),
            'receipt_date' => $this->receipt_date
        ];
    }
}
