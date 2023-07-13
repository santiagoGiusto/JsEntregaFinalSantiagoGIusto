function renderProductos() {
    let productos = cargarCarritoLS();
    let contenido = "";

    if(cantidadTotalProductos()> 0) {
        contenido += `<table class="table"`;
        contenido += `<tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td class="text-center"><button class="btn btn-dark vaciarBoton" onclick="vaciarCarrito();">Vaciar Carrito</button></td>
        </tr>

        </table`;

        productos.forEach(producto => {
            contenido += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="98"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle">$${producto.precio} <b>x ${producto.cantidad}</b></p>
            <td class="align-middle"><b>$${(producto.cantidad * producto.precio).toFixed(2)}</b></p>
            <td class="align-middle text-center"><img  class="trash" src="multimedia/img/trash.png" alt="Eliminar Producto" title="Eliminar Producto" width="24" onclick="eliminarProducto(${producto.id});"></td>  
            </tr>`
        });
    
        contenido += `<tr class="tablaFinal">
        <td>&nbsp;</td>
        <td class="align-middle"><b>Precio Final</b></td>
        <td>&nbsp;</td>
        <td class="text-danger align-middle"><b>$${(sumaTotalProductos()).toFixed(2)}</b> </td>
        <td class="text-center"><button class="btn btn-dark pagarBoton" onclick="gracias()">Pagar</button></td>
        </tr>
        </table`;
    }   else {
        contenido += `<div class="alert alert-danger text-center" role"aler">Tu carrito esta vacio!
        </div>`

    }
    document.getElementById("contenidoCarrito").innerHTML = contenido;
};

renderProductos();
renderBotonCarrito();

