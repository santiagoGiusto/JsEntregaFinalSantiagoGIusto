// function renderTintos() {
//     let tintos = cargarTintosLS();
//     let contenidoTintos = "";
  
//     tintos.forEach((tinto) => {
      
//       contenidoTintos += `
//         <div class="col">
//           <a class="vinoLinkVerProducto" href="ver-producto.html" onclick="verProducto(${tinto.id}, 'tintos')">
//             <div class="card text-center m-3 border border-0">
//               <img src="${tinto.imagen}" class="card-img-top" alt="${tinto.nombre}">
//               <div class="card-body">
//                 <p class="card-text text-danger" id="precioTinto-${tinto.id}"></p>
//                 <h4 class="border-bottom border-dark" id="nombreTinto-${tinto.id}"></h4>
//               </div>
//             </div>
//           </a>
//         </div>`;
  
//       let precioVisible = "";
//       let nombreVisible = "";
//       let precioTimeoutId = null;
//       let nombreTimeoutId = null;
      
//       function mostrarLetrasPrecio(indice) {
//         if (indice < tinto.precio.length) {
//           precioVisible += tinto.precio.charAt(indice);
//           document.getElementById("precioTinto-" + tinto.id).innerText = `$${precioVisible}`;
//           precioTimeoutId = setTimeout(() => {
//             mostrarLetrasPrecio(indice + 1);
//           }, Math.random() * 80 + 40);
//         }
//       }
  
//       function mostrarLetrasNombre(indice) {
//         if (indice < tinto.nombre.length) {
//           nombreVisible += tinto.nombre.charAt(indice);
//           document.getElementById("nombreTinto-" + tinto.id).innerText = nombreVisible;
//           nombreTimeoutId = setTimeout(() => {
//             mostrarLetrasNombre(indice + 1);
//           }, Math.random() * 80 + 40);
//         }
//       }
  
//       setTimeout(() => {
//         mostrarLetrasPrecio(0);
//         mostrarLetrasNombre(0);
//       }, Math.random() * 80 + 40);
  
//       document.addEventListener("click", () => {
//         clearTimeout(precioTimeoutId);
//         clearTimeout(nombreTimeoutId);
//         document.getElementById("precioTinto-" + tinto.id).innerText = `$${tinto.precio}`;
//         document.getElementById("nombreTinto-" + tinto.id).innerText = tinto.nombre;
//       });
//     });
  
//     document.getElementById("contenidoTintos").innerHTML = contenidoTintos;
//   }
  
function renderBlancos() {
    let blancos = cargarBlancosLS();
    let contenidoBlancos = "";
  
    blancos.forEach((blanco) => {
      
      contenidoBlancos += `
        <div class="col">
          <a class="vinoLinkVerProducto" href="ver-producto.html" onclick="verProducto(${blanco.id}, 'blancos')">
            <div class="card text-center m-3 border border-0">
              <img src="${blanco.imagen}" class="card-img-top" alt="${blanco.nombre}">
              <div class="card-body">
                <p class="card-text text-danger" id="precioBlanco-${blanco.id}"></p>
                <h4 class="border-bottom border-dark" id="nombreBlanco-${blanco.id}"></h4>
              </div>
            </div>
          </a>
        </div>`;

      let precioVisible = "";
      let nombreVisible = "";
      let precioTimeoutId = null;
      let nombreTimeoutId = null;
  
      function mostrarLetrasPrecio(indice) {
        if (indice < blanco.precio.length) {
          precioVisible += blanco.precio.charAt(indice);
          document.getElementById("precioBlanco-" + blanco.id).innerText = `$${precioVisible}`;
          precioTimeoutId = setTimeout(() => {
            mostrarLetrasPrecio(indice + 1);
          }, Math.random() * 80 + 40);
        }
      }
  
      function mostrarLetrasNombre(indice) {
        if (indice < blanco.nombre.length) {
          nombreVisible += blanco.nombre.charAt(indice);
          document.getElementById("nombreBlanco-" + blanco.id).innerText = nombreVisible;
          nombreTimeoutId = setTimeout(() => {
            mostrarLetrasNombre(indice + 1);
          }, Math.random() * 80 + 40);
        }
      }
    
      setTimeout(() => {
        mostrarLetrasPrecio(0);
        mostrarLetrasNombre(0);
      }, Math.random() * 80 + 40);
  
      document.addEventListener("click", () => {
        clearTimeout(precioTimeoutId);
        clearTimeout(nombreTimeoutId);
        document.getElementById("precioBlanco-" + blanco.id).innerText = `$${blanco.precio}`;
        document.getElementById("nombreBlanco-" + blanco.id).innerText = blanco.nombre;
      });
    });
  
    document.getElementById("contenidoBlancos").innerHTML = contenidoBlancos;
  }

  // renderTintos();
  renderBlancos();
  
renderBotonCarrito();
