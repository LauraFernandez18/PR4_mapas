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