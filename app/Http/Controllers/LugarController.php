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
        $user=DB::table("tbl_users")->select('*')->where('email', '=', $datos['correo_user'])->where('pwd', '=', md5($datos['pass_user']))->first();
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

    public function registrarUsuario(Request $request){
        $datos = $request->except('_token');
        try{
            DB::beginTransaction();
            DB::insert('insert into tbl_users (nombre, email, pwd, tipo_usu) values (?,?,?,?)',[$request->input('nombre'),$request->input('email'),md5($request->input('pwd')),'usuario']);
            DB::commit();
        }catch(\Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }
        return redirect('');
    }
  
    public function adminUsuariosvista(){
        $datos=DB::select('select * from tbl_users');
        return view('adminUsuarios');
    }

    public function adminUsuarios(Request $request){
        $datos=DB::select('select * from tbl_users where nombre like ?',['%'.$request->input('filtro').'%']);
        return response()->json($datos);
    }

    public function modificar(Request $request){
        try {
            $id=$request->input('id');
            $nombre=$request->input('nombre');
            $email=$request->input('email');
            $pwd=$request->input('pwd');
            $pwd_n=$request->input('pwd_n');
            $pwd_e = DB::table('tbl_users')->select('pwd')->where('id','=',$id)->first();
            /* $pwdd = md5($pwd);
            return $pwdd."    ".$pwd_e->pwd; */
             if($pwd == ""){
                DB::table('tbl_users')
                ->where('id', $id)
                ->update(['nombre' => $nombre,'email' => $email]);
                return response()->json(array('resultado'=> 'OK')); 
            }else{
                if(md5($pwd) == $pwd_e->pwd){
                    DB::table('tbl_users')
                    ->where('id', $id)
                    ->update(['nombre' => $nombre,'email' => $email,'pwd'=>md5($pwd_n)]);
                    return response()->json(array('resultado'=> 'OK'));
                }else{
                    DB::table('tbl_users')
                    ->where('id', $id)
                    ->update(['nombre' => $nombre,'email' => $email]);
                    return response()->json(array('resultado'=> 'Contraseña no actualizada'));
                }  
            }           
        } catch (\Throwable $th) {
            return response()->json(array('resultado'=> 'NOK: '.$th->getMessage()));
        }
    }

    public function eliminaraUser(Request $request){
        try {
            DB::delete('delete from tbl_etiqueta_usuario where fk_usuario = ?', [$request->input('id')]);
            DB::delete('delete from tbl_users where id = ?', [$request->input('id')]);
            return response()->json(array('resultado'=> 'OK'));            
        } catch (\Throwable $th) {
            return response()->json(array('resultado'=> 'NOK: '.$th->getMessage()));
        }
    }

    public function crearUser(Request $request){
        try {
            DB::insert('insert into tbl_users (nombre, email, pwd, tipo_usu) values (?,?,?,?)',[$request->input('nombre'),$request->input('email'),md5($request->input('pwd')),$request->input('tipo_usu')]);
            return response()->json(array('resultado'=> 'OK'));            
        } catch (\Throwable $th) {
            return response()->json(array('resultado'=> 'NOK: '.$th->getMessage()));
        }
    }

    public function markerMapa(){
        $datos=DB::select('select * from tbl_lugares');
        return response()->json($datos);
    }
}
