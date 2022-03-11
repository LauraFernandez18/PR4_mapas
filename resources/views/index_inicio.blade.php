<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CRUD AJAX</title>
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
    {{-- <div class="cabecera">
    <h1>Mapa</h1>
    <button class="btn_cabecera btn btn-dark" type="button">Mapa</button>
    <button class="btn_cabecera btn btn-dark" type="button">Gimcana</button>
    <button class="btn_inicio btn btn-dark" type="button" onclick="iniciar_sesionJS()">Iniciar sesión</button>
    </div> --}}
    <div id="map">
        <form action="{{url('logout')}}" method="GET">
        <button class="btn btn-danger btn_logout" type="submit" id="myBtn"><b><i class="fas fa-sign-out-alt"></i></b></button>
        </form>
      {{-- </br> --}}
        <form action="{{url('gimcana')}}" method="GET">
          <button type="submit" class="btn_gimcana btn btn-dark" value="Enviar"><b>Gimcana</b></button>
        </form>
        <div class="filtro" id="filtro_btn">
          
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