var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;

/*Funcion para validar nombre, si el lenght del input es 1 o 2, te indica Nombre corto, si esta vacio te dice campo incompleto
y si el nombre es correcto no muestra ningun error*/
function validarNombre() {
    if (nombreUsuario.value.length < 3 && nombreUsuario.value.length > 0) {
        nombreUsuarioError.innerHTML = "Nombre demasiado corto."
    } else if (nombreUsuario.value.length === 0) {
        nombreUsuarioError.innerHTML = 'Campo Incompleto'
    } else {
        nombreUsuarioError.innerHTML = ''
    }
}

/*Funcion para validar apellido, si el lenght del input es 1 o 2, te indica Nombre corto, si esta vacio te dice campo incompleto
y si el nombre es correcto no muestra ningun error*/
function validarApellido() {
    if (apellidoUsuario.value.length < 3 && apellidoUsuario.value.length > 0) {
        apellidoUsuarioError.innerHTML = "Apellido demasiado corto."
    } else if (apellidoUsuario.value.length === 0) {
        apellidoUsuarioError.innerHTML = 'Campo Incompleto'
    } else {
        apellidoUsuarioError.innerHTML = ''
    }
}

/*Funcion para validad edad, si no es un numero, o la edad es menor que 0 y mayor que 99 te indica el error*/
function validarEdad() {
    if (isNaN(edad.value) || edad.value < 1 || edad.value > 99) {
        errorEdad.innerHTML = "Edad Invalida";
    } else {
        errorEdad.innerHTML = "";
    }
}

/*Funcion para validad email, hace un test, el test hace la comparacion entre mi expresion regular llamada pattern,
y con el value del email que ingrese, si es correcto devuelve true de lo contrario muestra el error.*/
function validateEmail() {
    if (pattern.test(email.value)) {
        emailError.innerHTML = ""
    } else {
        emailError.innerHTML = "Formato de email incorrecto"
    }
}

/*Funcion para sexo, comprueba si todos los radiobuttons estan sin checkear muestra error para que puedas seleccionar uno*/
function validarSexo() {
    if (men.checked === false && women.checked === false && other.checked === false) {
        sexoError.innerHTML = "Debe seleccionar un sexo"
        false
    } else {
        sexoError.innerHTML = ""
    }
}

/*Funcion para validad interes, lo mismo que el de arriba, pero en esta ocasion son checkboxs*/
function validarInteres() {
    if (musica.checked === false && deportes.checked === false && juegos.checked === false && tecnologia.checked === false) {
        textInteresError.innerHTML = "Debe seleccionar un interes"
    } else {
        textInteresError.innerHTML = ""
    }
}

/*Funcion para comentario, en este caso si el lenght es menor que 15 te indica el error para que lo completes*/
function validarComentario() {
    if (comentarios.value.length < 15) {
        comentariosError.innerHTML = 'El comentario debe tener al menos 15 caracteres'
    } else {
        comentariosError.innerHTML = ''
    }
}

function validarPais() {
    if (select.selected === true) {
        elegirError.innerHTML = "Seleccione un pais"
    } else {
        elegirError.innerHTML = ""
    }
}

/*Funcion para mostrar los datos en la consola*/
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
    if (select.selected === true) {
        console.log("Pais :")
    }
    if (argentina.selected === true) {
        console.log("Pais : Argentina")
    }
    if (chile.selected === true) {
        console.log("Pais : Chile")
    }
    if (brasil.selected === true) {
        console.log("Pais : Brasil")
    }
    if (uruguay.selected === true) {
        console.log("Pais : Uruguay")
    }
    console.log('Comentarios: ' + comentarios.value)

}

/*Funcion para enviar formulario, se va a ejecutar cuando el usuario hace click en el boton*/
var enviarFormulario = function () {
    console.clear()
    validarNombre()
    validarApellido()
    validateEmail()
    validarEdad()
    validarSexo()
    validarInteres()
    validarPais()
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
    argentina = document.getElementById('argentina')
    brasil = document.getElementById('brasil')
    chile = document.getElementById('chile')
    uruguay = document.getElementById('uruguay')
    select = document.getElementById('select')
}
