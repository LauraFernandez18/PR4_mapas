<?php

use App\Http\Controllers\LugarController;
use Illuminate\Support\Facades\Route;
use App\Models\Animal;



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


// Route::get('/admin/mapas',[lugarController::class,'adminMapas']);
Route::post('adminMapasAjax',[lugarController::class,'adminMapasAjax']);
Route::post('adminEtiquetasAjax/{id}',[lugarController::class,'adminEtiquetasAjax']);
// Route::get('/admin/gincanas',[lugarController::class,'adminGincanas']);

Route::get('index',[LugarController::class, 'index']);

Route::post('login', [LugarController::class, 'login']);

Route::get('logout', [LugarController::class, 'logout']);

Route::get('cPanelAdmin', [LugarController::class, 'cPanelAdmin']);

Route::post('adminUsuarios',[LugarController::class, 'adminUsuarios']);

Route::get('adminUsuariosvista',[LugarController::class, 'adminUsuariosvista']);

Route::get('adminMapasVista',[LugarController::class, 'adminMapasVista']);

Route::put('modificar',[LugarController::class, 'modificar']);

Route::delete('eliminar',[LugarController::class, 'eliminaraUser']);

Route::post('crear',[LugarController::class, 'crearUser']);

Route::get('cPanelAdmin', [LugarController::class, 'cPanelAdmin']);

Route::post('registrarUser',[LugarController::class, 'registrarUsuario']);

Route::get('markerMapa',[LugarController::class, 'markerMapa']);

