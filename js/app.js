var botonEnviar = null;
var nombreUsuario = null;
var nombreUsuarioError = null;
var apellidoUsuario = null;
var apellidoUsuarioError = null;
var email = null;
var emailError = null;
var expesion = null;
var text = "hola"
var x = null;
var man = null;
var woman = null;
var other = null;
var sexoError = null;
var musica = null;
var deportes = null;
var juegos = null;
var tecnologia = null;
var textInteresError = null;

function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("edad").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 99) {
        text = "Input not valid";
    } else {
        text = "";
    }
    document.getElementById("edadError").innerHTML = text;
}

function checkRadio() {
    men = document.getElementById("masculino").checked
    women = document.getElementById("femenino").checked
    other = document.getElementById("otro").checked
    textS = sexoError = document.getElementById("sexoError")
    if (men === false && women === false && other === false) {
        textS.innerHTML = "Debe seleccionar un sexo"
        false
    } else {
        textS.innerHTML = ""
    }
}

function checkCheckbox() {
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

var sendForm = function () {

    if (nombreUsuario.value === "") {
        nombreUsuarioError.innerHTML = "El campo se encuentra incompleto, por favor completalo."
    } else {
        nombreUsuarioError.innerHTML = ''
    }
    if (apellidoUsuario.value === "") {
        apellidoUsuarioError.innerHTML = "El Apellido se encuentra vacio, por favor completalo."
    } else {
        apellidoUsuarioError.innerHTML = ''
    }
    myFunction()
    checkRadio()
    checkCheckbox()
    return false
}





window.onload = function () {

    nombreUsuario = document.getElementById('nombre')
    apellidoUsuario = document.getElementById('apellido')
    botonEnviar = document.getElementById('enviar')
    botonEnviar.onclick = sendForm
    nombreUsuarioError = document.getElementById('nombreError')
    apellidoUsuarioError = document.getElementById('apellidoError')
    email = this.document.getElementById('email')
    x = document.getElementById("edad").value;
    man = document.getElementById("masculino").checked
    women = document.getElementById("femenino").checked
    other = document.getElementById("otro").checked;

}

