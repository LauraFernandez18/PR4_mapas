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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="csrf-token" id="token" content="{{ csrf_token() }}">
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script> <!--mensaje error -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"/>
        <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script type="text/javascript" src="js/iconos_g.js"></script>
        <link rel="stylesheet" href="{!! asset('css/stylesAdminMapas.css') !!}">
        <script src="js/jquery.js"></script>
        <title>Admin - Mapas</title>
    </head>
<body>
    <div id="map"></div>
    <!-- <div class="admin-logo"><img src="../storage/uploads/logo.png"></div> -->
    {{-- <div class="admin-cpanel"><p>C-PANEL</p></div> --}}
    <div class="admin-cpanel-crear"><button class="btn btn-dark btn-lg" onclick="modal2();">Crear lugar &nbsp;<i class="fas fa-map-marker-alt"></i></button></div>
    <div class="admin-logout"><a href="{{ url('/logout') }}"><button class="btn btn-danger btn-lg"><i class="fas fa-power-off"></i></button></a></div>
    <div class="admin-atras"><a href="{{ url('cPanelAdmin') }}"><button class="btn btn-info btn-lg"><i class="fa fa-arrow-circle-left"></i></button></a></div>
    <div class="lugares" id="lugares">


    </div>

    <script language="javascript" src="js/js.js"></script>

    <!-- Modificar -->
    <div class="region-registrarse modalmask" id="modal">
        <a href="#cerrar" class="cerrar" id="cerrar">x</a>
                <div class="registrarse resize">
                    <form action="" method="POST" class="registrarse-form" onsubmit="return false" id="form">
                        <div class="nombre"><input type="text" name="nombre" id="nombre" value="" data-id=""></div>
                        <div class="info">
                            <label>Latitud</label>
                            <input type="text" name="latitud" id="latitud">
                            <label>Longitud</label>
                            <input type="text" name="longitud" id="longitud">
                            <label>Icono</label>
                            <select name="foto-icono" id="foto-icono-input">
                                <option value="hotel_icon.png">Hotel</option>
                                <option value="rest_icon.png">Restaurante</option>
                                <option value="museo_icon.png">Museo</option>
                                <option value="bar_icon.png">Bar</option>
                                <option value="playa_icon.png">Playa</option>
                                <option value="futbol.png">Futbol</option>
                                <option value="natacion.png">Natacion</option>
                                <option value="parque.png">Parque</option>
                            </select>
                            <label>Foto</label>
                            <input type="file" name="file" id="foto-Input" class="upload" accept="image/*">
                        </div>
                        <div class="descripcion">
                            <textarea name="descripcion" id="descripcion" cols="43" rows="2"></textarea>
                        </div>
                        <div class="foto">
                            <img src="" id="foto">
                        </div>
                        <div class="palabra-etiqueta">
                            <p>Etiquetas</p>
                        </div>
                        <div class="etiquetas" id="divEtiqueta">

                        </div>
                        <div class="guardar">
                            <button class="btn bg-info btn-lg" id="guardar-boton">Guardar</button>
                        </div>
                    </form>
                    <div class="anadir-etiqueta">
                        <form action="" onsubmit="return false">
                            <p>Añadir etiquetas</p>
                            <input type="text" name="etiqueta" placeholder="+ Nueva etiqueta" id="etiqueta">
                            <div class="anadir-etiqueta-enviar btn-sm"><button type="submit" class="btn bg-primary" id="btn-crear-etiqueta"><i class="fa fa-plus"></i></button></div>
                        </form>
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
                            <label>Latitud</label>
                            <input type="text" name="longitud" id="latitud-crear">
                            <label>Longitud</label>
                            <input type="text" name="latitud" id="longitud-crear">
                            <label>Icono</label>
                            <select name="foto-icono" id="foto-icono-input-crear">
                                <option value="hotel_icon.png">Hotel</option>
                                <option value="rest_icon.png">Restaurante</option>
                                <option value="museo_icon.png">Museo</option>
                                <option value="bar_icon.png">Bar</option>
                                <option value="playa_icon.png">Playa</option>
                                <option value="futbol.png">Futbol</option>
                                <option value="natacion.png">Natacion</option>
                                <option value="parque.png">Parque</option>
                            </select>
                            <label>Foto</label>
                            <input type="file" name="file" class="upload" accept="image/*" id="foto-crear">
                        </div>
                        <div class="descripcion">
                            <textarea name="descripcion" id="descripcion-crear" cols="43" rows="2" placeholder="Descripcion"></textarea>
                        </div>

                        <div class="etiquetas">

                        </div>
                        <div class="anadir-etiqueta-crear">
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
