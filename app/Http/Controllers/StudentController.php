<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    public function store(StoreStudentRequest $request)
    {
        $validated = $request->validated();

        User::create([
            'name' => $validated->name,
            'nis' => $validated->nis,
            'email' => $validated->email,
            'class_origin' => $validated->class_origin,
            'password' => Hash::make($validated->password),
        ]);
    }

    public function index()
    {
        return User::where('role', 'student')->get();
    }
}
