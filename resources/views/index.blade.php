<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>INICIO</title>
    <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />

    <meta name="csrf-token" id="token" content="{{ csrf_token() }}">

</head>
<body>
    <div id="map">
        <button class="btn btn-info btn_inicio btn-lg" type="button" id="myBtn"><b>Log In</b></button>
        <button type="submit" class="btn_cabecera btn btn-secondary btn-lg" onclick="return indexGimcana();" value="Enviar"><b>Gimcana</b></button>
        <div class="filtro" id="filtro_btn">
          
        </div>
        <!-- MODAL INICIAR SESION Y REGISTRAR -->
        <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
                <div class="register" id="content_regis">
                  <form action="{{url('login')}}" method="POST" onsubmit="return validarLogin();">
              @csrf
                <h1>Iniciar sesión</h1><br>
                <span><i class="fas fa-envelope"></i></span>
                <input class="inp_txt" type="email" name="correo_user" id="correo_user" placeholder="Introduce tu correo" value="{{old('correo_user')}}"><br><br>
                @error('correo_user')
                {{$message}}
                @enderror
                <span><i class="fas fa-lock"></i></span>
                <input type="password" name="pass_user" id="pass_user" placeholder="Introduce tu contraseña">
                <br><br>
                <button class="btn_regis" type="submit" value="register">Iniciar Sesión</button><br><br>

              </form>
              <p>¿No tienes una cuenta todavía? <button class="btn_mostrar" onclick="mostrarlog();" id="btn_regis">Registrarme</button></p>
          </div>
          <div class="register2" id="content_regis2">
            <form action="{{url('registrarUser')}}" method="POST" onsubmit="return validarRegistro();">
              @csrf
                <h1>Regístrate</h1><br>
                <span><i class="fas fa-user"></i></span>
                <input class="inp_txt" type="text" name="nombre" id="nombre" placeholder="Introduce tu nombre"><br><br>
                <span><i class="fas fa-envelope"></i></span>
                <input class="inp_txt" type="text" name="email" id="email" placeholder="Introduce tu correo"><br><br>
                <span><i class="fas fa-lock"></i></span>
                <input type="password" name="pwd" id="pwd" placeholder="Introduce tu contraseña">
                <br><br>
                <button class="btn_regis" type="submit" value="register">Registrarme</button><br><br>
              </form>
                    <p>¿Ya tienes una cuenta? <button class="btn_mostrar" onclick="mostrarreg();" id="btn_regis">Inicia sesión</button></p>
                </div>
            </div>
          </div>
          <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossorigin=""></script>
          <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
          <script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
          <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
          <script src="js/ajax.js"></script>
</body>
</html>
