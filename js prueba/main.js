

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bienvenidos</h1>
    <p>Esto es un parrafo</p>
</body>
</html>*/

/*
-document
    -html
        -title
    -body 
        -h1    
        -p


y como funciona la manipulacion del DOM    

- javascript puede acceder y modificar cualquier elemnto del dom utilazando el objeto global document 

*/

// getElementById()
// 

let titulo = document.getElementById("titulo");

console.log(titulo);
console.log(titulo.textContent); // titulo principal

// querySelector() querySelectorAll()
// querySelector() selleciona el primer elemento que coincida con un selector css (etiqueta, .clase, #id)
// querySelectorAll() selecciona todos los elementos que coincidan con el selector css y devuelve una NodeList (similar a un array)

let primerParrafo = document.querySelector(".mensaje")
console.log(primerParrafo.textContent);

// selecciona todos los elementos con class = "mensaje"

let parrafos = document.querySelectorAll(".mensaje");
console.log(parrafos)

parrafos.forEach(parrafo => console.log(parrafo.textContent));

let parrafo = document.getElementById("parrafo");

// cambiar el texto
parrafo.textContent = "Soy un parrafo que... meh";

// modificar el contenido HTML
parrafo.innerHTML = "<strong> Aguante la pepa <strong>";

// modificando el boton
let boton = document.getElementById("boton");
boton.setAttribute("id", "nuevoId");

// cambiar el estilo
boton.style.backgroundColor = "green"
boton.style.color = "white"
boton.style.padding = "10px"

// eventos de mouse: click, dbclick, mouseover, mouseout, mousemove

//eventos de teclado: keydown, keyup

// eventos de form: submit, change, input, focus

// escuchamos el evento click 
boton.addEventListener("click", function () {
    console.log("Boton clickeado");
});

// escuchar el evento de pulsacion de tecla
let input = document.getElementById("input");

// aca usamos event, que es un objeto que contiene TODOS los datos del evento 
/*
- que tecla se presioono 
- que boton se hizo click
- coordenadas del mouse
- nos proporciona metodos clave como
    - stopPropagation()
    - preventDefault()
*/

// registramos cada tecla del evento cuando hacemos keydown
input.addEventListener("keydown", function(event){
    console.log(`Tecla presionada: ${event.key}`)
});

// leer el valor de un campo de busqueda
let barraBusqueda = document.getElementById("barraBusqueda")

barraBusqueda.addEventListener("keyup", function() {
    // keyup se dispara cuando se libera una tecla 
    let valorBusqueda = barraBusqueda.value;
    console.log(valorBusqueda);
})

/* propagacion de eventos y event.stopPropagation */
/*

function sumar (a, b) {} // a y b son argumentos

sumar(5,6); // argumentos
*/

let padre = document.getElementById("padre")
let hijo = document.getElementById("hjo")

// escuchar el click en el div padre
padre.addEventListener("click", function() {
    console.log("Se hizo click en el div del padre");
    
})

// escuchamos el click en el boton del hijo 
hijo.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Se hizo click en el boton del hijo");
})

// evitamos el envio por defecto de los formularios html

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulario no enviado");
});