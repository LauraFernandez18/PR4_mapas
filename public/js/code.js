window.onload = function() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

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

function mostrarlog() {
    document.getElementById("content_regis").style.display = 'none';
    document.getElementById("content_regis2").style.display = 'block';
}

function mostrarreg() {
    document.getElementById("content_regis").style.display = 'block';
    document.getElementById("content_regis2").style.display = 'none';
}

/*VALIDACIÓN LOGIN*/
function validarLogin() {
    let correo_user = document.getElementById('correo_user').value;
    let pass_user = document.getElementById('pass_user').value;

    if (correo_user == '' || pass_user == '') {
        swal.fire({
            title: "Error",
            text: "Tienes que rellenar todos los datos",
            icon: "error",
        });
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo_user)) {
        swal.fire({
            title: "Error",
            text: "Introduce un email correcto",
            icon: "error",
        });
        return false;
    } else {
        return true;
    }
}
