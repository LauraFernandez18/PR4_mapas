//modal
window.onload = function() {
    var cerrar = document.getElementById('cerrar')
    cerrar.addEventListener("click", function() {
        document.getElementsByClassName("modalmask")[0].style.opacity = 0
        document.getElementsByClassName("modalmask")[0].style.pointerEvents = "none"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"
        var divEtiqueta = document.getElementById('divEtiqueta')
        divEtiqueta.innerHTML = "<p>Etiquetas</p>"

    })
    var cerrar = document.getElementById('cerrar2')
    cerrar.addEventListener("click", function() {
        document.getElementsByClassName("modalmask")[1].style.opacity = 0
        document.getElementsByClassName("modalmask")[1].style.pointerEvents = "none"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"

    })
    marker_map();
};


function modal(id, nombre, longitud, latitud, foto) {
    document.getElementsByClassName("modalmask")[0].style.opacity = 1
    document.getElementsByClassName("modalmask")[0].style.pointerEvents = "auto"
        //document.getElementsByTagName("html")[0].style.overflow = "hidden"
    $("#nombre").val(nombre);
    $("#longitud").val(longitud);
    $("#latitud").val(latitud);
    $("#foto").attr("src", "storage/uploads/" + foto);

    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'post');
    var ajax = objetoAjax();

    ajax.open("POST", "adminEtiquetasAjax/" + id, true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            var etiquetashtml = '';
            var divEtiqueta = document.getElementById('divEtiqueta')
            for (let i = 0; i < respuesta.length; i++) {
                etiquetashtml += "<div class='etiquetas-etiqueta mb-2'>"
                etiquetashtml += "<button type='button' class='btn btn-success mr-3'>" + respuesta[i].nombre + "</button>"
                etiquetashtml += "<button type='button' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>"
                etiquetashtml += "</div>"
            }
            divEtiqueta.innerHTML += etiquetashtml;

        }
    }
    ajax.send(formData);
}

function modal2() {
    document.getElementsByClassName("modalmask")[1].style.opacity = 1
    document.getElementsByClassName("modalmask")[1].style.pointerEvents = "auto"
        //document.getElementsByTagName("html")[0].style.overflow = "hidden"
}



//datos

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



function marker_map() {
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'post');
    var ajax = objetoAjax();

    ajax.open("POST", "adminMapasAjax", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            recarga = "";
            for (let i = 0; i < respuesta.length; i++) {
                var marker = L.marker([respuesta[i].longitud, respuesta[i].latitud]).addTo(map);
                marker.bindPopup(respuesta[i].nombre, {
                    closeButton: false,
                    closeOnClick: false,
                    autoClose: false
                }).openPopup();

                marker.on('click', function(e) {
                    modal(respuesta[i].id, respuesta[i].nombre, respuesta[i].longitud, respuesta[i].latitud, respuesta[i].foto)
                    marker_map()
                });


            }

        }
    }
    ajax.send(formData);
}






//mapa

var map = L.map('map').setView([41.37980494784771, 2.1897389511414347], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGF1cmFmZXJuYW5kZXoxODIiLCJhIjoiY2wwYjg0MTRqMDhpYTNkbWp6ajlscHlkOCJ9.Cdxv8cBGcFJsPag19TXOVQ'
}).addTo(map);

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


$(document).ready(function() {
    $(".lugar-jquery").click(function() {
        var id = $(this).attr('data-id');
        var nombre = $(this).attr('data-nombre');
        var longitud = $(this).attr('data-long');
        var latitud = $(this).attr('data-lat');
        var foto = $(this).attr('data-foto');
        modal(id, nombre, longitud, latitud, foto)
    });


});