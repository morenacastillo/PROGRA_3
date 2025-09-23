const librosTienda = [
    {id: 1, nombre: "alicia en el pais de las maravillas", precio: 150, ruta_img:"https://imgs.search.brave.com/ZLVczFBH1yNSnL-_yP5zkCu7wRDtDS-Z3VmAT7p24tg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY1NDQzNi1NTEE3/NTIyNDE1NzQzNV8w/MzIwMjQtVi53ZWJw"},  
    {id: 2, nombre: "moby dick", precio: 350, ruta_img:"https://imgs.search.brave.com/jIEQw2oGsnfX_iiImOSAa9EYhueuR7vbQw4HCw_CMXQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk1NjI1MC1NTEE1/MzYxMzcxMjgyNV8w/MjIwMjMtVi53ZWJw"},

    {id: 3, nombre: "caperucita roja", precio: 250, ruta_img:"https://imgs.search.brave.com/VOkLNKd2xCuor5CVDISOTaUNyFT6U1iJSVR0Agc-a-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzc0NDcyOC1NTFU3/ODk3MTU2Nzc4OF8w/OTIwMjQtVi53ZWJw"},    
    {id: 4, nombre: "las viudas de los jueves", precio: 50, ruta_img:"https://imgs.search.brave.com/O_4jd4_XejpgDG9R2mQ-9mSFD_PNIXovVaMtH3ESJ98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxQnJNN1crTmZT/LmpwZw"},    
    {id: 5, nombre: "donde esta wally", precio: 500, ruta_img:"https://imgs.search.brave.com/2-aozIkAbZcynyV6BPZnv5JmtaqvVg64rYCbZWWzZD0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzg5MTE4OC1NTFU3/MjU5MTQ4MjE2NV8x/MDIwMjMtVi53ZWJw"},

    {id: 6, nombre: "el señor de los anillos", precio: 980, ruta_img:"https://imgs.search.brave.com/CPwl2Vs-nbmNobq4hCAVQZp4UpUf2A1KXr6EN6FCH64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY4ODE4OC1NTE01/MjM1MTMzMjM1OF8x/MTIwMjItVi53ZWJw"}            
];

/*
console.log(librosTienda[2]);
console.log(librosTienda[3].precio);

boton.addEventListener("click", mostrarLista);
*/
const contenedorProductos = document.getElementById("contenedor-productos");

const boton = document.getElementById("boton")


function mostrarLista() {
    let htmlProductos = ""
    librosTienda.forEach(libro => {
        htmlProductos += `
        <div class="card-producto">
        <img src="" alt="">
        <h3>`${}`</h3>
        <p>$</p>
        <button>Agregar al carrito</button>
        </div>
        `
    })
    /* contenedorProductos.innerHTML = htmlProductos; */

}

