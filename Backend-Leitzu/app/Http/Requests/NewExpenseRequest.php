<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewExpenseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'activity_cost' => 'required',
            'receipt_date' => 'required'
        ];
    }
    
    public function messages()
    {
        return [
            'activity_cost.required' => '内容不能为空',
            'receipt_date.required' => '内容不能为空'
        ];
    }
}
