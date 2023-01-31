document.getElementById("titulo").addEventListener("mouseover", function() {
    document.getElementById("titulo").style.textDecoration = "underline"
})

document.getElementById("titulo").addEventListener("mouseout", function() {
    document.getElementById("titulo").style.textDecoration = "none"
})

document.getElementById("boton-educacion").addEventListener("click", function() {
    document.getElementById("educacion").style.display = "block"
})

document.getElementById("boton-laboral").addEventListener("click", function() {
    document.getElementById("laboral").style.display = "block"
})

document.getElementById("boton-referencias").addEventListener("click", function() {
    document.getElementById("referencias").style.display = "block"
})