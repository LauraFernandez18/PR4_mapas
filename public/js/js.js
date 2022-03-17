//modal
window.onload = function() {
    var markers = null
    var cerrar = document.getElementById('cerrar')
    cerrar.addEventListener("click", function() {
        document.getElementsByClassName("modalmask")[0].style.opacity = 0
        document.getElementsByClassName("modalmask")[0].style.pointerEvents = "none"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"
        var divEtiqueta = document.getElementById('divEtiqueta')
        divEtiqueta.innerHTML = ""
        removeMarkers()
        menuDerecha()

    })
    var cerrar = document.getElementById('cerrar2')
    cerrar.addEventListener("click", function() {
        document.getElementsByClassName("modalmask")[1].style.opacity = 0
        document.getElementsByClassName("modalmask")[1].style.pointerEvents = "none"
        document.getElementsByTagName("html")[0].style.overflowY = "scroll"
        removeMarkers()
        menuDerecha()

    })

    var crearEtiqueta = document.getElementById('btn-crear-etiqueta')
    crearEtiqueta.addEventListener("click", function() {
        var etiqueta = document.getElementById("etiqueta").value;
        var lugar = document.getElementById("nombre").getAttribute('data-id')

        var formData = new FormData();
        formData.append('_token', document.getElementById('token').getAttribute("content"));
        formData.append('_method', 'post');
        formData.append('etiqueta', etiqueta);
        formData.append('lugar', lugar);
        var ajax = objetoAjax();

        ajax.open("POST", "crearEtiqueta", true);
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var respuesta = JSON.parse(this.responseText);
                divEtiqueta.innerHTML = ""
                modal(respuesta[0].id, respuesta[0].nombre, respuesta[0].longitud, respuesta[0].latitud, respuesta[0].foto, respuesta[0].descripcion, respuesta[0].foto_icon)
            }
        }
        ajax.send(formData);

    })

    $("#guardar-boton").click(function() {
            var id = document.getElementById("nombre").getAttribute('data-id')
            var nombre = $("#nombre").val();
            var longitud = $("#longitud").val();
            var latitud = $("#latitud").val();
            var foto_icon = $("#foto-icono-input").val();
            var descripcion = $("#descripcion").val();
            if (nombre == '' || descripcion == '' || latitud == '' || longitud == '') {
                document.getElementsByClassName("modalmask")[1].style.opacity = 0
                document.getElementsByClassName("modalmask")[1].style.pointerEvents = "none"
                document.getElementsByTagName("html")[0].style.overflowY = "scroll"
                swal.fire({
                    title: "Error",
                    text: "Tienes que rellenar todos los datos",
                    icon: "error",
                });
                return true;
            } else {
                var formData = new FormData();
                formData.append('_token', document.getElementById('token').getAttribute("content"));
                formData.append('_method', 'post');
                formData.append('id', id);
                formData.append('nombre', nombre);
                formData.append('longitud', longitud);
                formData.append('latitud', latitud);
                formData.append('foto', document.getElementById('foto-Input').files[0]);
                formData.append('descripcion', descripcion);
                formData.append('foto_icon', foto_icon);
                var ajax = objetoAjax();

                ajax.open("POST", "UpdateLugar", true);
                ajax.onreadystatechange = function() {
                    if (ajax.readyState == 4 && ajax.status == 200) {
                        var respuesta = JSON.parse(this.responseText);
                        divLugar.innerHTML = ""
                        modal(respuesta[0].id, respuesta[0].nombre, respuesta[0].longitud, respuesta[0].latitud, respuesta[0].foto, respuesta[0].descripcion, respuesta[0].foto_icon)
                    }
                }
                ajax.send(formData);
            }
        })
        /*crear lugar*/
    $("#guardar-boton-crear").click(function() {
        var nombre = $("#nombre-crear").val();
        var longitud = $("#longitud-crear").val();
        var latitud = $("#latitud-crear").val();
        var etiqueta = $("#etiqueta-crear").val();
        var descripcion = $("#descripcion-crear").val();
        var foto_icon = $("#foto-icono-input-crear").val();
        if (nombre == '' || descripcion == '' || latitud == '' || longitud == '') {
            document.getElementsByClassName("modalmask")[0].style.opacity = 0
            document.getElementsByClassName("modalmask")[0].style.pointerEvents = "none"
            document.getElementsByTagName("html")[0].style.overflowY = "scroll"
            swal.fire({
                title: "Error",
                text: "Tienes que rellenar todos los datos",
                icon: "error",
            });
            return true;
        } else {
            var formData = new FormData();
            formData.append('_token', document.getElementById('token').getAttribute("content"));
            formData.append('_method', 'post');
            formData.append('nombre', nombre);
            formData.append('longitud', longitud);
            formData.append('latitud', latitud);
            formData.append('etiqueta', etiqueta);
            formData.append('foto', document.getElementById('foto-crear').files[0]);
            formData.append('descripcion', descripcion);
            formData.append('foto_icon', foto_icon);
            var ajax = objetoAjax();

            ajax.open("POST", "CrearLugar", true);
            ajax.onreadystatechange = function() {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    var respuesta = JSON.parse(this.responseText);
                    //divLugar.innerHTML = ""
                    //modal(respuesta[0].id, respuesta[0].nombre, respuesta[0].longitud, respuesta[0].latitud, respuesta[0].foto, respuesta[0].descripcion, respuesta[0].foto_icon)
                    document.getElementsByClassName("modalmask")[1].style.opacity = 0
                    document.getElementsByClassName("modalmask")[1].style.pointerEvents = "none"
                    document.getElementsByTagName("html")[0].style.overflowY = "scroll"
                    marker_map()
                    menuDerecha()
                }
            }
            ajax.send(formData);
        }
    })

    $("#eliminar-boton").click(function() {
        var id = document.getElementById("nombre").getAttribute('data-id')
        var formData = new FormData();
        formData.append('_token', document.getElementById('token').getAttribute("content"));
        formData.append('_method', 'post');
        formData.append('id', id);
        var ajax = objetoAjax();

        ajax.open("POST", "EliminarLugar", true);
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var respuesta = JSON.parse(this.responseText);
                if (respuesta[0] == 'mal') {
                    document.getElementsByClassName("modalmask")[0].style.opacity = 0
                    document.getElementsByClassName("modalmask")[0].style.pointerEvents = "none"
                    document.getElementsByTagName("html")[0].style.overflowY = "scroll"
                    swal.fire({
                        title: "Error",
                        text: "Elimina el lugar de la Gincana primero.",
                        icon: "error",
                    });
                } else {
                    removeMarkers()
                        //marker_map()
                    menuDerecha()
                    document.getElementsByClassName("modalmask")[0].style.opacity = 0
                    document.getElementsByClassName("modalmask")[0].style.pointerEvents = "none"
                    document.getElementsByTagName("html")[0].style.overflowY = "scroll"
                }


            }
        }
        ajax.send(formData);

    })

    menuDerecha();
    marker_map();

};


