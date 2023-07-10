function renderProducto() {
    const producto = JSON.parse(localStorage.getItem("producto"));
    const descripcion = producto.descripcion;
    let descripcionVisible = "";
    let letra = 0;
  
    const mostrarLetra = () => {
      if (letra < descripcion.length) {
        const letraActual = descripcion.charAt(letra);
        descripcionVisible += letraActual;
        document.getElementById("descripcionProducto").innerHTML = descripcionVisible;
        letra++;
      } else {
        clearInterval(intervalId);
      }
    };
  
    let contenido = `
      <div class="tarjetaVerProducto">
        <div class="col-md-4 mt-5 verProductoTarjeta">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        </div>
        <div class="col-md-4 mt-5">
          <h2 class="border-bottom border-dark">${producto.nombre}</h2>
          <div class="descripcionProductoDiv">
            <p id="descripcionProducto" class="vinosDescripcion"></p>
          </div>
          <div class="d-flex justify-content-around">
            <h3 class="text-danger"><b>$${producto.precio}</b></h3>
            <button class="btn btn-dark" onclick="agregarProducto(${producto.id}, '${producto.categoria}');"> Agregar al carrito </button>
          </div>
        </div>
      </div>`;
    document.getElementById("contenido").innerHTML = contenido;
  
    const intervalId = setInterval(mostrarLetra, 25);

    document.addEventListener("click", () => {
        clearInterval(intervalId);
        document.getElementById("descripcionProducto").innerHTML = descripcion;
      });
  }
  
  renderProducto();
  renderBotonCarrito();