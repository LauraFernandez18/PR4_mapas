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
    <link rel="stylesheet" href="css/style.css">
    <script src="js/code2.js"></script>
    <meta name="csrf-token" id="token" content="{{ csrf_token() }}">
</head>
<body>
    <form action="{{url('cPanelAdmin')}}" method="GET">
        <button id="vista" type="submit" name="Crear" value="Crear">Cpanel</button>
    </form>
    <p id="mensaje"></p>
    <form onsubmit="crear(); return false;">
        <input type="text" id="nombre" placeholder="Nombre">
        <input type="text" id="email" placeholder="Email">
        <input type="password" id="pwd" placeholder="Contraseña">
        <label for="tipo_usu">Tipo de Usuario:</label>
        <select name="tipo_usu" id="tipo_usu">
            <option value="administrador">Aministrador</option>
            <option value="usuario">Usuario</option>
        </select>
        <input type="submit" value="Crear">
    </form>
    <br>
    <input type="text" onkeyup="leerJS()" id="filtro" placeholder="Filtrar por nombre">
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

