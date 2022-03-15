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
            /* mapa.innerHTML = recarga; */
        }
    }
    ajax.send(formData);
}

/* document.addEventListener("click", coordenadasMapa);

function coordenadasMapa() {


} */

/* var popup = L.popup(); */

/* function onMapClick(e) {
    console.log(e.latlng);
}

map.on('click', onMapClick); */

/* var firstLatLng,
    secondLatLng;
map.on('click', function(e) {
    if (!firstLatLng) {
        firstLatLng = e.latlng;
    }
    secondLatLng = [41.36863022, 2.19018558];
    if (firstLatLng && secondLatLng) {
        var distance = map.distance(firstLatLng, secondLatLng);
        console.log(distance);
        if (distance <= 50) {
            alert('Muy bien has acertado el lugar.');
            firstLatLng = '';
        } else {
            alert('No estas en el lugar correcto');
            firstLatLng = '';
        }
    }
}) */



/* while (cont_aciertos <= arr_pistas.length) {
    for (let i = 0; i < array.length; i++) {
        p_pista = document.getElementById('Pista');
        pista = arr_pistas[i].pista;
        p_pista.innerHTML = pista;
        if (distance <= 50) {
            cont_aciertos++;
        } else {

        }
    }
}
 */

//Declaramos las variables de las tres coordenadas 
//coordenada jugador al clicar
firstLatLng = '';
//coordenada lugar
secondLatLng = '';
//coordenada jugador recogida x el navegador cuando clica
thirdLatLng = '';

//Definimos el contador de aciertos
cont_aciertos = 0;

function gincanaUser() {
    //Creamos la condicion que queremos que cumpla
    while (cont_aciertos <= arr_pistas.length) {
        //click en el mapa para coger la ubicacion del jugador
        map.on('click', function(e) {
                //coordenada jugador
                if (!firstLatLng) {
                    firstLatLng = e.latlng;
                }
                //Coordenada actual del jugador por localizacion del navegador al clicar
                if (!"geolocation" in navigator) {
                    return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
                };
                const onUbicacionConcedida = ubicacion => {
                    thirdLatLng = ubicacion;
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
            })
            //Calculamos la distancia de la ubi del jugador con la del lugar del click para saber si esta por la zona
        var distance_usr_click = map.distance(firstLatLng, thirdLatLng);
        //Comprobamos la distancia
        if (distance_usr_click <= 100) {
            //Si esta le permitimos jugar
            //Creamos el bucle que recorre el array para ir mostrando las pistas
            for (let i = 0; i < arr_pistas.length; i++) {
                //Cogemos el id de donde vamos a insertar la pista
                p_pista = document.getElementById('Pista');
                //guardamos la pista en una variable
                pista = arr_pistas[i].pista;
                //insertamos la pista
                p_pista.innerHTML = pista;
                //coordenada lugar destino
                secondLatLng = arr_pistas[i].latitud + ',' + arr_pistas[i].longitud;
                //Calculamos la distancia de la ubi del jugador con la del lugar del click para saber si esta por la zona
                var distance_usr_lgr = map.distance(firstLatLng, secondLatLng);
                //comprobamos si está en un rango de 50 metros respecto al lugar 
                if (distance_usr_lgr <= 50) {
                    //si está le sumamos 1 al contador, le mostramos un alert de que ha acertado y seguimos recorriendo el array
                    cont_aciertos++;
                    alert('Has acertado');
                    //Ponemos la ubi 1 a vacio para que no se pisen las diferentes ubicaciones
                    firstLatLng = '';
                    //Ponemos la ubi 2 a vacio para que no se pisen las diferentes ubicaciones
                    secondLatLng = '';
                    //Ponemos la ubi 2 a vacio para que no se pisen las diferentes ubicaciones
                    thirdLatLng = '';
                    //Vaciamos el contenido de donde esta la pista para que no se sobreescriba en la última pista
                    p_pista.innerHTML = '';
                } else {
                    i--;
                    alert('Has fallado');
                    //Ponemos la ubi 1 a vacio para que no se pisen las diferentes ubicaciones
                    firstLatLng = '';
                    //Ponemos la ubi 2 a vacio para que no se pisen las diferentes ubicaciones
                    secondLatLng = '';
                    //Ponemos la ubi 2 a vacio para que no se pisen las diferentes ubicaciones
                    thirdLatLng = '';
                    //Vaciamos el contenido de donde esta la pista para que no se sobreescriba en la última pista
                    p_pista.innerHTML = '';
                }
            }
        } else {
            //Le decimos que no está cerca de la zona que debe ir para poder seguir jugando
            alert('No estás en la zona, debes ir a la zona del lugar para poder comprobar si estás en el lugar correcto.');
        }
    }
    alert('Has finalizado la gincana');
}