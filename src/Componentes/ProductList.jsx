import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { isLocalOpen } from "./helpers";
import { getDay, setHours, setMinutes } from "date-fns";
import { format } from "date-fns";
import ProductDetailModal from "./ProductDetailModal";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
  selectedCategory,
  cartProducts,
  setCartProducts,
  selectedTable,
}) => {
  const addToCart = (product, note, quantity) => {
    // Comprobamos si el producto ya está en el carrito
    const existingProduct = cartProducts.find(
      (item) => item.sys.id === product.sys.id
    );

    if (existingProduct) {
      // Si el producto ya está en el carrito, actualizamos la cantidad
      setCartProducts((prevCart) =>
        prevCart.map((item) =>
          item.sys.id === product.sys.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, lo agregamos con la cantidad seleccionada
      setCartProducts((prevCart) => [
        ...prevCart,
        { ...product, quantity: quantity, note: note },
      ]);
    }

    // Actualizamos el contador de productos y el total
    setCountProducts((prevCount) => prevCount + quantity);
    setTotal((prevTotal) => prevTotal + product.fields.precio * quantity);
  };

  useEffect(() => {
    // Filtrar los productos según la categoría seleccionada
    const productsByCategory = allProducts.filter(
      (product) => product.fields.categoria === selectedCategory
    );
    // Actualizar el estado local de productos con la cantidad
    setProducts(
      productsByCategory.map((product) => ({ ...product, quantity: 1 }))
    );
  }, [allProducts, selectedCategory]);

  // const [activeButton, setActiveButton] = useState(null);
  const [products, setProducts] = useState([]);
  const MySwal = withReactContent(Swal);

  const showAlert = () => {
    const nextOpenTime = getNextOpenTime();
    const formattedNextOpenTime = format(nextOpenTime, "hh:mm a");

    MySwal.fire({
      title: "Lo sentimos",
      text: "El local está cerrado en este momento. ¡Vuelve en horario de atención!",
      html: `
        <p>El local está cerrado en este momento. Vuelve durante el horario de apertura:</p>
        <p>Próxima reapertura: ${formattedNextOpenTime}</p>
        `,
      icon: "warning",
      confirmButtonText: "Aceptar",
    });
  };

  const getNextOpenTime = () => {
    const now = new Date();
    const currentDay = getDay(now);

    let nextOpenTime;

    if (currentDay === 0) {
      // Domingo (0)
      nextOpenTime = setHours(setMinutes(now, 0), 17); // Reapertura a las 5:00 PM
    } else if (currentDay >= 2 && currentDay <= 6) {
      // Mar a Sab (2 a 5)
      if (now.getHours() >= 2) {
        nextOpenTime = setHours(setMinutes(now, 0), 17); // Reapertura a las 10:00 AM del próximo día
      } else {
        nextOpenTime = setHours(setMinutes(now, 0), 17); // Reapertura a las 5:00 PM del próximo día
      }
    }

    return nextOpenTime;
  };

  const handleIncrease = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.sys.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrease = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.sys.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  // const filteredProducts = allProducts.filter(
  //   (product) => product.fields.categoria === selectedCategory
  // );

  const [modalProduct, setModalProduct] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);

  return (
    <div className="container-items">
      {products.map((product) => (
        <div className="item" key={product.sys.id}>
          <h2>{product.fields.titulo}</h2>
          <figure>
            <img
              src={product.fields.imagen.fields.file.url}
              alt={product.fields.titulo}
            />
          </figure>
          <div className="info-product">
            <p className="ellipsis">{product.fields.descripcion}</p>
            <div className="info-container">
              <p className="price">${product.fields.precio}</p>
              {/* <div className="quantity-control">
                <button
                  onClick={() => handleDecrease(product.sys.id)}
                  id="quantity-button"
                >
                  -
                </button>
                <span id="quantity-value">{product.quantity}</span>
                <button
                  onClick={() => handleIncrease(product.sys.id)}
                  id="quantity-button"
                >
                  +
                </button>
              </div> */}

              <button
                onClick={() => {
                  // if (isLocalOpen()) {
                  //   setModalProduct(product);
                  //   setModalQuantity(product.quantity);
                  // } else {
                  //   showAlert();
                  // }
                  setModalProduct(product);
                  setModalQuantity(product.quantity);
                }}
              >
                <FaShoppingCart className="cart-icon" />
              </button>
            </div>
          </div>
        </div>
      ))}
      {modalProduct && (
        <ProductDetailModal
          product={modalProduct}
          isOpen={Boolean(modalProduct)}
          onClose={() => {
            setModalProduct(null);
            setModalQuantity(1);
          }}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          addToCart={addToCart}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          modalQuantity={modalQuantity}
          setModalQuantity={setModalQuantity}
        />
      )}
    </div>
  );
};
