<?php

namespace App\Http\Controllers;

use App\Models\Lugar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LugarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('index');
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

    public function login(Request $request){
        $datos= $request->except('_token','_method');
        $user=DB::table("tbl_users")->select('*')->where('email', '=', $datos['correo_user'])->where('pwd', '=', $datos['pass_user'])->first();
         if($user->tipo_usu=='administrador'){
           $request->session()->put('nombre_admin',$request->correo_user);
           return redirect('cPanelAdmin');
        }if($user->tipo_usu=='usuario'){
            $request->session()->put('nombre_user',$request->correo_user);
            return redirect('');
        }
        return redirect(''); 
    }

    public function cPanelAdmin(){
        return view('cPanelAdmin');
    }

    public function logout(Request $request){
        $request->session()->forget('nombre_admin');
        $request->session()->forget('nombre_user');
        $request->session()->flush();
        return redirect('index');
    }

    public function adminUsuarios(){
        $users=DB::table('tbl_users')->select('*')->get();
        return view('adminUsuarios', compact('users'));
    }
}
