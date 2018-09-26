<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends FormRequest
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
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:6|max:16',
        ];
    }

    public function messages()
    {
        return [
            'email.email' => '邮箱格式错误',
            'email.unique' => '邮箱已存在',
            'password.confirmed' => '两次输入的密码不正确',
            'password.min' => '密码长度过短,密码长度为6-16位',
            'password.max' => '密码长度过长,密码长度为6-16位'
        ];
    }
}
