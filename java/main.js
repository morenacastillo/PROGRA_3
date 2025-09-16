//js 5

/*
===============================
Objetos globales en JavaScript: Navegador y Node.js
===============================

- Los objetos globales en JavaScript son aquellos que estan disponibles en todo el entorno de ejecucion.

- Su proposito es facilitar el acceso a ciertas funciones y valores predeterminados

En el entorno del navegador, los objetos globales incluyen todos los objetos estandar de
JavaScript, como (Array, String, Object, etc), asi como un conjunto de objetos
especifico para la interaccion con la pagina web y su entorno
los objetos globales en js

en el entorno del navegador, los objetos globales incluyen todos los eobjetos estandar de js, como un conjunto de objetos especificos para la interaccion con la pagina web y su entorno

WINDOW----------
- el objeto global principal en el entorno de navegador.
- representa la ventana de navegador y actua como el contenedor global para todas las
  variables, funciones y objetos globales en una pagina web
- todos los objetos, variables y funciones definidos en el ámbito global, estan
  automaticamente disponibles como propiedades del objeto window
- Entre los objetos y metodos que provee window tenemos:

document: Representa el DOM de la pagina web actual, permitiendo el acceso y la
manipulacion de elementos HTML. Es un subobjeto de window, es la representacion estructural de la pagina HTML que permite acceder, modificar y manipular los elementos del documento

alert, prompt y confirm : Permiten mostrar dialogos al usuario o cuadros para recibir
input de este

setTimeout y setInterval: Metodos para programar la ejecucion del codigo despues de
un tiempo, con setTimeout o despues de un intervalo con setInterval
*/
setTimeout(() =>console.log("hola despues de 1 segundo"), 1000);

//location: proporciona info sobre la URL actual de la pagina y permite redireccionar a otras URL
console.log(window.location.href);

//navigator: contiene info sobre el navegador como la version, el agente de usuario y la geolocalizacion
console.log(navigator.userAgent);

//console: proporciona acceso a la consola del navegador para mostrar mensajes de depuracion

//localStorage y sessionStorage: permiten almacenar datos en el navegador de forma persistente o temporal

//history: proporciona acceso al historial de navegacion del navegador

/*============== ALMACENAMIENTO DE DATOS ==============


*/

//to do: probar el refresh de la cache con localStorage y sessionStorage