function modal(id, nombre, longitud, latitud, foto, descripcion, foto_icon) {
    document.getElementsByClassName("modalmask")[0].style.opacity = 1
    document.getElementsByClassName("modalmask")[0].style.pointerEvents = "auto"
        //document.getElementsByTagName("html")[0].style.overflow = "hidden"
    $("#nombre").attr("data-id", id);
    $("#nombre").val(nombre);
    $("#longitud").val(longitud);
    $("#latitud").val(latitud);
    $("#foto").attr("src", "../public/img/" + foto);
    $("#descripcion").val(descripcion);
    $("#foto-icono-input").val(foto_icon);
    etiquetasAjax()

    function etiquetasAjax() {
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
                divEtiqueta.innerHTML = ""
                for (let i = 0; i < respuesta.length; i++) {
                    etiquetashtml += "<div class='etiquetas-etiqueta mb-2'>"
                    etiquetashtml += "<div class='etiquetas-etiqueta-nombre mr-3'>"
                    etiquetashtml += "<button type='button' class='btn btn-success btn-block'>" + respuesta[i].nombre + "</button>"
                    etiquetashtml += "</div>"
                    etiquetashtml += "<div class='etiquetas-etiqueta-eliminar'>"
                    etiquetashtml += "<button type='button' class='btn btn-danger btn-eliminar-etiq' data-id='" + respuesta[i].id + "'><i class='fa fa-trash'></i></button>"
                    etiquetashtml += "</div>"
                    etiquetashtml += "</div>"
                }
                divEtiqueta.innerHTML += etiquetashtml;
                eliminarEtiqueta()
                    /*boton eliminar etiqueta*/
                function eliminarEtiqueta() {
                    $(".btn-eliminar-etiq").click(function() {
                        var idEtiqueta = this.getAttribute('data-id')

                        var formData = new FormData();
                        formData.append('_token', document.getElementById('token').getAttribute("content"));
                        formData.append('_method', 'post');
                        var ajax = objetoAjax();

                        ajax.open("POST", "eliminarEtiqueta/" + idEtiqueta, true);
                        ajax.onreadystatechange = function() {
                            if (ajax.readyState == 4 && ajax.status == 200) {
                                var respuesta = JSON.parse(this.responseText);
                                divEtiqueta.innerHTML = ""
                                etiquetasAjax()
                                marker_map()
                            }
                        }
                        ajax.send(formData);
                    });
                }

            }
        }
        ajax.send(formData);
    }

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

    markers = L.layerGroup().addTo(map);

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
                var marker = L.marker([respuesta[i].latitud, respuesta[i].longitud]).addTo(map);
                marker.bindPopup(respuesta[i].nombre, {
                    closeButton: false,
                    closeOnClick: false,
                    autoClose: false
                }).openPopup();
                markers.addLayer(marker);
                marker.on('click', function(e) {
                    modal(respuesta[i].id, respuesta[i].nombre, respuesta[i].longitud, respuesta[i].latitud, respuesta[i].foto, respuesta[i].descripcion, respuesta[i].foto_icon)
                        //marker_map()
                });


            }

        }
    }
    ajax.send(formData);
}


