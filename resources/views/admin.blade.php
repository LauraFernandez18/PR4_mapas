<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script type="text/javascript" src="js/iconos_g.js"></script>
    <link rel="stylesheet" href="css/stylesAdmin.css">
    <title>Admin</title>
</head>
<body>
    <!-- <div class="admin-logo"><img src="storage/uploads/logo.png"></div> -->
    <div class="admin-cpanel"><p>C-PANEL</p></div>
    <div class="admin-logout"><button type="button" class="btn btn-danger btn-lg" href="{{url('logout')}}"><i class="fas fa-power-off"></i></button></div>
    <div class="admin-boton-administrar-users" onclick="location.href='{{url('admin/usuarios')}}';">
        <div class="admin-boton-administrar-img">
            <img src="storage/uploads/usuarios.png">
        </div>
        <div class="admin-boton-administrar-texto">
            <p>Usuarios</p>
        </div>
    </div>
    <div class="admin-boton-administrar-mapas" onclick="location.href='{{url('admin/mapas')}}';">
        <div class="admin-boton-administrar-img">
            <img src="storage/uploads/mapa.png">
        </div>
        <div class="admin-boton-administrar-texto">
            <p>Mapas</p>
        </div>
    </div>
    <div class="admin-boton-administrar-gincanas" onclick="location.href='{{url('admin/gincanas')}}';">
        <div class="admin-boton-administrar-img">
            <img src="storage/uploads/gincana.png">
        </div>
        <div class="admin-boton-administrar-texto">
            <p>Gincanas</p>
        </div>
    </div>
</body>
</html>