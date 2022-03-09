window.onload = function() {
    leerJS();
    // Get the modal
    modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var cerrar = document.getElementById("cerrar");
    // When the user clicks on <span> (x), close the modal
    cerrar.onclick = function() {
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

function leerJS() {
    /* Si hace falta obtenemos el elemento HTML donde introduciremos la recarga (datos o mensajes) */
    /* Usar el objeto FormData para guardar los parámetros que se enviarán:
       formData.append('clave', valor);
       valor = elemento/s que se pasarán como parámetros: token, method, inputs... */
    var tabla = document.getElementById("main");
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('filtro', document.getElementById('filtro').value);
    var adm = document.getElementById('adm').value;

    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "adminUsuarios", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            var recarga = '';
            recarga += '<br>'
            recarga += '<div class="tabla">';
            recarga += '<tr><th>NOMBRE</th><th>EMAIL</th><th>TIPO</th><th>Modificar</th><th>Eliminar</th></th>';
            for (let i = 0; i < respuesta.length; i++) {
                recarga += '<tr>';
                recarga += '<td>' + respuesta[i].nombre + '</td>'
                recarga += '<td>' + respuesta[i].email + '</td>'
                recarga += '<td>' + respuesta[i].tipo_usu + '</td>'
                recarga += '<td><button class="btn btn-info" onclick="modificar(' + respuesta[i].id + ',\'' + respuesta[i].nombre + '\',\'' + respuesta[i].email + '\'); return false;">Modificar</button></td>'
                if (adm == respuesta[i].email) {
                    recarga += '<td><button class="btn btn-danger" onclick="return false;"><s>Eliminar</s></button></td>'
                } else {
                    recarga += '<td><button class="btn btn-danger" onclick="borrar(' + respuesta[i].id + '); return false;">Eliminar</button></td>'
                }
                recarga += '</tr>';
                recarga += '</div>'
            }
            tabla.innerHTML = recarga;
        }
    }

    ajax.send(formData);
}

function modificar(id, nombre, email) {
    modal.style.display = "block";
    enter = document.getElementById("contenido")
    var contenido = ''
    contenido += '<form onsubmit="editar(); return false;">'
    contenido += '<h3><b>Modificar</b></h3><br>'
    contenido += '<p><b>Nombre</b><p>'
    contenido += '<input type="text" id="nombre" class="form-control" Value="' + nombre + '"><br>'
    contenido += '<p><b>Email</b><p>'
    contenido += '<input type="text" id="email" class="form-control" Value="' + email + '">'
    contenido += '<input type="hidden" id="id" Value="' + id + '"><br><br/>'
    contenido += '<p>Si no quieres modificar la contraseña deja los campos de contraseña en blanco</p>'
    contenido += '<p><b>Contraseña actual</b></p>'
    contenido += '<input type="password" class="form-control" id="pwd"><br></br>'
    contenido += '<p><b>Contraseña nueva</b></p>'
    contenido += '<input type="password" class="form-control" id="pwd_nueva" id="modificar"><br/><br/>'
    contenido += '<input type="submit" class="btn btn-info" value="Modificar">'
    contenido += '</form>'
    contenido += ''
    enter.innerHTML = contenido;
}

function editar() {
    /* Si hace falta obtenemos el elemento HTML donde introduciremos la recarga (datos o mensajes) */
    /* Usar el objeto FormData para guardar los parámetros que se enviarán:
       formData.append('clave', valor);
       valor = elemento/s que se pasarán como parámetros: token, method, inputs... */
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'PUT');
    formData.append('nombre', document.getElementById('nombre').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('pwd', document.getElementById('pwd').value);
    formData.append('pwd_n', document.getElementById('pwd_nueva').value);
    formData.append('id', document.getElementById('id').value);

    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "modificar", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            /* Leerá la respuesta que es devuelta por el controlador: */
            if (respuesta.resultado == 'OK') {
                document.getElementById('mensaje').innerHTML = "Actualización correcta."
            } else if (respuesta.resultado == 'Contraseña no actualizada') {
                document.getElementById('mensaje').innerHTML = "Contraseña no actualizada."
            } else {
                document.getElementById('mensaje').innerHTML = "Fallo en la actualización: " + respuesta.resultado;
            }
            leerJS();
            modal.style.display = "none";

        }
    }

    ajax.send(formData);
}


//funcion de borrar con AJAX
function borrar(id_usr) {
    /* Si hace falta obtenemos el elemento HTML donde introduciremos la recarga (datos o mensajes) */
    /* Usar el objeto FormData para guardar los parámetros que se enviarán:
       formData.append('clave', valor);
       valor = elemento/s que se pasarán como parámetros: token, method, inputs... */
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('_method', 'DELETE');
    formData.append('id', id_usr);

    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "eliminar", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            /* Leerá la respuesta que es devuelta por el controlador: */
            if (respuesta.resultado == 'OK') {
                document.getElementById('mensaje').innerHTML = "Eliminacion correcta!!"
            } else {
                document.getElementById('mensaje').innerHTML = "Fallo en la eliminacion: " + respuesta.resultado;
            }
            leerJS();
        }
    }

    ajax.send(formData);
}

/* Función implementada con AJAX que inserta un archivo */
function crear() {
    /* Si hace falta obtenemos el elemento HTML donde introduciremos la recarga (datos o mensajes) */
    /* Usar el objeto FormData para guardar los parámetros que se enviarán:
       formData.append('clave', valor);
       valor = elemento/s que se pasarán como parámetros: token, method, inputs... */
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('nombre', document.getElementById('nombre').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('pwd', document.getElementById('pwd').value);
    formData.append('tipo_usu', document.getElementById('tipo_usu').value);

    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "crear", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            /* Leerá la respuesta que es devuelta por el controlador: */
            if (respuesta.resultado == 'OK') {
                document.getElementById('mensaje').innerHTML = "Inserción correcta."
            } else {
                document.getElementById('mensaje').innerHTML = "Fallo en la inserción: " + respuesta.resultado;
            }
            leerJS();
        }
        /*VALIDACION */
        if (nombre == '' || email == '' || pwd == '') {
            swal.fire({
                title: "Error",
                text: "Tienes que rellenar todos los datos",
                icon: "error",
            });
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            swal.fire({
                title: "Error",
                text: "Introduce un email correcto",
                icon: "error",
            });
            return false;
        } else if (pwd.length < 8) {
            swal.fire({
                title: "Error",
                text: "La contraseña debe tener mas de 8 caracteres",
                icon: "error",
            });
            return false;
        } else if (pwd.length > 100) {
            swal.fire({
                title: "Error",
                text: "La contraseña debe tener menos de 100 caracteres",
                icon: "error",
            });
            return false;
        } else {
            return true;
        }
    }

    ajax.send(formData);
}