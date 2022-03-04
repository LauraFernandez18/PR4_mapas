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
    <div class="admin-menu-top"></div>
    <div class="admin-logo"><img src="storage/uploads/logo.png"></div>
    <div class="admin-cpanel"><h3>C-PANEL</h3></div>
    <div class="admin-logout"><button type="button" class="btn btn-secondary" href="{{url('logout')}}">Cerrar sesión</button></div>
    <div class="admin-boton-administrar-users" onclick="location.href='{{url('admin/usuarios')}}';">
        <div class="admin-boton-administrar-img">
            <img src="storage/uploads/usuarios.png">
        </div>
        <div class="admin-boton-administrar-texto">
            <h4>Usuarios</h4>
        </div>
    </div>
    <div class="admin-boton-administrar-mapas" onclick="location.href='{{url('admin/mapas')}}';">
        <div class="admin-boton-administrar-img">
            <img src="storage/uploads/mapa.png">
        </div>
        <div class="admin-boton-administrar-texto">
            <h4>Mapas</h4>
        </div>
    </div>
    <div class="admin-boton-administrar-gincanas" onclick="location.href='{{url('admin/gincanas')}}';">
        <div class="admin-boton-administrar-img">
            <img src="storage/uploads/gincana.png">
        </div>
        <div class="admin-boton-administrar-texto">
            <h4>Gincanas</h4>
        </div>
    </div>
</body>
</html>