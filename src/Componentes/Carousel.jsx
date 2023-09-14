import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaShoppingCart } from "react-icons/fa";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { createClient } from "contentful";
import CarouselProductDetailModal from "./CarouselProductDetailModal";

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const Carousel = ({
  setCountProducts,
  setTotal,
  cartProducts,
  setCartProducts,
}) => {
  const [promociones, setPromociones] = useState([]);
  const [productModalOpen, setProductModalOpen] = useState(false); // Estado para controlar la apertura/cierre del modal de detalle
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para almacenar el producto seleccionado para mostrar en el modal
  const [modalQuantity, setModalQuantity] = useState(1);

  useEffect(() => {
    client
      .getEntries({
        content_type: "promociones",
      })
      .then((response) => {
        setPromociones(response.items);
      })
      .catch((error) =>
        console.error("Error fetching data from Contentful:", error)
      );
  }, []);

  const handleOpenProductModal = (product) => {
    setSelectedProduct(product);
    setProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
    setProductModalOpen(false);
  };

  const addToCart = (product, noteCarousel, quantity) => {
    // Comprobamos si el producto ya está en el carrito
    const existingProduct = cartProducts.find(
      (item) => item.sys.id === product.sys.id
    );

    if (existingProduct !== -1) {
      // Si el producto ya existe, actualizar la cantidad
      const updatedCartProducts = cartProducts.map((item, index) =>
        index === existingProduct
          ? { ...item, quantity: item.quantity + modalQuantity }
          : item
      );
      setCartProducts(updatedCartProducts);
    } else {
      // Si el producto no está en el carrito, agregarlo con la cantidad seleccionada
      setCartProducts((prevCart) => [
        ...prevCart,
        { ...product, quantity: modalQuantity, note: noteCarousel },
      ]);
    }

    // Actualizar el contador de productos y el total
    setCountProducts((prevCount) => prevCount + modalQuantity);
    setTotal(
      (prevTotal) => prevTotal + product.fields.precioPromocion * modalQuantity
    );
  };

  const handleIncrease = () => {
    setModalQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (modalQuantity > 1) {
      setModalQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {promociones.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="item">
            <figure>
              {item.fields.imagenPromocion && (
                <img
                  src={item.fields.imagenPromocion.fields.file.url}
                  alt="img"
                />
              )}
            </figure>
            <div className="info-product">
              <h2>{item.fields.tituloPromocion}</h2>
              <p className="ellipsis">{item.fields.descripcionPromocion}</p>
              <div className="info-container">
                <p className="price">${item.fields.precioPromocion}</p>
                <button onClick={() => handleOpenProductModal(item)}>
                  <FaShoppingCart className="cart-icon" />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Modal de detalle del producto del carrusel */}
      {selectedProduct && (
        <CarouselProductDetailModal
          product={selectedProduct}
          isOpen={productModalOpen}
          onClose={handleCloseProductModal}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          addToCart={addToCart}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          modalQuantity={modalQuantity}
          setModalQuantity={setModalQuantity}
        />
      )}
    </Swiper>
  );
};

export default Carousel;
