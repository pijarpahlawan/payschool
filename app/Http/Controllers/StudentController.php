<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Str;

class StudentController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/RegisterStudents');
    }
    public function store(StoreStudentRequest $request)
    {
        $validated = $request->validated();
        User::create([
            'name' => $validated['name'],
            'nis' => $validated['nis'],
            'email' => $validated['email'],
            'class_origin' => $validated['class_origin'],
            'password' => Hash::make($validated['password']),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
        ]);

        // Redirect dengan pesan sukses
        return redirect()->route('dashboard')->with('success', 'Student created successfully');
    }


    public function index()
    {
        $students = User::where('role', 'student')->get();
        return response()->json($students);
    }
}
