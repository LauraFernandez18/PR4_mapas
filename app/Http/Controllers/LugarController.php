<?php

namespace App\Http\Controllers;

use App\Models\Lugar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class LugarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lugar  $lugar
     * @return \Illuminate\Http\Response
     */
    public function show(Lugar $lugar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Lugar  $lugar
     * @return \Illuminate\Http\Response
     */
    public function edit(Lugar $lugar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Lugar  $lugar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Lugar $lugar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lugar  $lugar
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lugar $lugar)
    {
        //
    }

    public function admin()
    {
        return view('admin');
    }
    
    public function adminUsuarios()
    {
        return view('admin_usuarios');
    }

    public function adminMapas()
    {
        $lugaresdistinct=DB::select('SELECT distinct tbl_lugares.id, tbl_lugares.nombre, tbl_lugares.longitud, tbl_lugares.latitud, tbl_lugares.foto from tbl_lugares INNER JOIN tbl_etiquetas on tbl_lugares.id=tbl_etiquetas.fk_lugar INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador";');

        return view('admin_mapas', compact('lugaresdistinct'));
    }

    public function adminMapasAjax()
    {
        $lugaresdistinct=DB::select('SELECT distinct tbl_lugares.id, tbl_lugares.nombre, tbl_lugares.longitud, tbl_lugares.latitud, tbl_lugares.foto from tbl_lugares INNER JOIN tbl_etiquetas on tbl_lugares.id=tbl_etiquetas.fk_lugar INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador";');
        $lugares=DB::select('SELECT tbl_lugares.id, tbl_lugares.nombre, tbl_lugares.longitud, tbl_lugares.latitud from tbl_lugares INNER JOIN tbl_etiquetas on tbl_lugares.id=tbl_etiquetas.fk_lugar INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador";');
        $etiquetas=DB::select('SELECT tbl_etiquetas.fk_lugar,tbl_etiquetas.nombre from tbl_etiquetas INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador";');
        $lugares_etiquetas = array();
        $etiquetas2 = array();
        foreach ($lugares as $lugar) {
            //array_push($lugares_etiquetas,$lugar->nombre);
            //$lugares_etiquetas=$lugar->nombre;
            foreach ($etiquetas as $etiqueta) {
                if ($lugar->id==$etiqueta->fk_lugar) {
                    array_push($etiquetas2,$etiqueta->nombre);
                    //array_push($lugares_etiquetas[$lugar->nombre],$etiqueta->nombre);
                }
            }
            $lugares_etiquetas[$lugar->nombre]=$etiquetas2;
            $etiquetas2=[];
        }
        //print_r( $lugares_etiquetas);
        return response()->json($lugaresdistinct);
    }

    public function adminGincanas()
    {
        return view('admin_gincanas');
    }
}
