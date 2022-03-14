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
            recarga += "<button class='btn_borrar' type='button' onclick='marker_map(); return false;'><b> Borrar</b></button>";
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
                marker.bindPopup("<button onclick='favoritos(); return false;'>Favoritos</button>" + "<b>" + respuesta[i].nombre + "</b><br><button onclick='ruta(" + respuesta[i].latitud + "," + respuesta[i].longitud + "); return false;'>Ir</button><button onclick='limpiarRuta(); return false;'>Quitar Ruta</button>").openPopup();
                arr_marker.push(marker);
            }
            /* console.log(arr_marker); */
            /* alert(recarga); */
            /* mapa.innerHTML = recarga; */
        }
    }
    ajax.send(formData);
}

function favoritos() {
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'get');
    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "markerMapa", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            if (respuesta[i].id == 1)
                alert("hola")
        }
    }
    ajax.send(formData);
}