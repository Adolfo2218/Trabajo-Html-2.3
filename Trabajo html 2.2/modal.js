// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el elemento que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, cierra el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Función para mostrar el modal con la información del producto
function mostrarModal(nombre, precio, imagen) {
  var modalInfo = document.getElementById("modal-info");
  var modalImage = document.getElementById("modal-image");

  modalInfo.innerHTML = `
    <h2>${nombre}</h2>
    <p class="price">${precio}</p>
    <button class="btn-add-cart">Añadir al carrito</button>
  `;
  modalImage.src = imagen;

  modal.style.display = "block"; // Mostrar el modal
}
