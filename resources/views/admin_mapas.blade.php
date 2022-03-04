<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script type="text/javascript" src="js/iconos_g.js"></script>
        <link rel="stylesheet" href="../css/stylesAdminMapas.css">
        <title>Admin - Mapas</title>
    </head>
<body>
    <div class="admin-menu-top"></div>
    <div class="admin-logo"><img src="../storage/uploads/logo.png"></div>
    <div class="admin-cpanel"><h3>C-PANEL - Mapas</h3></div>
    <div class="admin-cpanel-crear"><button type="button" class="btn btn-light">Crear lugar de interés</button></div>
    <div class="admin-logout"><button type="button" class="btn btn-secondary" href="{{url('logout')}}">Cerrar sesión</button></div>
</body>
<div class="admin-table">
    <table class="table">
        <tr>
            <th>Nombre</th>
            <th>Longitud</th>
            <th>Latitud</th>
            <th>Etiquetas</th>
        </tr>
        @foreach ($lugares_etiquetas as $x => $val)
        <tr>
            <td>{{$lugar[$contenido]}}</td>
            <td>{{$lugar->longitud}}</td>
            <td>{{$lugar->latitud}}</td>
        </tr>
        @endforeach
    </table>
</div>
</html>