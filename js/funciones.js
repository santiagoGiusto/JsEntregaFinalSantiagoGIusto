function guardarTintosLS() {
    localStorage.setItem("tintos", JSON.stringify(tintos));
}

function cargarTintosLS() {
    return JSON.parse(localStorage.getItem("tintos"));
}

function guardarBlancosLS() {
    localStorage.setItem("blancos", JSON.stringify(blancos));
}

function cargarBlancosLS() {
    return JSON.parse(localStorage.getItem("blancos"));
}

function renderBotonCarrito() {
    let botonCarrito = document.getElementById("botonCarrito");
    let contenido = `  <button type="button" class="btn position-relative">
    <img class="carritoImg" src="multimedia/img/carrito.png" alt="Carrito>
    <span class="">
        ${cantidadTotalProductos()}
        <span class="visually-hidden">unread messages</span>
    </span>
    </button> `;
    botonCarrito.innerHTML = contenido 
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function buscarProducto(id, categoria) {
    let productos;
    
    if (categoria == "blanco" || categoria == "espumantes") {
        productos = cargarBlancosLS();
    } else if (categoria == "tintos") {
        productos = cargarTintosLS();
    }
    
    return productos.find(item => item.id === id);
}

function estaEnElCarrito(id) {
    const carrito = cargarCarritoLS();
    return carrito.some(item => item.id === id)
}

function agregarProducto(id, categoria) {
    const carrito = cargarCarritoLS();

    if (estaEnElCarrito(id)) {
        let pos = carrito.findIndex(item => item.id === id);
        carrito[pos].cantidad += 1;
    } else {
        const producto = buscarProducto(id, categoria);
        producto.cantidad = 1;
        carrito.push(producto);
    }
    
    Toastify({
        text: 'Producto agregado al carrito',
        duration: 2000,
        gravity: 'top',
        position: 'left',
        style: {
            background: 'black',
            color: 'white',
        },
        stopOnFocus: true,
    }).showToast();

    guardarCarritoLS(carrito);
    renderBotonCarrito();
}

function eliminarProducto(id) {
    const carrito = cargarCarritoLS();
     let pos = carrito.findIndex(item => item.id === id);

     if (carrito[pos].cantidad > 1) {
        carrito[pos].cantidad -= 1;
     } else {
        carrito.splice(pos,1);
     }

     Toastify({
        text: 'Se ha eliminado 1 producto del carrito',
        duration: 2000,
        gravity: 'top',
        position: 'left',
        style: {
            background: 'black',
            color: 'white',
        },
        stopOnFocus: true,
    }).showToast();

    guardarCarritoLS(carrito);
    renderProductos();
    renderBotonCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    Toastify({
        text: 'Los productos fueron eliminados de tu carrito',
        duration: 2000,
        gravity: 'top',
        position: 'left',
        style: {
            background: 'black',
            color: 'white',
        },
        stopOnFocus: true,
    }).showToast();
    renderProductos();
    renderBotonCarrito();
}

function cantidadTotalProductos() {
    const carrito= cargarCarritoLS();
    
    return carrito.reduce((acumulador,item) => acumulador += item.cantidad,0);
}

function sumaTotalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += parseFloat(item.cantidad * item.precio), 0);
}

function verProducto (id, categoria) {
    let productos;

    if (categoria == "tintos") {
        productos = cargarTintosLS();
    } else if (categoria == "blancos") {
        productos = cargarBlancosLS();
    }

    let producto = productos.find(item => item.id == id);
    localStorage.setItem("producto", JSON.stringify(producto));

    location.href = "ver-producto.html"
}
  



