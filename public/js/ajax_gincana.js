window.onload = function() {
    gincana();
    arr_pistas = [];
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

function gincana() {
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'get');
    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "gimcana_preg", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            for (let i = 0; i < respuesta.length; i++) {
                arr_pistas.push(respuesta[i]);
            }
            console.log(arr_pistas);
            console.log('Empieza la gincaca');
        }
    }
    ajax.send(formData);
}


/* function ubicacionUser() {
    //Coordenada actual del jugador por localizacion del navegador
    if (!"geolocation" in navigator) {
        return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
    };
    const onUbicacionConcedida = ubicacion => {
        ubi_user = ubicacion.coords.latitude, ubicacion.coords.longitude;
        //Seteamos una cordenada nueva cada x segundos que le digamos a la funcion setinterval

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
}

setInterval(ubicacionUser, 1000) */


//Declaramos las variables de las tres coordenadas 
//coordenada jugador
ubi_user = '';
//coordenada lugar
ubi_lgr = '';

//Definimos el marcador del usuario
var markerIcon = L.icon({
    iconUrl: src = '../public/img/person.png',
    iconSize: [30, 30]
});
//Lo seteamos manualmente
marker = L.marker([41.34986253616909, 2.1073770285219604], { icon: markerIcon });
//Lo añadimos al mapa
marker.addTo(map);
//Definimos la distancia del usuario al lugar
distance_usr_lgr = '';
//Definimos el contador de aciertos
cont_aciertos = 0;

function gincanaUser() {
    //Creamos el bucle que recorre el array para ir mostrando las pistas
    /* for (let i = 0; i < arr_pistas.length;) { */
    //Coordenada actual del jugador por localizacion del navegador
    if (!"geolocation" in navigator) {
        return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
    };
    const onUbicacionConcedida = ubicacion => {
        ubi_user = [ubicacion.coords.latitude, ubicacion.coords.longitude];
        marker.setLatLng(ubi_user);
        console.log('Ubi tio: ' + ubi_user);
        //Calculamos la distancia del usuario respecto al lugar
        /* distance_usr_lgr = map.distance(ubi_user, ubi_lgr);
        console.log('Distancia: ' + distance_usr_lgr); */
        /* if (distance_usr_lgr <= 50) {
            i++;
            console.log('Aciertas: ' + i);
            //si está le sumamos 1 al contador, le mostramos un alert de que ha llegado y seguimos recorriendo el array
            console.log('Has llegado');
            alert(i)
        } else {
            console.log('Fallas: ' + i);
            console.log('No estas en el lugar');
        } */
        gincanadist(ubi_user);
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
    /* } */
}

setInterval(gincanaUser, 5000);
cont_pistas = 0;

function gincanadist(ubi_user) {
    control = document.getElementById('control').value;
    console.log('Control1' + control);
    for (let i = 0; i < arr_pistas.length; i++) {
        if (cont_pistas < arr_pistas.length) {
            //Cogemos el id de donde vamos a insertar la pista
            p_pista = document.getElementById('Pista');
            //guardamos la pista en una variable
            pista = arr_pistas[control].pista;
            p_pista.innerHTML = pista;
            //Seteamos una cordenada nueva cada x segundos que le digamos a la funcion setinterval
            //coordenada lugar destino
            ubi_lgr = [arr_pistas[control].latitud, arr_pistas[control].longitud];
            console.log('Ubi lugar: ' + ubi_lgr);
            console.log('Pista: ' + control + ' ' + pista);
            //insertamos la pista
            p_pista.innerHTML = pista;
            distancia_lugar = map.distance(ubi_user, ubi_lgr);
            if (distancia_lugar <= 50) {
                control++;
                console.log('Control2' + control)
                cont_pistas++;
                console.log('Estoy');
            } else {
                console.log('No estoy');
            }
        } else {
            console.log('Has acabado');
        }
    }
}