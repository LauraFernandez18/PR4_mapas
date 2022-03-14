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
                        <div class="nombre"><h3 id="punto-control" data-id="" cant-pt-cnt=""></h3></div>
                        <div class="info-punto-control">
                            <label>Pista:</label>
                            <textarea name="pista" cols="45" rows="5" id="pista"></textarea>
                        </div>
                        <div class="guardar">
                            <button class="btn bg-info btn-lg" id="guardar-boton">Guardar</button>
                        </div>
                    </form>
                    <div class="lugar" id="lugar-div">
                    </div>
                    <div class="orden disabled">
                        <label>Orden:</label>
                        <input type="number" name="orden" id="orden" max="30" min="1">
                    </div>
                    <div class="eliminar">
                        
                    </div>
                    
                </div>
          
    </div>
    <!-- Crear -->
    <div class="region-registrarse modalmask" id="modal">
        <a href="#cerrar" class="cerrar" id="cerrar2">x</a>
                <div class="registrarse resize">
                    <form action="" method="POST" class="registrarse-form" onsubmit="return false" id="form">
                        <div class="nombre"><h3 id="punto-control">Nuevo punto de control</h3></div>
                        <div class="info-punto-control">
                            <label>Pista:</label>
                            <textarea name="pista" cols="45" rows="5" placeholder="Descripcion de la pista" id="pista-crear"></textarea>
                        </div>
                        <div class="guardar">
                            <button class="btn bg-info btn-lg" id="guardar-crear" >Guardar</button>
                        </div>
                    </form>
                    <div class="lugar" id="lugar-div">
                    </div>
                    <div class="orden disabled">
                        <label>Orden:</label>
                        <input type="number" name="orden" id="orden-crear"  max="30" min="1">
                    </div>
                        </div>
                    </form>
                    
                </div>
          
    </div>
</body>

</html>