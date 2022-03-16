<?php

namespace App\Http\Controllers;

use App\Models\Lugar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;



class LugarController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function index_inicio()
    {
        return view('index_inicio');
    }

    public function destroy(Lugar $lugar)
    {
        //
    }

    public function adminMapasVista()
    {
        return view('admin_mapas');
    }


    public function MenuDerechaLugares()
    {
        $lugaresdistinct=DB::select('SELECT distinct tbl_lugares.id, tbl_lugares.nombre, tbl_lugares.longitud, tbl_lugares.latitud, tbl_lugares.foto, tbl_lugares.descripcion, tbl_lugares.foto_icon from tbl_lugares INNER JOIN tbl_etiquetas on tbl_lugares.id=tbl_etiquetas.fk_lugar INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador";');

        return response()->json($lugaresdistinct);
    }

    public function adminMapasAjax()
    {
        $lugaresdistinct=DB::select('SELECT distinct tbl_lugares.id, tbl_lugares.nombre, tbl_lugares.longitud, tbl_lugares.latitud, tbl_lugares.foto, tbl_lugares.descripcion, tbl_lugares.foto_icon from tbl_lugares INNER JOIN tbl_etiquetas on tbl_lugares.id=tbl_etiquetas.fk_lugar INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador";');
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

    public function adminEtiquetasAjax($id)
    {
        $etiquetas=DB::select('SELECT tbl_etiquetas.id, tbl_etiquetas.fk_lugar,tbl_etiquetas.nombre from tbl_etiquetas INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador" AND tbl_etiquetas.fk_lugar=?',[$id]);

        return response()->json($etiquetas);
    }

    public function crearEtiqueta(Request $request)
    {
        $datos = $request->except('_token');
        $etiquetas=DB::table('tbl_etiquetas')->insertGetId(["nombre"=>$datos['etiqueta'],"fk_lugar"=>$datos['lugar']]);
        $etiquetasUser=DB::table('tbl_etiqueta_usuario')->insertGetId(["fk_usuario"=>'1',"fk_etiqueta"=>$etiquetas]);
        $lugar=DB::select('SELECT distinct tbl_lugares.id, tbl_lugares.nombre, tbl_lugares.longitud, tbl_lugares.latitud, tbl_lugares.foto, tbl_lugares.descripcion, tbl_lugares.foto_icon from tbl_lugares INNER JOIN tbl_etiquetas on tbl_lugares.id=tbl_etiquetas.fk_lugar INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador" and tbl_lugares.id=?',[$datos['lugar']]);
        return response()->json($lugar);
    }

    public function eliminarEtiqueta($id)
    {
        DB::table('tbl_etiqueta_usuario')->where('fk_etiqueta','=',$id)->delete();
        DB::table('tbl_punto_control')->where('fk_lugar','=',$id)->delete();
        DB::table('tbl_etiquetas')->where('id','=',$id)->delete();
        return response()->json(array('resultado'=> 'OK'));
    }

    public function EliminarLugar(Request $request)
    {
        $datos = $request->except('_token');
        $lugar=DB::select("SELECT tbl_punto_control.id from tbl_lugares INNER JOIN tbl_punto_control on tbl_lugares.id=tbl_punto_control.fk_lugar where tbl_lugares.id=?",[$datos['id']]);
        if (count($lugar)==0) {
            $etiquetas=DB::select('SELECT tbl_etiquetas.id, tbl_etiquetas.fk_lugar,tbl_etiquetas.nombre from tbl_etiquetas INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador" AND tbl_etiquetas.fk_lugar=?',[$datos['id']]);
            foreach ($etiquetas as $i) {
                DB::table('tbl_etiqueta_usuario')->where('fk_etiqueta','=',$i->id)->delete();
                DB::table('tbl_etiquetas')->where('id','=',$i->id)->delete();
            }
            DB::table('tbl_lugares')->where('id','=',[$datos['id']])->delete();
            return response()->json(array('resultado'=> 'OK'));
         }
         else {
             $mal= array('mal');
            return response()->json($mal);
         }
        
        //el lugar no se eliminará si pertence a la gincana
    }

    public function CrearLugar(Request $request)
    {
        $datos=$request->except('_token','_method');
        $lugar=DB::table('tbl_lugares')->insertGetId(["nombre"=>$datos['nombre'],"longitud"=>$datos['longitud'],"latitud"=>$datos['latitud'],"foto"=>$datos['foto'],"descripcion"=>$datos['descripcion'],"foto_icon"=>$datos['foto_icon']]);
        $etiqueta=DB::table('tbl_etiquetas')->insertGetId(["nombre"=>$datos['etiqueta'],"fk_lugar"=>$lugar]);
        DB::table('tbl_etiqueta_usuario')->insertGetId(["fk_usuario"=>'1',"fk_etiqueta"=>$etiqueta]);
        return response()->json(array('resultado'=> 'OK'));
    }

    public function UpdateLugar(Request $request)
    {
        $datos=$request->except('_token','_method');
        if ($request->hasFile('foto')) {
            $foto = DB::table('tbl_lugares')->select('foto')->where('id','=',$request['id'])->first();
            if ($foto->foto != null) {
                Storage::delete('public/storage/uploads'.$foto->foto);
            }
            $datos['foto'] = $request->file('foto')->store('uploads','public');
        }
        $datosLugar=$request->except('_token','_method','id');
        DB::table('tbl_lugares')->where('id','=',$request['id'])->update($datosLugar);
        $lugar=DB::select('SELECT distinct tbl_lugares.id, tbl_lugares.nombre, tbl_lugares.longitud, tbl_lugares.latitud, tbl_lugares.foto, tbl_lugares.descripcion, tbl_lugares.foto_icon from tbl_lugares INNER JOIN tbl_etiquetas on tbl_lugares.id=tbl_etiquetas.fk_lugar INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador" and tbl_lugares.id=?',[$request['id']]);


        return response()->json($lugar);
    }



    public function adminGincanas()
    {
        return view('admin_gincanas');
    }

    public function MenuDerechaGincana() {

        $puntosControl=DB::select('SELECT tbl_punto_control.id, tbl_punto_control.pista, tbl_punto_control.fk_gincana, tbl_lugares.nombre, tbl_punto_control.orden FROM tbl_lugares INNER JOIN `tbl_punto_control` on tbl_lugares.id=tbl_punto_control.fk_lugar INNER JOIN tbl_gincana on tbl_punto_control.fk_gincana=tbl_gincana.id where tbl_gincana.id=1 order by tbl_punto_control.orden asc;');

        return response()->json($puntosControl);
    }

    public function RoutingGincana() {

        $puntosControl=DB::select("SELECT tbl_punto_control.id, tbl_lugares.latitud, tbl_lugares.longitud, tbl_lugares.nombre, tbl_punto_control.orden FROM tbl_lugares INNER JOIN `tbl_punto_control` on tbl_lugares.id=tbl_punto_control.fk_lugar INNER JOIN tbl_gincana on tbl_punto_control.fk_gincana=tbl_gincana.id where tbl_gincana.id=1 order by tbl_punto_control.orden asc;");

        return response()->json($puntosControl);
    }


    public function CountPuntoControl() {

        $countPuntosControl=DB::select("SELECT count(tbl_punto_control.id) as 'count' FROM `tbl_punto_control`;");
        return response()->json($countPuntosControl);

    }

    public function ModificarPuntoControl(Request $request) {

        $datos=$request->except('_token','_method');
        DB::table('tbl_punto_control')->where('id','=',$request['id'])->update($datos);
        return response()->json(array('resultado'=> 'OK'));

    }

    public function CrearPuntoControl(Request $request) {

        $datos=$request->except('_token','_method');
        DB::table('tbl_punto_control')->insertGetId(["pista"=>$datos['pista'],"fk_gincana"=>1,"fk_lugar"=>$datos['fk_lugar'],"orden"=>$datos['orden']]);
        return response()->json(array('resultado'=> 'OK'));

    }

    public function EliminarPuntoControl(Request $request) {

        $datos=$request->except('_token','_method');
        DB::table('tbl_punto_control')->where('id','=',[$datos['id']])->delete();
        return response()->json(array('resultado'=> 'OK'));

    }


    public function login(Request $request){
        $datos= $request->except('_token','_method');
        $users=DB::table("tbl_users")->select('*')->where('email', '=', $datos['correo_user'])->where('pwd', '=', md5($datos['pass_user']))->count();
        $user=DB::table("tbl_users")->select('*')->where('email', '=', $datos['correo_user'])->where('pwd', '=', md5($datos['pass_user']))->first();
        if($users==0){
            return redirect('index');
        } 
        if($user->tipo_usu=='administrador'){
           $request->session()->put('nombre_admin',$request->correo_user);
           return redirect('cPanelAdmin');
        }if($user->tipo_usu=='usuario'){
            $request->session()->put('nombre_user',$request->correo_user);
            return redirect('index_inicio');
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
        $request->session()->put('nombre_user',$request->input('email'));
        return redirect('index_inicio');
    }

    public function adminUsuariosvista(){
        $datos=DB::select('select * from tbl_users');
        return view('adminUsuarios');
    }

    public function adminUsuarios(Request $request){
        $datos=DB::select('select * from tbl_users where nombre like ?',['%'.$request->input('filtro').'%']);
        return response()->json($datos);
    }

    public function gimcana(){
        return view('gimcana');
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
            $long_pwd = strlen($request->input('pwd'));
            if($long_pwd>= 8){
                DB::insert('insert into tbl_users (nombre, email, pwd, tipo_usu) values (?,?,?,?)',[$request->input('nombre'),$request->input('email'),md5($request->input('pwd')),$request->input('tipo_usu')]);
                return response()->json(array('resultado'=> 'OK'));
            }else{
                return response()->json(array('resultado'=> 'Contraseña menor de 8 caracteres'));
            }
            
        } catch (\Throwable $th) {
            //return response()->json(array('resultado'=> 'NOK: '.$th->getMessage()));
        }
    }

    public function markerMapa(){
        $datos=DB::select('select * from tbl_lugares');
        return response()->json($datos);

    }

    public function filtroMapa(Request $request){
        $id = $request->input('id');
        $datos=DB::select('SELECT tbl_lugares.nombre, tbl_lugares.longitud, tbl_lugares.latitud, tbl_lugares.descripcion, tbl_lugares.foto, tbl_lugares.foto_icon from tbl_lugares 
        INNER JOIN tbl_etiquetas on tbl_lugares.id=tbl_etiquetas.fk_lugar 
        INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta 
        where tbl_etiquetas.id='.$id.';');
        return response()->json($datos);
    }

    public function filtro(){
        $datos=DB::select('SELECT tbl_etiquetas.id, tbl_etiquetas.nombre from tbl_etiquetas 
        INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta 
        INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador";');
        return response()->json($datos);
    }

    public function gimcana_preg(){
        $datos=DB::select('SELECT tbl_punto_control.pista, tbl_punto_control.orden, tbl_lugares.nombre, tbl_lugares.latitud, 
        tbl_lugares.longitud FROM tbl_punto_control 
        INNER JOIN tbl_lugares ON tbl_punto_control.fk_lugar = tbl_lugares.id
        INNER JOIN tbl_gincana ON tbl_punto_control.fk_gincana = tbl_gincana.id
        WHERE tbl_gincana.id=1 
        ORDER BY tbl_punto_control.pista DESC;');
        return response()->json($datos);
    }
}
