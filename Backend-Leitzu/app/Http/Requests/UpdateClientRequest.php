<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateClientRequest extends FormRequest
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
            'name' => 'required',
            'gender' => 'required',
            'phone' => 'required|min:11|max:11|unique:clients,phone',
            'amount' => 'required',
            'next_contact_date' => ''
        ];
    }

    public function messages()
    {
        return [
            'name.required' => '* 会员姓名不能为空',
            'gender.required' => '* 性别不能为空',
            'phone.required' => '* 手机号码不能为空',
            'amount.required' => '* 错误！剩余金额不能为null，请与管理员联系。',
            'next_contact_date.date' => '* 日期格式不正确',
            'phone.min' => '* 手机号位数不正确',
            'phone.max' => '* 手机号位数不正确',
            'phone.unique' => '会员已存在, 请查对手机号码'
        ];
    }
}
