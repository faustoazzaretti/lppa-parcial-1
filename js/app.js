var botonEnviar = null;
var nombreUsuario = null;
var nombreUsuarioError = null;
var apellidoUsuario = null;
var apellidoUsuarioError = null;
var email = null;
var emailError = null;
var expesion = null;
var edad = null;
var man = null;
var woman = null;
var other = null;
var sexoError = null;
var musica = null;
var deportes = null;
var juegos = null;
var tecnologia = null;
var textInteresError = null;
var comentarios = null;
var comentariosError = null;
var elegirError = null
var elegir = null;
var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;

function validarNombre() {
    if (nombreUsuario.value.length < 3 && nombreUsuario.value.length > 0) {
        nombreUsuarioError.innerHTML = "Nombre demasiado corto."
    } else if (nombreUsuario.value.length === 0) {
        nombreUsuarioError.innerHTML = 'Campo Incompleto'
    } else {
        nombreUsuarioError.innerHTML = ''
    }
}

function validarApellido() {
    if (apellidoUsuario.value.length < 3 && apellidoUsuario.value.length > 0) {
        apellidoUsuarioError.innerHTML = "Apellido demasiado corto."
    } else if (apellidoUsuario.value.length === 0) {
        apellidoUsuarioError.innerHTML = 'Campo Incompleto'
    } else {
        apellidoUsuarioError.innerHTML = ''
    }
}

function validarEdad() {
    if (isNaN(edad.value) || edad.value < 1 || edad.value > 99) {
        errorEdad.innerHTML = "Edad Invalida";
    } else {
        errorEdad.innerHTML = "";
    }
}

function validateEmail() {
    if (pattern.test(email.value)) {
        emailError.innerHTML = ""
    } else {
        emailError.innerHTML = "Formato de email incorrecto"
    }
}

function validarSexo() {
    if (men.checked === false && women.checked === false && other.checked === false) {
        sexoError.innerHTML = "Debe seleccionar un sexo"
        false
    } else {
        sexoError.innerHTML = ""
    }
}

function validarInteres() {
    if (musica.checked === false && deportes.checked === false && juegos.checked === false && tecnologia.checked === false) {
        textInteresError.innerHTML = "Debe seleccionar un interes"
    } else {
        textInteresError.innerHTML = ""
    }
}

function validarComentario() {
    if (comentarios.value.length < 15) {
        comentariosError.innerHTML = 'El comentario debe tener al menos 15 caracteres'
    } else {
        comentariosError.innerHTML = ''
    }
}

function mostrarDatos() {
    console.log('Nombre: ' + nombreUsuario.value)
    console.log('Apellido: ' + apellidoUsuario.value)
    console.log('Email :' + email.value)
    console.log('Edad : ' + edad.value)
    if (men.checked === true) {
        console.log('Sexo: Masculino')
    } else if (women.checked === true) {
        console.log('Sexo: Femenino')
    } else if (other.checked === true) {
        console.log('Sexo:  Otro')
    }
    console.log('Temas de interes:')
    if (musica.checked === true) {
        console.log("Musica")
    }
    if (deportes.checked === true) {
        console.log('Deportes')
    }
    if (juegos.checked === true) {
        console.log('Juegos')
    }
    if (tecnologia.checked === true) {
        console.log('Tecnologia')
    }
    console.log('Comentarios: ' + comentarios.value)
}


var enviarFormulario = function () {
    console.clear()
    validarNombre()
    validarApellido()
    validateEmail()
    validarEdad()
    validarSexo()
    validarInteres()
    validarComentario()
    mostrarDatos()
    return false
}


window.onload = function () {
    //Selecciono todos los elementos, por ID, para poder utilizarlos en mi codigo javascript.
    nombreUsuario = document.getElementById('nombre')
    nombreUsuarioError = document.getElementById('nombreError')
    apellidoUsuario = document.getElementById('apellido')
    apellidoUsuarioError = document.getElementById('apellidoError')
    edad = document.getElementById("edad");
    errorEdad = document.getElementById('edadError')
    email = document.getElementById('email')
    emailError = document.getElementById('emailError')
    men = document.getElementById("masculino")
    women = document.getElementById("femenino")
    other = document.getElementById("otro")
    sexoError = document.getElementById("sexoError")
    musica = document.getElementById("musica")
    deportes = document.getElementById("deportes")
    juegos = document.getElementById("juegos")
    tecnologia = document.getElementById("tecnologia")
    textInteresError = document.getElementById("interesError")
    elegir = document.getElementById('pais').value
    elegirError = document.getElementById('elegirError')
    comentarios = document.getElementById('comentarios')
    comentariosError = document.getElementById('comentariosError')
    botonEnviar = document.getElementById('enviar')
    botonEnviar.onclick = enviarFormulario
}
