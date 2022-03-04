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
    <script src="js/code.js"></script>
</head>
<body>
    <table>
    <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Tipo_usu</th>
        <th>Modificar</th>
        <th>Eliminar</th>
    </tr>
    @foreach($users as $item)
            <tr>
                <?php
                $id_s = Session::get('nombre_admin');
                $id = "$item->email";
                if($id_s == $id){
                    echo "<td>$item->nombre</td>";
                    echo "<td>$item->email</td>";
                    echo "<td>$item->tipo_usu</td>";
                    echo "<td><button id='myBtn'>Modificar</button></td>";
                    echo "<td><button><abbr title='No puedes eliminar tu propio usuario'><s>Eliminar</s></abbr></button></td>";
                }else{
                    echo "<td>$item->nombre</td>";
                    echo "<td>$item->email</td>";
                    echo "<td>$item->tipo_usu</td>";
                    echo "<td><button onclick=''>Modificar</button></td>";
                    echo "<td><button onclick=''>Eliminar</button></td>";
                }
                ?>
                <!-- The Modal -->
                <div id="myModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                <span class="close">&times;</span>
                <form>
                    <input type="text" value="{{$item->nombre}}">
                </form>
                </div>

                </div>
            </tr>
    @endforeach
    </table>
</body>
</html>