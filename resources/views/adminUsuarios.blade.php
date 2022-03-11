@if (!Session::get('nombre_admin'))
    <?php
        //Si la session no esta definida te redirige al login.
        return redirect()->to('/index')->send();
    ?>
@endif
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>adminUsuarios</title>
    <link rel="stylesheet" href="{!! asset('css/tabla.css') !!}">
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="js/code2.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <meta name="csrf-token" id="token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <a class="cpanel" href="{{url('cPanelAdmin')}}"><i class="fa fa-home"></i></a>
    <h3><b>Usuarios</b></h3>
    <p id="mensaje"></p>
    <form onsubmit="crear(); return false;">
        <input type="text" class="form-control" id="nombre" placeholder="Nombre" value="{{old('nombre')}}">
        <input type="email" class="form-control" id="email" placeholder="Email">
        <input type="password" class="form-control" id="pwd" placeholder="Contraseña">
        <select class="form-control" name="tipo_usu" id="tipo_usu">
            <option class="form-control" value="administrador">Administrador</option>
            <option class="form-control" value="usuario">Usuario</option>
        </select>
        <input type="submit" class="btn btn-info" value="Crear">
    </form>
    <br>
    <input type="search" class="form-control rounded" onkeyup="leerJS()" id="filtro" placeholder="Filtrar por nombre">
    <input type="hidden" name="adm" id="adm" value="<?php echo Session::get('nombre_admin');?>">
    <table id="main">
    {{-- <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Tipo_usu</th>
        <th>Modificar</th>
        <th>Eliminar</th>
    </tr>
    @foreach($users as $item)
            <tr>
                <td>{{$item->nombre}}</td>
                <td>{{$item->email}}</td>
                <td>{{$item->tipo_usu}}</td>
                <td><button onclick="modificar({{$item->id}},'{{$item->nombre}}','{{$item->email}}'); return false;">Modificar</button></td>
                <?php
                /* $id_s = Session::get('nombre_admin');
                $id = "$item->email";
                if($id_s == $id){
                    echo "<td><button><abbr title='No puedes eliminar tu propio usuario'><s>Eliminar</s></abbr></button></td>";
                }else{
                    echo "<td><button onclick=''>Eliminar</button></td>";
                } */
                ?>
                <div id="myModal" class="modal">
                    <!-- Modal content -->
                    <div class="modal-content">
                      <span id="cerrar" class="close">&times;</span>
                      <p id="contenido"></p>
                    </div>
                </div>
            </tr>
    @endforeach --}}
    </table>
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <span id="cerrar" class="close">&times;</span>
          <p id="contenido"></p>
        </div>
      </div>
</body>
</html>

