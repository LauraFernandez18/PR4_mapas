window.onload = function() {
    /* array_cord = []; */
    //filtroUser()
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
        //coger correo del user
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
                var markerIcon = L.icon({
                    iconUrl: src = '../public/img/' + respuesta[i].foto_icon + '',
                    iconSize: [30, 30]
                });
                marker = L.marker([respuesta[i].latitud, respuesta[i].longitud], { icon: markerIcon });
                marker.addTo(map);
                marker.bindPopup("<h1 class='nombre'><b>" + respuesta[i].nombre + "</b></h1>" + "<p class='descripcion'>" + respuesta[i].descripcion + "</p><img class='img_popup' src='../public/img/" + respuesta[i].foto + "'></img><br></br><button class='btn btn-dark btn_ir' onclick='ruta(" + respuesta[i].latitud + "," + respuesta[i].longitud + "); return false;'>Ir</button><button class='btn btn-info btn_quitar' onclick='limpiarRuta(); return false;'>Quitar Ruta</button>", { maxWidth: 190 }).openPopup();
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
/*
function filtroUser() {
    var sesion = document.getElementById("sesion").textContent
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'post');
    formData.append('sesion', sesion);
    var ajax = objetoAjax();

    ajax.open("POST", "etiquetasUser", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            var divHtml = '';
            var divFiltro = document.getElementById('filtro-user')
            for (let i = 0; i < respuesta.length; i++) {
                divHtml += "<button class='btn_filtro' style='font-weight: bold; margin-bottom: 10%'>" + respuesta[i].nombre + "</button>"
            }
            divFiltro.innerHTML += divHtml;
        }
    }
    ajax.send(formData);
}*/