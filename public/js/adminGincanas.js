window.onload = function() {
    var cerrar = document.getElementById('cerrar')
    cerrar.addEventListener("click", function() {
        document.getElementsByClassName("modalmask")[0].style.opacity = 0
        document.getElementsByClassName("modalmask")[0].style.pointerEvents = "none"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"
        menuDerecha()
    })
    var cerrar = document.getElementById('cerrar2')
    cerrar.addEventListener("click", function() {
        document.getElementsByClassName("modalmask")[1].style.opacity = 0
        document.getElementsByClassName("modalmask")[1].style.pointerEvents = "none"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"
        menuDerecha()
    })
    $("#guardar-boton").click(function() {
        var id = document.getElementById("punto-control").getAttribute('data-id')
        var pista = $("#pista").val();
        var idlugar = $("#lugar").val();
        var orden = $("#orden").val();
        var gincana = 1

        var formData = new FormData();
        formData.append('_token', document.getElementById('token').getAttribute("content"));
        formData.append('_method', 'post');
        formData.append('id', id);
        formData.append('pista', pista);
        formData.append('fk_gincana', gincana);
        formData.append('fk_lugar', idlugar);
        formData.append('orden', orden);
        var ajax = objetoAjax();

        ajax.open("POST", "ModificarPuntoControl", true);
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var respuesta = JSON.parse(this.responseText);
                document.getElementsByClassName("modalmask")[0].style.opacity = 0
                document.getElementsByClassName("modalmask")[0].style.pointerEvents = "none"
                document.getElementsByTagName("html")[0].style.overflowY = "scroll"
            }
        }
        ajax.send(formData);
    })

    $("#guardar-crear").click(function() {
        var pista = $("#pista-crear").val();
        var idlugar = $("#lugar").val();
        var orden = $("#orden-crear").val();

        var formData = new FormData();
        formData.append('_token', document.getElementById('token').getAttribute("content"));
        formData.append('_method', 'post');
        formData.append('pista', pista);
        formData.append('fk_lugar', idlugar);
        formData.append('orden', orden);
        var ajax = objetoAjax();

        ajax.open("POST", "CrearPuntoControl", true);
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var respuesta = JSON.parse(this.responseText);
                menuDerecha()
                document.getElementsByClassName("modalmask")[1].style.opacity = 0
                document.getElementsByClassName("modalmask")[1].style.pointerEvents = "none"
                document.getElementsByTagName("html")[0].style.overflowY = "scroll"
                CountPuntoControl2()

            }
        }
        ajax.send(formData);
    })
    menuDerecha()
    CountPuntoControl2()
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
    $("#orden").val(orden);
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'post');
    var ajax = objetoAjax();

    ajax.open("POST", "MenuDerechaLugares", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            var divLugares = document.getElementsByClassName('lugar')[0]
            var divLugaresHtml = "<label>Lugar:</label><select name='lugar' id='lugar'>"
            for (let i = 0; i < respuesta.length; i++) {
                if (lugar == respuesta[i].nombre) {
                    divLugaresHtml += "<option value='" + respuesta[i].id + "' selected='selected' style='background-color: #333333; color:white;'>" + respuesta[i].nombre + "</option>"
                } else {
                    divLugaresHtml += "<option value='" + respuesta[i].id + "'>" + respuesta[i].nombre + "</option>"
                }
            }
            divLugaresHtml += "</select>"
            divLugares.innerHTML = divLugaresHtml
        }

    }
    ajax.send(formData);

    //cojo la cantidad de puntos de control (para solo eliminar el ultimo punto)
    CountPuntoControl2()
    totalPuntosControl = $("#punto-control").attr("cant-pt-cnt");
    var divEliminar = document.getElementsByClassName('eliminar')[0]
    if (totalPuntosControl == orden) {
        divEliminar.innerHTML = "<button class='btn bg-danger btn-lg' id='eliminar-boton'>Eliminar</button>"
        $("#eliminar-boton").click(function() {
            var id = document.getElementById("punto-control").getAttribute('data-id')
            var formData = new FormData();
            formData.append('_token', document.getElementById('token').getAttribute("content"));
            formData.append('_method', 'post');
            formData.append('id', id);
            var ajax = objetoAjax();

            ajax.open("POST", "EliminarPuntoControl", true);
            ajax.onreadystatechange = function() {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    menuDerecha()
                    document.getElementsByClassName("modalmask")[0].style.opacity = 0
                    document.getElementsByClassName("modalmask")[0].style.pointerEvents = "none"
                    document.getElementsByTagName("html")[0].style.overflowY = "scroll"
                }
            }
            ajax.send(formData);
        })
    } else {
        divEliminar.innerHTML = ""
    }

}

function modal2() {
    document.getElementsByClassName("modalmask")[1].style.opacity = 1
    document.getElementsByClassName("modalmask")[1].style.pointerEvents = "auto"
        //document.getElementsByTagName("html")[0].style.overflow = "hidden"
    CountPuntoControl()
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'post');
    var ajax = objetoAjax();

    ajax.open("POST", "MenuDerechaLugares", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            var divLugares = document.getElementsByClassName('lugar')[1]
            var divLugaresHtml = "<label>Lugar:</label><select name='lugar' id='lugar'>"
            for (let i = 0; i < respuesta.length; i++) {
                divLugaresHtml += "<option value='" + respuesta[i].id + "'>" + respuesta[i].nombre + "</option>"
            }
            divLugaresHtml += "</select>"
            divLugares.innerHTML = divLugaresHtml
        }

    }
    ajax.send(formData);




}

function CountPuntoControl() {
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'post');
    var ajax = objetoAjax();

    ajax.open("POST", "CountPuntoControl", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            for (let i = 0; i < respuesta.length; i++) {
                $("#orden-crear").val(respuesta[i].count + 1);
            }
        }

    }
    ajax.send(formData);
}


function CountPuntoControl2() {
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'post');
    var ajax = objetoAjax();
    var totalPuntosControl
    ajax.open("POST", "CountPuntoControl", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            totalPuntosControl = (respuesta[0].count);
            $("#punto-control").attr("cant-pt-cnt", totalPuntosControl);
        }

    }
    ajax.send(formData);

}