function removeMarkers() {
    markers.clearLayers();
    marker_map()
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

/*menu derecha*/
function menuDerechaClick() {
    $(".lugar-jquery").click(function() {
        var id = $(this).attr('data-id');
        var nombre = $(this).attr('data-nombre');
        var longitud = $(this).attr('data-long');
        var latitud = $(this).attr('data-lat');
        var foto = $(this).attr('data-foto');
        var descripcion = $(this).attr('data-descripcion');
        var foto_icon = $(this).attr('data-foto_icon');
        modal(id, nombre, longitud, latitud, foto, descripcion, foto_icon)
    });


};

function menuDerecha() {
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'post');
    var ajax = objetoAjax();

    ajax.open("POST", "MenuDerechaLugares", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            var divLugar = document.getElementById('lugares')
            divLugar.innerHTML = ''
            var divLugarhtml = '<h2>Lugares de interés</h2>';
            for (let i = 0; i < respuesta.length; i++) {
                divLugarhtml += "<p class='lugar-jquery' data-id='" + respuesta[i].id + "' data-nombre='" + respuesta[i].nombre + "' data-long='" + respuesta[i].longitud + "' data-lat='" + respuesta[i].latitud + "' data-foto='" + respuesta[i].foto + "' data-descripcion='" + respuesta[i].descripcion + "' data-foto_icon='" + respuesta[i].foto_icon + "'>• " + respuesta[i].nombre + "</p>"
            }
            divLugar.innerHTML += divLugarhtml;
        }
        menuDerechaClick()
    }
    ajax.send(formData);
}