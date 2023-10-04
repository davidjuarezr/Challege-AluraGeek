import { productoServices } from "../services/productos-servicios.js";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const url = document.querySelector('[data-url]').value;
  const nombre = document.querySelector('[data-nombre]').value;
  const precio = document.querySelector('[data-precio]').value;

  productoServices
    .creaProductos(url, nombre, precio)
    .then((respuesta) => {
      window.location.href = "../screens/index.html";
      console.log(respuesta);
    })
    .catch((error) => {
      console.log(error);
    });
});
