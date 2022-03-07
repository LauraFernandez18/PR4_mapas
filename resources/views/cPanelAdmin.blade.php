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
    <title>cPanelAdmin</title>
</head>
<body>
    <div>
        <form action="{{url('logout')}}" method="GET">
            <div class="form-group">
                <span><i class="fas fa-sign-out-alt"></i></span>
                <button type="submit" value="logout" class="botoncPanel">LOGOUT</button><br><br>
            </div>
        </form>
    </div>
    <div>
        <form action="{{url('adminUsuariosvista')}}" method="GET">
                <button type="submit" value="Enviar" class="botoncPanel">USUARIOS</button><br><br>
        </form>
        <form action="{{url('adminLugares')}}" method="GET">
                <button type="submit" value="Enviar">LUGARES</button><br><br>
        </form>
    </div>
</body>
</html>
