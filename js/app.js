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
    check()
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

