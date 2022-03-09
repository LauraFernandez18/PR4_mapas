<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\lugarController;

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

Route::get('/admin',[lugarController::class,'admin']);
Route::get('/logout',[lugarController::class,'logout']);
Route::get('/admin/usuarios',[lugarController::class,'adminUsuarios']);
Route::get('/admin/mapas',[lugarController::class,'adminMapas']);
Route::post('/admin/adminMapasAjax',[lugarController::class,'adminMapasAjax']);
Route::get('/admin/gincanas',[lugarController::class,'adminGincanas']);
