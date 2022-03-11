window.onload = function() {
    /* array_cord = []; */
    btns_filtro();
    marker_map();
    ruta_elim = null;
    marker = null;
    arr_marker = [];
    /* limpiarRuta(); */
    /* funcionInit(); */

    // Get the modal
    modal = document.getElementById("myModal");

    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function objetoAjax() {
    var xmlhttp = false;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

/*MOSTRAR MAPA*/

map = L.map('map').setView([41.373703, 2.187467], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGF1cmFmZXJuYW5kZXoxODIiLCJhIjoiY2wwYjg0MTRqMDhpYTNkbWp6ajlscHlkOCJ9.Cdxv8cBGcFJsPag19TXOVQ'
}).addTo(map);

/* poligono */
var polygon = L.polygon([
    [41.357596, 2.183804],
    [41.383637, 2.182141],
    [41.387918, 2.195807],
    [41.384903, 2.199920],
    [41.380766, 2.197533],
    [41.374282, 2.194663],
    [41.357662, 2.185403]
]).addTo(map);

polygon.setStyle({
    color: 'red',
    opacity: 0.6,
    fillColor: '#333333',
    fillOpacity: 0.1
});

/* var marker = L.marker([41.373703, 2.187467]).addTo(map);
marker.bindPopup("<b>Hola</b>").openPopup(); */
/* var routingControl = new L.Routing.Control({
    waypoints: [
        L.latLng(41.357596, 2.183804),
        L.latLng(41.357662, 2.185403)
    ],
    show: false
}).addTo(map); */

function btns_filtro() {
    var btn_filtro = document.getElementById('filtro_btn');
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'get');
    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "filtro", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            recarga = "";
            recarga += "<button class='btn_filtro' type='button' onclick='marker_map(); return false;'><b> Borrar Filtro</b></button>";
            for (let i = 0; i < respuesta.length; i++) {
                recarga += "<button class='btn_filtro' type='button' onclick='filtro_mapa(" + respuesta[i].id + "); return false;'><b> " + respuesta[i].nombre + "</b></button>";
            }
            btn_filtro.innerHTML = recarga;
        }
    }
    ajax.send(formData);
}

function marker_map() {
    /* var mapa = document.getElementById("n_sitio"); */
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'get');
    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "markerMapa", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            /* recarga = ""; */
            /* var array_cord = []; */
            for (let i = 0; i < respuesta.length; i++) {
                /* array_cord.push([respuesta[i].latitud, respuesta[i].longitud]); */
                /* recarga += '<h1>' + respuesta[i].nombre + '</h1>'; */
                marker = L.marker([respuesta[i].latitud, respuesta[i].longitud]);
                marker.addTo(map);
                marker.bindPopup("<img src='" + respuesta[i].foto + "'><b>" + respuesta[i].nombre + "</b><br><button onclick='ruta(" + respuesta[i].latitud + "," + respuesta[i].longitud + "); return false;'>Ir</button><button onclick='limpiarRuta(); return false;'>Quitar Ruta</button>").openPopup();
                arr_marker.push(marker);
            }
            /* console.log(arr_marker); */
            /* alert(recarga); */
            /* mapa.innerHTML = recarga; */
        }
    }
    ajax.send(formData);
}

//Coger ubicación actual
/* const funcionInit = () => {
    if (!"geolocation" in navigator) {
        return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
    }
    const onUbicacionConcedida = ubicacion => {
        console.log("Tengo la ubicación: ", ubicacion);
    }
    const onErrorDeUbicacion = err => {
        console.log("Error obteniendo ubicación: ", err);
    }
    const opcionesDeSolicitud = {
        enableHighAccuracy: true, // Alta precisión
        maximumAge: 0, // No queremos caché
        timeout: 5000 // Esperar solo 5 segundos
    };
    // Solicitar
    navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);
}; */

//Ruta mapa
function limpiarRuta() {
    if (ruta_elim != null) {
        map.removeControl(ruta_elim);
    }
}

function ruta(lat, long) {
    limpiarRuta();
    if (!"geolocation" in navigator) {
        return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
    };
    const onUbicacionConcedida = ubicacion => {
        console.log("Tengo la ubicación: ", ubicacion);
        /* console.log('direccion destino:' + lat + ',' + long);
        console.log('direccion actual:' + ubicacion.coords.latitude + ',' + ubicacion.coords.longitude); */
        ruta_elim = L.Routing.control({
            waypoints: [
                L.latLng(ubicacion.coords.latitude, ubicacion.coords.longitude),
                L.latLng(lat, long)
            ],
            language: 'es',
            routeWhileDragging: true
        });
        ruta_elim.addTo(map);
    }

    const onErrorDeUbicacion = err => {
        console.log("Error obteniendo ubicación: ", err);
    }

    const opcionesDeSolicitud = {
        enableHighAccuracy: true, // Alta precisión
        maximumAge: 0, // No queremos caché
        timeout: 5000 // Esperar solo 5 segundos
    };
    // Solicitar
    setInterval(navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud), 1000);
}

