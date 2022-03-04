<?php

use App\Http\Controllers\LugarController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('mapa');
});

// ruta para leer
Route::post('leer',[LugarController::class, 'leerController']);