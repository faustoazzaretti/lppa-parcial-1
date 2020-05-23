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

function mostrarDatos() {
    var email = document.getElementById('email').value;
    men = document.getElementById("masculino").checked
    women = document.getElementById("femenino").checked
    other = document.getElementById("otro").checked
    musica = document.getElementById("musica").checked
    deportes = document.getElementById("deportes").checked
    juegos = document.getElementById("juegos").checked
    tecnologia = document.getElementById("tecnologia").checked
    console.log('Nombre: ' + nombreUsuario.value)
    console.log('Apellido: ' + apellidoUsuario.value)
    console.log('Email :' + email)
    console.log('Edad : ' + edad)
    if (men === true) {
        console.log('Sexo: Masculino')
    } else if (women === true) {
        console.log('Sexo: Femenino')
    } else {
        console.log('Sexo:  Otro')
    }
    console.log('Temas de interes:')
    if (musica === true) {
        console.log("Musica")
    }
    if (deportes === true) {
        console.log('Deportes')
    }
    if (juegos === true) {
        console.log('Juegos')
    }
    if (tecnologia === true) {
        console.log('Tecnologia')
    }
    console.log('Comentarios: ' + comentarios.value)

}

function validarEdad() {
    edad = document.getElementById("edad").value;

    if (isNaN(edad) || edad < 1 || edad > 99) {
        errorEdad.innerHTML = "Edad Invalida";
    } else {
        errorEdad.innerHTML = "";
    }
}

function validateEmail() {
    var email = document.getElementById('email').value;
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if (pattern.test(email)) {
        emailError.innerHTML = ""
    } else {
        emailError.innerHTML = "Formato de email incorrecto"
    }
}

function validarRadioButtons() {
    men = document.getElementById("masculino").checked
    women = document.getElementById("femenino").checked
    other = document.getElementById("otro").checked
    sexoError = document.getElementById("sexoError")

    if (men === false && women === false && other === false) {
        sexoError.innerHTML = "Debe seleccionar un sexo"
        false
    } else {
        sexoError.innerHTML = ""
    }
}

function validarCheckboxs() {
    musica = document.getElementById("musica").checked
    deportes = document.getElementById("deportes").checked
    juegos = document.getElementById("juegos").checked
    tecnologia = document.getElementById("tecnologia").checked
    textInteresError = document.getElementById("interesError")

    if (musica === false && deportes === false && juegos === false && tecnologia === false) {
        textInteresError.innerHTML = "Debe seleccionar un interes"
    } else {
        textInteresError.innerHTML = ""
    }
}


var enviarFormulario = function () {
    console.clear()
    if (nombreUsuario.value.length < 3 && nombreUsuario.value.length > 0) {
        nombreUsuarioError.innerHTML = "Nombre demasiado corto."
    } else if (nombreUsuario.value.length === 0) {
        nombreUsuarioError.innerHTML = 'Campo Incompleto'
    } else {
        nombreUsuarioError.innerHTML = ''
    }
    if (apellidoUsuario.value.length < 3 && apellidoUsuario.value.length > 0) {
        apellidoUsuarioError.innerHTML = "Apellido demasiado corto."
    } else if (nombreUsuario.value.length === 0) {
        apellidoUsuarioError.innerHTML = 'Campo Incompleto'
    } else {
        apellidoUsuarioError.innerHTML = ''
    }
    if (comentarios.value.length < 15) {
        comentariosError.innerHTML = 'El comentario debe tener al menos 15 caracteres'
    } else {
        comentariosError.innerHTML = ''
    }
    validarEdad()
    validarRadioButtons()
    validarCheckboxs()
    validateEmail()
    mostrarDatos()
    return false
}


window.onload = function () {
    //Selecciono todos los elementos, por ID, para poder utilizarlos en mi codigo javascript.
    nombreUsuario = document.getElementById('nombre')
    nombreUsuarioError = document.getElementById('nombreError')
    apellidoUsuario = document.getElementById('apellido')
    apellidoUsuarioError = document.getElementById('apellidoError')
    edad = document.getElementById("edad").value;
    errorEdad = document.getElementById('edadError')
    email = document.getElementById('email').value
    emailError = document.getElementById('emailError')
    elegir = document.getElementById('pais').value
    elegirError = document.getElementById('elegirError')
    comentarios = document.getElementById('comentarios')
    comentariosError = document.getElementById('comentariosError')
    botonEnviar = document.getElementById('enviar')
    botonEnviar.onclick = enviarFormulario
}
