const listaFrutas = [
  {"id": 1, "nombre": "Arandano", "precio": 5000,"imagen" : "img/arandano.jpg", cantidad: 0},
  {"id": 2, "nombre": "Banana", "precio": 1000, "imagen": "img/banana.jpg", cantidad: 0},
  {"id": 3, "nombre": "Frambuesa", "precio": 4000, "imagen": "img/frambuesa.png", cantidad: 0},
  {"id": 4, "nombre": "Frutilla", "precio": 3000, "imagen": "img/frutilla.jpg", cantidad: 0},
  {"id": 5, "nombre": "Kiwi", "precio": 2000, "imagen": "img/kiwi.jpg", cantidad: 0},
  {"id": 6, "nombre": "Mandarina", "precio": 800, "imagen": "img/mandarina.jpg", cantidad: 0},
  {"id": 7, "nombre": "Manzana", "precio": 1500, "imagen": "img/manzana.jpg", cantidad: 0},
  {"id": 8, "nombre": "Naranja", "precio": 9000, "imagen": "img/naranja.jpg", cantidad: 0},
  {"id": 9, "nombre": "Pera", "precio": 2500, "imagen": "img/pera.jpg", cantidad: 0},
  {"id": 10, "nombre": "Anana", "precio": 3000, "imagen": "img/anana.jpg", cantidad: 0},
  {"id": 11, "nombre": "Pomelo amarillo", "precio": 2000, "imagen": "img/pomelo-amarillo.jpg", cantidad: 0},
  {"id": 12, "nombre": "Pomelo rojo", "precio": 2000, "imagen": "img/pomelo-rojo.jpg", cantidad: 0}
]


let carrito = []
let htmlCarrito = "";

const barraBusqueda = document.getElementById("barra-busqueda");

const contenedorProductos = document.getElementById("contenedor-productos");

const contenedorCarrito = document.getElementById("contenedor-carrito");

const selectOrdenar = document.getElementById("select-ordenar");



//===================== EVENTOS =====================
barraBusqueda.addEventListener("input", filtrarProductos);
selectOrdenar.addEventListener("change", ordenarProductos);


//===================== ORDENAR =====================

function ordenarProductos(){
    let opcionSeleccionada = selectOrdenar.value;
    let productosOrdenados = [...listaFrutas];

    switch(opcionSeleccionada){
        case "precioAsc":
            productosOrdenados.sort( (a, b) => a.precio - b.precio );
            mostrarLista(productosOrdenados);
            break;

        case "precioDesc":
            productosOrdenados.sort( (a, b) => b.precio - a.precio );
            mostrarLista(productosOrdenados);
            break

        case "alfAsc":
            productosOrdenados.sort((a, b) => 
                (a.nombre.toLowerCase() > b.nombre.toLowerCase()) - 
                (a.nombre.toLowerCase() < b.nombre.toLowerCase()));
            mostrarLista(productosOrdenados);
            break;
        
        case "alfDesc":
            productosOrdenados.sort((a, b) => 
                (b.nombre.toLowerCase() > a.nombre.toLowerCase()) - 
                (b.nombre.toLowerCase() < a.nombre.toLowerCase()));
            mostrarLista(productosOrdenados);
            break;
            }
}


//===================== BARRA BUSQUEDA =====================
function filtrarProductos(){
    let textoBusqueda = barraBusqueda.value.toLowerCase();
    let productosFiltrados = listaFrutas.filter(fruta => fruta.nombre.toLowerCase().includes(textoBusqueda));
    
    mostrarLista(productosFiltrados)
}


//===================== LISTA =====================
function mostrarLista(array){
    let htmlProductos = "";
    array.forEach(fruta => {
        htmlProductos +=`
        <div class="card-producto">
            <img src="${fruta.imagen}" alt="${fruta.nombre}">
            <h3>${fruta.nombre}</h3>
            <p>$${fruta.precio}</p>
            <button class="boton-agregar" onclick="agregarACarrito(${fruta.id})">Agregar al carrito</button>
        </div>
        `
        });
    contenedorProductos.innerHTML = htmlProductos;
}

function agregarACarrito(id){
    const productoEnCarrito = carrito.find(fruta => fruta.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    } else{
        const fruta = listaFrutas.find(fruta => fruta.id === id);
        fruta.cantidad = 1;
        carrito.push(fruta);
    }
    mostrarCarrito();
    actualizarCarrito();
}


//===================== CARRITO =====================
function mostrarCarrito(){
    htmlCarrito = "<ul>";
    carrito.forEach( (fruta, indice) => {
        htmlCarrito += `
        <li class="bloque-item">
        <p class="nombre-item">${fruta.nombre} - $${fruta.precio}    x ${fruta.cantidad}</p>

        <button class="boton-eliminar" onclick="eliminarDelCarrito(${indice})">Eliminar</button>
         
        `;})
        if(carrito.length >= 1){
            htmlCarrito += `
                </ul>
                <div class="carrito-footer">
                    <button id="vaciar-carrito" onclick="vaciarCarrito()">Vaciar carrito</button>
                    <p class="total-carrito">Total: $${carrito.reduce((acum, fruta) => acum + (fruta.precio * fruta.cantidad), 0)}</p>
                </div> `;}
        else{
            htmlCarrito += `
            </ul>
            <p class="carrito-vacio">El carrito se encuentra vacío...</p>`;
        }
        contenedorCarrito.innerHTML = htmlCarrito;

}

function eliminarDelCarrito(indice){
    const fruta = carrito[indice];
    if(fruta.cantidad > 1){
        fruta.cantidad--;
    } else{
        carrito.splice(indice, 1);
    }
    mostrarCarrito();
    actualizarCarrito();
}

function vaciarCarrito(){
    carrito = [];
    mostrarCarrito();
    actualizarCarrito();
}

function leerCarrito(){
    let textoCarritoLeido = localStorage.getItem("carrito");
    if (!textoCarritoLeido)
    {
        mostrarCarrito();
    }
    else
    {
        carrito = JSON.parse(textoCarritoLeido);
        mostrarCarrito();
    }
}

function actualizarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


//===================== INIT =====================
function init (){
    mostrarLista(listaFrutas);
    mostrarCarrito()
    leerCarrito();
}
init();
