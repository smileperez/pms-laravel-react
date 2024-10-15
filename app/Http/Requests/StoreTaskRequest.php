<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => ['required', 'max:255'],
            "description" => ['nullable', 'string'],
            "due_date" => ['nullable', 'date'],
            "status" => ['required', Rule::in(['new', 'pending', 'in_progress', 'completed', 'canceled'])],
            "priority" => ['required', Rule::in(['low', 'medium', 'high'])],
            "assigned_user_id" => ['nullable', 'exists:users,id'],
            "project_id" => ['nullable', 'exists:projects,id']
        ];
    }
}
