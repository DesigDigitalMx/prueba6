import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
  cartProducts,
  setCartProducts,
  addToCart,
  activeButton,
  handleDecrease,
  handleIncrease,
  modalQuantity,
  setModalQuantity,
}) => {
  const [note, setNote] = useState("");

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddToCart = () => {
    // Buscar si el producto ya está en el carrito
    const existingProductIndex = cartProducts.findIndex(
      (item) => item.sys.id === product.sys.id
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya existe, actualizar la cantidad
      const updatedCartProducts = cartProducts.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + modalQuantity }
          : item
      );
      setCartProducts(updatedCartProducts);
    }

    const MySwal = withReactContent(Swal);
    MySwal.fire({
      icon: "success",
      title: "Agregado al carrito con éxito",
      showConfirmButton: false,
      timer: 1500,
    });

    // Cerrar el modal
    onClose();
  };

  return (
    <div className={`product-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <img
          src={product.fields.imagen.fields.file.url}
          alt={product.fields.titulo}
        />
        <h2>{product.fields.titulo}</h2>
        <p>{product.fields.descripcion}</p>

        <textarea
          id="note"
          value={note}
          onChange={handleNoteChange}
          cols="30"
          rows="10"
          placeholder="Agregar instrucciones"
        ></textarea>

        <div className="quantity-control">
          <button
            id="quantity-button"
            onClick={() => {
              handleDecrease(product.sys.id);
              setModalQuantity((prevQuantity) =>
                prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
              );
            }}
          >
            -
          </button>
          <span id="quantity-value">{modalQuantity}</span>
          <button
            id="quantity-button"
            onClick={() => {
              handleIncrease(product.sys.id);
              setModalQuantity((prevQuantity) => prevQuantity + 1);
            }}
          >
            +
          </button>
        </div>

        <button
          onClick={() => {
            addToCart(product, note, modalQuantity);
            onClose();
            handleAddToCart();
          }}
          className={`add-to-cart-button ${
            activeButton === product.sys.id ? "button-clicked" : ""
          }`}
        >
          <FaShoppingCart className="cart-icon" /> Añadir al carrito
        </button>
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
