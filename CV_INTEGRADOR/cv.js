function cargaLaPagina(elementoCargado, funcion) {
    document.getElementById(elementoCargado).addEventListener("load", funcion)
}

function subrayado(elementoSubrayado) {
    document.getElementById(elementoSubrayado).addEventListener("mouseover", function() {
    document.getElementById(elementoSubrayado).style.textDecoration = "underline"
    })
    document.getElementById(elementoSubrayado).addEventListener("mouseout", function() {
    document.getElementById(elementoSubrayado).style.textDecoration = "none"
})
}

function eventoClickYAparicion(elemento1, elemento2) {
    document.getElementById(elemento1).addEventListener("click", function() {
        document.getElementById(elemento2).style.display = "block"
    })
}

function respuesta(elemento1, elemento2, elemento3) {
    document.getElementById(elemento1).addEventListener("click", function() {
        document.getElementById(elemento2).style.display = "block"
        document.getElementById(elemento3).style.display = "none"
    })
}

cargaLaPagina("cookies", alert("Este sitio web contiene cookies que van a mejorar su experiencia como usuario"))

subrayado("titulo")

subrayado("nombre")

eventoClickYAparicion("boton-educacion", "educacion")

eventoClickYAparicion("boton-laboral", "laboral");

eventoClickYAparicion("boton-referencias", "referencias");

respuesta("responde-si", "aceptacion", "rechazo");

respuesta("responde-no", "rechazo", "aceptacion");

document.getElementsByClassName("botones-mensajes").addEventListener("submit", alert("Su respuesta sera enviada a Manuel Romero, muchas gracias."))