/* function limpiarRuta() { */
/*  if (!"geolocation" in navigator) {
     return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
 }
 console.log('Cordenada1s: ' + array_cord); */

/* var mapa = document.getElementById("n_sitio"); */
/* var formData = new FormData(); */
/*  formData.append('_token', document.getElementById('token').getAttribute("content"));
 formData.append('_method', 'get'); */
/* Inicializar un objeto AJAX */
/* var ajax = objetoAjax();
ajax.open("POST", "markerMapa", true); */

/* ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        var respuesta = JSON.parse(this.responseText);
        for (let i = 0; i < respuesta.length; i++) { */
/* if (respuesta[i] == array_cord[i]) {
} else {
    array_cord.push([respuesta[i].latitud, respuesta[i].longitud]);
} */
/*        array_cord.push([respuesta[i].latitud, respuesta[i].longitud]);
            }
            console.log('este: ' + array_cord);
        }
    }
    ajax.send(formData);
    const onUbicacionConcedida = ubicacion => { */
/* console.log("Tengo la ubicación: ", ubicacion);
console.log('direccion destino:' + lat + ',' + long);
console.log('direccion actual:' + ubicacion.coords.latitude + ',' + ubicacion.coords.longitude); */
/*         for (let i = 0; i < array_cord.length; i++) {
            console.log('Elim' + i + ': ' + array_cord[i])
            console.log(L.latLng(array_cord[i]));
            var ruta_done = L.Routing.control({
                waypoints: [
                    L.latLng(ubicacion.coords.latitude, ubicacion.coords.longitude),
                    L.latLng(array_cord[i])
                ]
            });
            ruta_done.remove();
        }
    }
    const onErrorDeUbicacion = err => {
        console.log("Error obteniendo ubicación: ", err);
    }
    const opcionesDeSolicitud = {
        enableHighAccuracy: true, // Alta precisión
        maximumAge: 0, // No queremos caché
        timeout: 5000 // Esperar solo 5 segundos
    };
    // Solicitar
    navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);
} */

/* LOGIN Y REGISTRAR */
function mostrarlog() {
    document.getElementById("content_regis").style.display = 'none';
    document.getElementById("content_regis2").style.display = 'block';
}

function mostrarreg() {
    document.getElementById("content_regis").style.display = 'block';
    document.getElementById("content_regis2").style.display = 'none';
}

/*VALIDACIÓN LOGIN*/
function validarLogin() {
    let correo_user = document.getElementById('correo_user').value;
    let pass_user = document.getElementById('pass_user').value;

    if (correo_user == '' || pass_user == '') {
        swal.fire({
            title: "Error",
            text: "Tienes que rellenar todos los datos",
            icon: "error",
        });
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo_user)) {
        swal.fire({
            title: "Error",
            text: "Introduce un email correcto",
            icon: "error",
        });
        return false;
    } else {
        return true;
    }
}

/*VALIDACIÓN REGISTRO*/
function validarRegistro() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;

    if (nombre == '' || email == '' || pwd == '') {
        swal.fire({
            title: "Error",
            text: "Tienes que rellenar todos los datos",
            icon: "error",
        });
        return false;
    } else {
        return true;
    }
}

function indexGimcana() {
    swal.fire({
        title: "Error",
        text: "Tienes que iniciar sesión para utilizar la Gimcana",
        icon: "error",
    });
}

function filtro_mapa(id) {
    if (arr_marker != []) {
        for (let i = 0; i < arr_marker.length; i++) {
            map.removeLayer(arr_marker[i]);
        }
    }
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'get');
    formData.append('id', id);
    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "filtroMapa", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            for (let i = 0; i < respuesta.length; i++) {
                var marker = L.marker([respuesta[i].latitud, respuesta[i].longitud]).addTo(map);
                marker.bindPopup("<b>" + respuesta[i].nombre + "</b><br><button onclick='ruta(" + respuesta[i].latitud + "," + respuesta[i].longitud + "); return false;'>Ir</button><button onclick='limpiarRuta(); return false;'>Quitar Ruta</button>").openPopup();
                arr_marker.push(marker);
            }
        }
    }
    ajax.send(formData);
}