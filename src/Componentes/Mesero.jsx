import React, { useState } from "react";
import Mesas from "./MeseroOpciones/Mesas";
import Pedido from "./MeseroOpciones/Pedido";
import Productos from "./MeseroOpciones/Productos";

function Mesero() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("pedidos");
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const mostrarContenido = () => {
    switch (opcionSeleccionada) {
      case "pedidos":
        return <Pedido />;
      case "mesas":
        return <Mesas handleMesaClick={handleMesaClick} />;
      case "productos":
        return (
          <Productos
            mesa={mesaSeleccionada}
            agregarAlCarrito={agregarAlCarrito}
            eliminarDelCarrito={eliminarDelCarrito}
          />
        );
      default:
        return null;
    }
  };

  const handleMesaClick = (mesa) => {
    setOpcionSeleccionada("productos");
    setMesaSeleccionada(mesa);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (producto) => {
    const nuevoCarrito = carrito.filter(
      (item) => item.sys.id !== producto.sys.id
    );
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.fields.precio;
    });
    return total;
  };

  const realizarPedido = () => {
    // Aquí puedes agregar lógica para procesar el pedido
    // Por ejemplo, puedes enviar los productos al servidor o hacer cualquier otra acción necesaria.

    // Luego, puedes limpiar el carrito
    setCarrito([]);
  };

  return (
    <div className="contenedor-mesero">
      <div className="container-opciones d-flex justify-content-center align-items-start">
        <div
          className="pedidos p-2 bg-white rounded"
          onClick={() => setOpcionSeleccionada("pedidos")}
        >
          Pedidos
        </div>
        <div
          className="mesas p-2 bg-white rounded"
          onClick={() => setOpcionSeleccionada("mesas")}
        >
          Mesas
        </div>
      </div>

      <div className="contenido">{mostrarContenido()}</div>

      <div className="carrito">
        <h2>Carrito</h2>
        <ul>
          {carrito.map((producto) => (
            <li key={producto.sys.id}>
              <span>{producto.fields.titulo}</span>
              <span>Precio: {producto.fields.precio}</span>
              <button onClick={() => eliminarDelCarrito(producto)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <div>
          <strong>Total: {calcularTotal()}</strong>
        </div>
        <button onClick={realizarPedido}>Realizar Pedido</button>
      </div>
    </div>
  );
}

export default Mesero;
