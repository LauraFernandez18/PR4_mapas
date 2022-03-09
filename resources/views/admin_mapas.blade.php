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
        <script type="text/javascript" src="../js/iconos_g.js"></script>
        <link rel="stylesheet" href="../css/stylesAdminMapas.css">
        <script src="../js/jquery.js"></script>
        
        <title>Admin - Mapas</title>
    </head>
<body>
    <div id="map"></div>
    <!-- <div class="admin-logo"><img src="../storage/uploads/logo.png"></div> -->
    <div class="admin-cpanel"><p>C-PANEL</p></div>
    <div class="admin-cpanel-crear"><button class="btn btn-dark btn-lg" onclick="modal2();">Crear lugar &nbsp;<i class="fas fa-map-marker-alt"></i></button></div>
    <div class="admin-logout"><a href="{{ url('/logout') }}"><button class="btn btn-danger btn-lg"><i class="fas fa-power-off"></i></button></a></div>
    <div class="admin-atras"><a href="{{ url('/admin') }}"><button class="btn btn-info btn-lg"><i class="fa fa-arrow-circle-left"></i></button></a></div>
    <div class="lugares">
        <h2>Lugares de interés</h2>
        @foreach ($lugaresdistinct as $lugar)
            <p class="lugar-jquery" data-id="{{$lugar->id}}" data-nombre="{{$lugar->nombre}}" data-long="{{$lugar->longitud}}" data-lat="{{$lugar->latitud}}" data-foto="{{$lugar->foto}}">• {{$lugar->nombre}}</p>
        @endforeach

    </div>
    
    <script language="javascript" src="../js/js.js"></script>

    <!-- Modificar -->
    <div class="region-registrarse modalmask" id="modal">
        <a href="#cerrar" class="cerrar" id="cerrar">x</a>
                <div class="registrarse resize">
                    <form action="{{url('login')}}" method="POST" class="registrarse-form" onsubmit="return validar_login()" id="form">
                        <div class="nombre"><input type="text" name="nombre" id="nombre" value=""></div>
                        <div class="info">
                            <label>Longitud</label>
                            <input type="text" name="longitud" id="longitud">
                            <label>Latitud</label>
                            <input type="text" name="latitud" id="latitud">
                            <label>Foto</label>
                            <input type="file" name="file" class="upload" accept="image/*">
                        </div>
                        <div class="foto">
                            <img src="" id="foto">
                        </div>
                        <div class="etiquetas">
                            <p>Etiquetas</p>
                            <div class="etiquetas-etiqueta mb-2">
                                <button type="button" class="btn btn-success mr-3">Caluroso</button>
                                <button type="button" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                            </div>
                            
                        </div>
                        <div class="guardar">
                            <button class="btn bg-info btn-lg" id="guardar-boton" type="submit">Guardar</button>
                        </div>
                    </form>
                    <div class="anadir-etiqueta">
                        <form action="">
                            <p>Añadir etiquetas</p>
                            <input type="text" name="etiqueta" placeholder="+ Nueva etiqueta">
                            <div class="anadir-etiqueta-enviar btn-sm"><button type="submit" class="btn bg-primary"><i class="fa fa-plus"></i></button></div>
                        </form>
                    </div>
                    <div class="eliminar">
                        <button class="btn bg-danger btn-lg" id="eliminar-boton">Eliminar lugar</button>
                    </div>
                    
                </div>
          
    </div>
    <!-- Crear -->
    <div class="region-registrarse modalmask" id="modal">
        <a href="#cerrar" class="cerrar" id="cerrar2">x</a>
                <div class="registrarse resize">
                    <form action="{{url('login')}}" method="POST" class="registrarse-form" onsubmit="return validar_login()" id="form">
                        <div class="nombre"><input type="text" name="nombre" value="Nombre lugar"></div>
                        <div class="info">
                            <label>Longitud</label>
                            <input type="text" name="longitud">
                            <label>Latitud</label>
                            <input type="text" name="latitud">
                            <label>Foto</label>
                            <input type="file" name="file" class="upload" accept="image/*">
                        </div>
                        <div class="etiquetas">
                            <p>Etiquetas</p>
                        </div>
                        <div class="anadir-etiqueta disabled">
                            <p>Añadir etiquetas</p>
                            <input type="text" name="etiqueta" placeholder="+ Nueva etiqueta">
                        </div>
                        <div class="crear">
                            <button class="btn bg-info btn-lg" id="guardar-boton" type="submit">Crear</button>
                        </div>
                    </form>
                    
                </div>
          
    </div>
</body>

</html>