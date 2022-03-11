window.onload = function() {
    menuDerecha()
}




//menu derecha
function menuDerecha() {
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'post');
    var ajax = objetoAjax();

    ajax.open("POST", "MenuDerechaGincana", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            var divLugar = document.getElementById('lugares')
            divLugar.innerHTML = ''
            var divLugarhtml = '<h2>Puntos de Control</h2>';
            for (let i = 0; i < respuesta.length; i++) {
                divLugarhtml += "<p class='lugar-jquery' data-id='" + respuesta[i].id + "' data-pista='" + respuesta[i].pista + "' data-gincana='" + respuesta[i].fk_gincana + "' data-lugar='" + respuesta[i].nombre + "' data-orden='" + respuesta[i].orden + "'>• Punto Control " + respuesta[i].orden + "</p>"
            }
            divLugar.innerHTML += divLugarhtml;
            menuDerechaClick()
        }

    }
    ajax.send(formData);
}

function menuDerechaClick() {
    $(".lugar-jquery").click(function() {
        var id = $(this).attr('data-id');
        var pista = $(this).attr('data-pista');
        var gincana = $(this).attr('data-gincana');
        var lugar = $(this).attr('data-lugar');
        var orden = $(this).attr('data-orden');
        modal(id, pista, gincana, lugar, orden)
    });


};


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



//modal
function modal(id, pista, gincana, lugar, orden) {
    document.getElementsByClassName("modalmask")[0].style.opacity = 1
    document.getElementsByClassName("modalmask")[0].style.pointerEvents = "auto"
        //document.getElementsByTagName("html")[0].style.overflow = "hidden"
    $("#punto-control").attr("data-id", id);
    $("#punto-control").text("Punto Control " + orden);
    $("#pista").val(pista);
    $('#lugar option[value="' + lugar + '"]').attr("selected", "selected");
    $("#orden").val(orden);



}