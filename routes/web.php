<?php

use App\Http\Controllers\BillController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/students', [StudentController::class, 'index'])->name('students.index');
    Route::get('/admin/create', [StudentController::class, 'create'])->name('students.create');
    Route::post('/students', [StudentController::class, 'store'])->name('students.store');
    Route::get('/bills', [BillController::class, 'index'])->name('bill.index');
    Route::get('/bills/create', [BillController::class, 'create'])->name('bill.create');
    Route::post('/bills', [BillController::class, 'store'])->name('bill.store');
});

require __DIR__ . '/auth.php';
