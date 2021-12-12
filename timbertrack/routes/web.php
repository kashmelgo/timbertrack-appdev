<?php

use App\Http\Controllers\PayrollController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/task', function () {
//     return Inertia::render('Task');
// })->middleware(['auth', 'verified'])->name('task');

Route::get('/task', [TaskController::class, 'index'])->name('task');
Route::post('/task', [TaskController::class, 'store'])->name('task.store');
Route::post('/task/{id}', [TaskController::class, 'finishTask'])->name('task.finishTask');
Route::delete('/task/{id}', [TaskController::class, 'destroy'])->name('task.destroy');

Route::get('/report', [ReportController::class, 'index'])->name('report');
Route::post('/report{id}', [ReportController::class, 'destroy'])->name('timeout');

Route::get('/payroll', [PayrollController::class, 'index'])->name('payroll');
Route::post('/payroll/{id}', [UserController::class, 'update'])->name('updateuser');
Route::delete('/payroll/{id}', [UserController::class, 'destroy'])->name('deleteuser');
require __DIR__.'/auth.php';

