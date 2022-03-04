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
            recarga += '<tr><td>NOMBRE</td><td>EMAIL</td><td>TIPO</td><td>Modificar</td><td>Eliminar</td></tr>';
            for (let i = 0; i < respuesta.length; i++) {
                recarga += '<tr>';
                recarga += '<td>' + respuesta[i].nombre + '</td>'
                recarga += '<td>' + respuesta[i].email + '</td>'
                recarga += '<td>' + respuesta[i].tipo_usu + '</td>'
                recarga += '<td><button onclick="modificar(' + respuesta[i].id + ',\'' + respuesta[i].nombre + '\',\'' + respuesta[i].email + '\'); return false;">Modificar</button></td>'
                if (adm == respuesta[i].email) {
                    recarga += '<td><button onclick="return false;"><s>Eliminar</s></button></td>'
                } else {
                    recarga += '<td><button onclick="borrar(' + respuesta[i].id + '); return false;">Eliminar</button></td>'
                }
                recarga += '</tr>';
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
    contenido += '<p>Nombre<p>'
    contenido += '<input type="text" id="nombre" Value="' + nombre + '">'
    contenido += '<p>Email<p>'
    contenido += '<input type="text" id="email" Value="' + email + '">'
    contenido += '<input type="hidden" id="id" Value="' + id + '"><br/>'
    contenido += '<p>Si no quieres modificar la contraseña deja los campos de contraseña en blanco</p>'
    contenido += '<p>Contraseña actual</p>'
    contenido += '<input type="password" id="pwd">'
    contenido += '<p>Contraseña nueva</p>'
    contenido += '<input type="password" id="pwd_nueva"><br/><br/>'
    contenido += '<input type="submit" value="Modificar">'
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