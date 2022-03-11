<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="csrf-token" id="token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"/>
        <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
        <script type="text/javascript" src="js/iconos_g.js"></script>
        <link rel="stylesheet" href="{!! asset('css/stylesAdminMapas.css') !!}">
        <script src="js/jquery.js"></script>
        
        <title>Admin - Gincana</title>
    </head>
<body>
    <div id="map"></div>
    <!-- <div class="admin-logo"><img src="../storage/uploads/logo.png"></div> -->
    <div class="admin-cpanel"><p>C-PANEL</p></div>
    <div class="admin-cpanel-crear"><button class="btn btn-dark btn-lg" onclick="modal2();">Crear punto control &nbsp;<i class="fas fa-map-marker-alt"></i></button></div>
    <div class="admin-logout"><a href="{{ url('/logout') }}"><button class="btn btn-danger btn-lg"><i class="fas fa-power-off"></i></button></a></div>
    <div class="admin-atras"><a href="{{ url('cPanelAdmin') }}"><button class="btn btn-info btn-lg"><i class="fa fa-arrow-circle-left"></i></button></a></div>
    <div class="lugares" id="lugares">
        

    </div>
    
    <script language="javascript" src="js/adminGincanas.js"></script>

    <!-- Modificar -->
    <div class="region-registrarse modalmask" id="modal">
        <a href="#cerrar" class="cerrar" id="cerrar">x</a>
                <div class="registrarse resize">
                    <form action="" method="POST" class="registrarse-form" onsubmit="return false" id="form">
                        <div class="nombre"><h3 id="punto-control" data-id=""></h3></div>
                        <div class="info-punto-control">
                            <label>Pista:</label>
                            <textarea name="pista" cols="45" rows="5" id="pista"></textarea>
                        </div>
                        <div class="guardar">
                            <button class="btn bg-info btn-lg" id="guardar-boton">Guardar</button>
                        </div>
                    </form>
                    <div class="lugar">
                        <label>Lugar:</label>
                        <select name="lugar" id="lugar">
                            <option value="volvo">Volvo</option>
                          </select>
                    </div>
                    <div class="orden">
                        <label>Orden:</label>
                        <input type="number" name="orden" id="orden">
                    </div>
                    <div class="eliminar">
                        <button class="btn bg-danger btn-lg" id="eliminar-boton">Eliminar</button>
                    </div>
                    
                </div>
          
    </div>
    <!-- Crear -->
    <div class="region-registrarse modalmask" id="modal">
        <a href="#cerrar" class="cerrar" id="cerrar2">x</a>
                <div class="registrarse resize">
                    <form action="" method="POST" class="registrarse-form" onsubmit="return false" id="form">
                        <div class="nombre"><input type="text" name="nombre" value="Nombre lugar" id="nombre-crear"></div>
                        <div class="info">
                            <label>Longitud</label>
                            <input type="text" name="longitud" id="longitud-crear">
                            <label>Latitud</label>
                            <input type="text" name="latitud" id="latitud-crear">
                            <label>Foto</label>
                            <input type="file" name="file" class="upload" accept="image/*" id="foto-crear">
                        </div>
                        <div class="palabra-etiqueta">
                            <p>Etiquetas</p>
                        </div>
                        <div class="etiquetas">
                            
                        </div>
                        <div class="anadir-etiqueta">
                            <p>Añadir etiquetas</p>
                            <input type="text" name="etiqueta" placeholder="+ Nueva etiqueta" id="etiqueta-crear">
                        </div>
                        <div class="crear">
                            <button class="btn bg-info btn-lg" id="guardar-boton-crear">Crear</button>
                        </div>
                    </form>
                    
                </div>
          
    </div>
</body>

</html>