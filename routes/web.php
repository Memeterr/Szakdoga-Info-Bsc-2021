<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

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
    return view('home');
})->name('home');

Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/dashboard/{dashboard:id}', [DashboardController::class, 'show'])->name('dashboard.show');
Route::delete('/dashboard/{dashboard}', [DashboardController::class, 'destroy'])->name('dashboard.destroy');

Route::delete('/dashboard/{dashboard}/delete', [DashboardController::class, 'destroyInView'])->name('dashboard.destroyInView');
Route::put('/dashboard/{dashboard}/update', [DashboardController::class, 'update'])->name('dashboard.update');

Route::get('/newdashboard', [DashboardController::class, 'index_newdash'])->name('dashboard_create');
Route::post('/newdashboard', [DashboardController::class, 'store']);

Route::post('/logout', [LogoutController::class, 'logout'])->name('logout');

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'signin']);

Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'store']);

Route::get('/charts', function () {
    return view('charts.index');
})->name('charts');
