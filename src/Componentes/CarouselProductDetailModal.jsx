import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CarouselProductDetailModal = ({
  product,
  isOpen,
  onClose,
  cartProducts,
  setCartProducts,
  addToCart,
  modalQuantity,
  setModalQuantity,
  handleDecrease,
  handleIncrease,
}) => {
  const [noteCarousel, setNoteCarousel] = useState("");
  // const [modalQuantity, setModalQuantity] = useState(1);

  const handleNoteChange = (e) => {
    setNoteCarousel(e.target.value);
  };

  const handleAddToCart = () => {
    console.log("Agregado al carrito");
    console.log(modalQuantity);
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

  // const handleIncrease = () => {
  //   setModalQuantity((prevQuantity) => prevQuantity + 1);
  // };

  // const handleDecrease = () => {
  //   if (modalQuantity > 1) {
  //     setModalQuantity((prevQuantity) => prevQuantity - 1);
  //   }
  // };

  return (
    <div className={`product-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        {/* Personaliza el contenido del modal para el carrusel según tus necesidades */}
        <img
          src={product.fields.imagenPromocion.fields.file.url}
          alt={product.fields.tituloPromocion}
        />
        <h2>{product.fields.tituloPromocion}</h2>
        <p>{product.fields.descripcionPromocion}</p>

        <textarea
          id="noteCarousel"
          value={noteCarousel}
          onChange={handleNoteChange}
          cols="30"
          rows="10"
          placeholder="Agregar instrucciones"
        ></textarea>

        {/* <div className="quantity-control">
          <button id="quantity-button" onClick={handleDecrease(product.sys.id)}>
            -
          </button>
          <span id="quantity-value">{modalQuantity}</span>
          <button id="quantity-button" onClick={handleIncrease(product.sys.id)}>
            +
          </button>
        </div> */}
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

        <div className="botones_modal">
          <button
            className="add-to-cart-button"
            onClick={() => {
              addToCart(product, noteCarousel, modalQuantity);
              onClose();
              handleAddToCart();
            }}
          >
            <FaShoppingCart className="cart-icon" /> Añadir al carrito
          </button>
          <button className="close-button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselProductDetailModal;
