

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
// h1 id="titulo">Titulo principal</h1>
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

console.log("==========================");

parrafos.forEach(parrafo => console.log(parrafo.textContent));

let parrafo = document.getElementById("parrafo");

// cambiar el texto
parrafo.textContent = "Soy un parrafo que... meh";

// modificar el contenido HTML
parrafo.innerHTML = "<strong> Aguante la pepa <strong>";
console.log(parrafo.textContent);


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

boton.onmouseover = function() {
    boton.style.backgroundColor = "red"
}
boton.addEventListener("mouseover", function() {
    console.log("mouse arriba de boton");
});
boton.onmouseout = function() {
    boton.style.backgroundColor = "violet"
}




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

input.onkeydown = function(event) {
    console.log(`Tecla presionada PRUEBA: ${event.key}`);
}


// leer el valor de un campo de busqueda
let barraBusqueda = document.getElementById("barraBusqueda")

barraBusqueda.addEventListener("keyup", function() {
    // keyup se dispara cuando se libera una tecla 
    let valorBusqueda = barraBusqueda.value;
    console.log(valorBusqueda);
})
console.log("===========================");









/* propagacion de eventos y event.stopPropagation */
/*

function sumar (a, b) {} // a y b son argumentos

sumar(5,6); // argumentos
*/

let padre = document.getElementById("padre")
let hijo = document.getElementById("hijo")

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



// almacenamiento persistente
/*
es la manera en que las aplicaciones pueden recordar informacion del usuario entre sesiones o durante la navegación

el navegador proporciona mecanismo para almacenar datos del lado del cliente
- cookies
- local storage
- sesion storage


====== cookies =======
son pequeños fragmentos de info que se almacenan en el navegador del usuario y q se envian con cada peticion http al servidor. son mas antiguas q local y session storage y fueron usadas para mantener la sesion del usuario, guardar preferencias, etc

caracteristicas:
-persistencia: las cookies pueden tener una fecha de expiracion. si no se establece una, la cookie sera eliminada al cerrar la sesion del navegador
- envio al servidor: se envian automaticamente al servidor con cada solicitud http, lo que puede ser util pero sobrecarga la red
- almacenamiento por orige (dominio y protocolo): al igual que local y sesion storage, las cookies estan asociadas a un dominio en especcifico

uso principal:
-autenticacion (tokens, sesion)
- preferencias del usuario que deben ser eviadas al servidor
-seguimiento (traking) de la actividad web

caract - tecnicas:
se envian automaticamente al servidor con cada solicitud http
-tamaño maximo de 4gb
-expioran segun una fecha determinada o duracion
-se puede marcar como httponly (accesibles solo desde el servidor) y secure (solo sobre http)


*/

document.cookie= "usuario=Pity; expires=Fri, 31 Dec 2025 23:59:29 YC; path/";
console.log(document.cookie);


// ====== local storage ======
/*
es una api q permite almacenar datos de manera persistente en el navegador

los datos almacenados en localstorage no tienen fecha de expiracion, por lo q estaran disponibles incluso despues de cerrar y reabrir el navegador

uso principal:
- guardar datos que deben persistir incluso despues de cerrar el navegador
- almacenar configuraciones de usuario, temas, carrito de compras, etc

caract - tecnicas:
- tamaño maximo 5 - 10 MB por dominio
- persistente, no tiene expiracion
- accesible solo desde js

metodos de localstorage:
- guarda un par clave-valor:                    setItem(clave, valor):
- obtiene el valor asociado a la clave:         getItem(clave)
- elimina el par clave-valor:                   removeItem(clave) 
- elimina todos los datos almacenados:          localStorage.clear() 
- obtiene la clave en la posicion especificada: key(indice) 
*/

localStorage.setItem("tema", "oscuro");
localStorage.setItem("idioma", "es");
localStorage.setItem("nombre", "morena");
console.log(localStorage.getItem("nombre")); 


// creamos un objeto
let nombrePrueba = {
    nombre: "Morena",  
    ocupacion: "estudiante",
    formacion: "UTN",
    barrio: "avellaneda"
}
//seteamos nuestro objeto como texto plano json
console.log("===========================");

let jsonNombrePrueba = JSON.stringify(nombrePrueba); //pasar a texto plano
console.log(jsonNombrePrueba);

localStorage.setItem("prueba", jsonNombrePrueba);

//recuperamos del localstorage nuestro texto plano almaenado y lo VOLVEMOS convertimos en un objeto que era su forma original
let recuperarPrueba = JSON.parse(jsonNombrePrueba)
console.log(recuperarPrueba);


// utilizar local storage cuando por ej guardar un carrito de compras, donde el usuario selecciona productos y abandona la tienda, al volver a la tienda, el carrito sigue ahi



// ====== session storage ======
/*
es una api similar a local pero que los datos almacenados solo se mantien durante la sesion del navegador, una vez q se cierra la pestaña o el navegador, los datos se eliminan automaticamente

uso principal: 
- guardar datos temporales mientras la pestaña del navegador esta abierta
- guardar informacion de formularios o pasos de navegacion de una misma sesion

caract - tecnicas:
- tamaño simiar a local storage (5-10 MB por dominio)
- datos eliminados al cerrar la pestaña o el navegador
- accesible solo desde js

metodos de session storage:
- guarda un par clave-valor:                    setItem(clave, valor):
- obtiene el valor asociado a la clave:         getItem(clave)
- elimina el par clave-valor:                   removeItem(clave) 
- elimina todos los datos almacenados:          sessionStorage.clear() 
- obtiene la clave en la posicion especificada: key(indice)

consideraciones adicionales
- seguridad: no almacenar informacion sensible en local o session storage
- En este caso, usemos cookies seguras con HttpOnly y Secure
*/