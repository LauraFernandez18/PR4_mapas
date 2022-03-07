<?php

use App\Http\Controllers\LugarController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

// ruta para leer
Route::post('index',[LugarController::class, 'index']);

Route::post('login', [LugarController::class, 'login']);

Route::get('logout', [LugarController::class, 'logout']);

Route::get('cPanelAdmin', [LugarController::class, 'cPanelAdmin']);

Route::post('adminUsuarios',[LugarController::class, 'adminUsuarios']);

Route::get('adminUsuariosvista',[LugarController::class, 'adminUsuariosvista']);

Route::put('modificar',[LugarController::class, 'modificar']);

Route::delete('eliminar',[LugarController::class, 'eliminaraUser']);

Route::post('crear',[LugarController::class, 'crearUser']);
