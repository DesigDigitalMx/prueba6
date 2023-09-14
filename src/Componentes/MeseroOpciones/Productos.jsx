import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
function Productos({ mesa, agregarAlCarrito }) {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    client
      .getEntries({
        content_type: "producto",
      })
      .then((response) => {
        setProductos(response.items);
      })
      .catch((error) => {
        console.error("Error fetching data from Contentful:", error);
      });
  }, []);
  return (
    <div className="items-products-container">
      <h1>{mesa}</h1>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.sys.id}>
            <h2>{producto.fields.titulo}</h2>
            <p>Precio: {producto.fields.precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Productos;