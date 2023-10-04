//GET
const listaProductos = () =>
  fetch("http://localhost:3000/producto")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));

//POST
const creaProductos = (imageUrl, name, price) => {
  return fetch(`http://localhost:3000/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageUrl,
      name,
      price,
    }),
  }).then((respuesta) => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error("No se pudo crear el producto");
  });
};

export const productoServices = {
  listaProductos,
  creaProductos,
};
