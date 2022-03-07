<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
   <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/mapa.js"></script>
    <script src="js/code.js"></script>
</head>
<body>
    <button class="empezar" id="myBtn"><b>Empezar</b></button> 
    <div id="map"></div>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
          <div class="register" id="content_regis">
            <form action="{{url('login')}}" method="POST">
              @csrf
                <h1>Iniciar sesión</h1><br>
                <span><i class="fas fa-envelope"></i></span>
                <input class="inp_txt" type="email" name="correo_user" placeholder="Introduce tu correo" required><br><br>
                <span><i class="fas fa-lock"></i></span>
                <input type="password" name="pass_user" placeholder="Introduce tu contraseña" required>
                <br><br>
                <button class="btn_regis" type="submit" value="register">Iniciar Sesión</button><br><br>

              </form>
              <p>¿No tienes una cuenta todavía? <button class="btn_mostrar" onclick="mostrarlog();" id="btn_regis">Registrarme</button></p>
          </div>
          <div class="register2" id="content_regis2">
            <form action="{{url('registrarUser')}}" method="POST">
              @csrf
                <h1>Regístrate</h1><br>
                <span><i class="fas fa-user"></i></span>
                <input class="inp_txt" type="text" name="nombre" placeholder="Introduce tu nombre" required><br><br>
                  @error('nombre')
                    <br>
                    {{$message}}
                  @enderror
                <span><i class="fas fa-envelope"></i></span>
                <input class="inp_txt" type="email" name="email" placeholder="Introduce tu correo" required><br><br>
                  @error('email')
                    <br>
                    {{$message}}
                  @enderror
                <span><i class="fas fa-lock"></i></span>
                <input type="password" name="pwd" placeholder="Introduce tu contraseña" required>
                  @error('pwd')
                    <br>
                    {{$message}}
                  @enderror
                <br><br>
                <button class="btn_regis" type="submit" value="register">Registrarme</button><br><br>
              </form>
              <p>¿Ya tienes una cuenta? <button class="btn_mostrar" onclick="mostrarreg();" id="btn_regis">Inicia sesión</button></p>
          </div>
      </div>
    </div>
</body>
</html>