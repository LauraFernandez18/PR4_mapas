<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/code.js"></script>
</head>
<body>
    <button class="empezar" id="myBtn"><b>Empezar</b></button> 
    <div id="myModal" class="modal">

      <div class="modal-content">
        <span class="close">&times;</span>
          <div class="register" id="content_regis">
            <form action="{{url('login')}}" method="POST">
              @csrf
                <h1>Iniciar sesión</h1><br>
                <span><i class="fas fa-envelope"></i></span>
                <input class="inp_txt" type="text" name="correo_user" placeholder="Introduce tu correo"><br><br>
                <span><i class="fas fa-lock"></i></span>
                <input type="password" name="pass_user" placeholder="Introduce tu contraseña">
                <br><br>
                <button class="btn_regis" type="submit" value="register">Iniciar Sesión</button><br><br>

              </form>
              <p>¿No tienes una cuenta todavía? <button class="btn_mostrar" onclick="mostrarlog();" id="btn_regis">Registrarme</button></p>
          </div>
          <div class="register2" id="content_regis2">
            <form action="{{url('register')}}" method="POST">
              @csrf
                <h1>Regístrate</h1><br>
                <span><i class="fas fa-user"></i></span>
                <input class="inp_txt" type="text" name="nombre_user" placeholder="Introduce tu nombre"><br><br>
                <span><i class="fas fa-envelope"></i></span>
                <input class="inp_txt" type="text" name="correo_user" placeholder="Introduce tu correo"><br><br>
                <span><i class="fas fa-lock"></i></span>
                <input type="password" name="pass_user" placeholder="Introduce tu contraseña">
                <br><br>
                <button class="btn_regis" type="submit" value="register">Registrarme</button><br><br>
              </form>
              <p>¿Ya tienes una cuenta? <button class="btn_mostrar" onclick="mostrarreg();" id="btn_regis">Inicia sesión</button></p>
          </div>
      </div>
    </div>
</body>
</html>