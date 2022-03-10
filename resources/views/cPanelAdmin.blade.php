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
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="{!! asset('css/tabla.css') !!}">
    <title>cPanelAdmin</title>
</head>
<body>
    <div>
        <form action="{{url('logout')}}" method="GET">
            <div class="form-group">
                <button type="submit" value="logout" class="botoncPanel"><i class="fas fa-sign-out-alt"></i></button><br><br>
            </div>
        </form>
    </div>
    <div>
        <div class="modal_cpanel">
        <h1>CPanel</h1>
        <br>
        <form action="{{url('adminUsuariosvista')}}" method="GET">
                <button type="submit" value="Enviar" class="botoncPanel"><i class="fa fa-user" aria-hidden="true"></i> USUARIOS</button><br><br>
        </form>
        <form action="{{url('adminMapasVista')}}" method="GET">
                <button type="submit" class="botoncPanel" value="Enviar"><i class="fa fa-map" aria-hidden="true"></i> LUGARES</button><br><br>
        </form>
        <form action="{{url('adminMapasVista')}}" method="GET">
            <button type="submit" class="botoncPanel" value="Enviar"><i class="fa fa-map-pin" aria-hidden="true"></i> GIMCANA</button><br><br>
    </form>
    </div>
    </div>
</body>
</html>
