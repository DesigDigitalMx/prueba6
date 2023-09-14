import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import logo from "../logo-mrtigre.png";
import { isLocalOpen } from "./helpers";
import Contacto from "./Contacto";
import Login from "./Login";
import Mesero from "./Mesero";
import { client } from "./Client";
import App from "../App.jsx";

export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
  onPageClick,
  cartProducts,
  setCartProducts,
  shippingCost,
  setShippingCost,
  toggleDarkMode,
  isDarkMode,
  loggedIn,
  onLogout,
}) => {
  const [active, setActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedTable, setSelectedTable] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  // const handleAddToCart = (product) => {
  //   const productoExistente = cartProducts.find(
  //     (item) => item.titulo === product.titulo
  //   );

  //   if (productoExistente) {
  //     productoExistente.quantity += 1;
  //     setCartProducts([...cartProducts]);
  //   } else {
  //     const nuevoProducto = {
  //       ...product,
  //       quantity: 1,
  //     };
  //     setCartProducts([...cartProducts, nuevoProducto]);
  //   }

  //   setTotal((totalAnterior) => totalAnterior + product.precio);
  //   setCountProducts((cantidadAnterior) => cantidadAnterior + 1);
  // };

  const removeFromCart = (product) => {
    setCartProducts((prevCart) =>
      prevCart.filter((item) => item.sys.id !== product.sys.id)
    );
    setTotal(
      (prevTotal) => prevTotal - product.fields.precio * product.quantity
    );
    setCountProducts((prevCount) => prevCount - product.quantity);
  };

  const handleOptionChange = async (e) => {
    const newSelectedOption = e.target.value;

    setSelectedOption(newSelectedOption);

    try {
      // Obtener el costo de envío desde Contentful
      const response = await client.getEntry("3lumYgEyv4xylZWHMcKZOr");
      const costoDeEnvio = response.fields.costoDeEnvio;

      if (newSelectedOption === "llevar-domicilio") {
        // Actualizar el costo de envío solo si la opción es "llevar-domicilio"
        setShippingCost(costoDeEnvio);
      } else {
        // Establecer el costo de envío en cero para otras opciones
        setShippingCost(0);
      }
    } catch (error) {
      console.error("Error al obtener el costo de envío:", error);
    }
  };

  const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
  };

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleCustomerPhoneChange = (e) => {
    setCustomerPhone(e.target.value);
  };

  const handleCustomerAddressChange = (e) => {
    setCustomerAddress(e.target.value);
  };

  const handleOrderSubmit = () => {
    if (!selectedOption) {
      alert("Por favor, seleccione una opcion de retiro.");
      return;
    }

    const saludo = "¡Hola! Me gustaría realizar el siguiente pedido:\n\n";

    // Generamos el mensaje del pedido con los productos del carrito
    const listaProductos = cartProducts.map(
      (product) =>
        `*${product.fields.titulo}* - Cant: ${product.quantity} - Precio: $${
          product.fields.precio * product.quantity
        }\n${product.note ? `Nota: ${product.note}` : ""}`
    );

    const mensajePedido = listaProductos.join("\n");

    // Generar la sección de la opción seleccionada por el cliente
    let opcionSeleccionada = "";
    if (selectedOption === "llevar-mesa") {
      opcionSeleccionada = `*Opción:* Llevar a mesa - Mesa: ${selectedTable}`;
    } else if (selectedOption === "retiro-local") {
      opcionSeleccionada =
        "*Opción:* Retiro en local\nNombre y apellido: " + customerName;
    } else if (selectedOption === "llevar-domicilio") {
      opcionSeleccionada = `*Opción:* Llevar a domicilio\nNombre y apellido: ${customerName}\nDirección: ${customerAddress}\nNúmero de teléfono: ${customerPhone}`;
    }

    const mensajeCompleto =
      saludo +
      mensajePedido +
      `\n\n${opcionSeleccionada}\n\nSubtotal: $${total}\n*Total: $${
        total + shippingCost
      }*`;

    // Generar la URL para abrir WhatsApp con el número y mensaje predeterminado
    const numeroWhatsapp = "+528999840089";
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensajeCompleto
    )}`;

    // Abrir la URL en una nueva ventana o redirigir al usuario a la aplicación de WhatsApp
    window.open(urlWhatsapp, "_blank");
  };

  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const handleToggleMenu = () => {
    toggleMenu();
  };

  const handleMenuItemClick = () => {
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !menuRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div
        className={`toggle ${isActive ? "active" : ""}`}
        onClick={handleToggleMenu}
        ref={toggleRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <img
        className="logo"
        onClick={() => onPageClick("menu")}
        src={logo}
        alt="logo"
      />

      <nav
        className={`navbar-menu ${isActive ? "show-menu" : ""}`}
        ref={menuRef}
      >
        <a
          href="#"
          onClick={() => {
            handleMenuItemClick();
            onPageClick("menu");
          }}
        >
          Menú
        </a>

        <a
          href="#"
          onClick={() => {
            handleMenuItemClick();
            onPageClick("contacto");
          }}
        >
          Contácto
        </a>

        <a
          href="#"
          onClick={() => {
            handleMenuItemClick();
            if (loggedIn) {
              onLogout(); // Llamada a la función de cierre de sesión
            } else {
              onPageClick("login");
            }
          }}
        >
          {loggedIn ? "Cerrar sesión" : "Login"}
        </a>
      </nav>

      <button className="theme-toggle-button" onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>

      <div className="container-icon">
        <div
          className={`container-cart-icon ${isLocalOpen() ? "" : "disabled"}`}
          onClick={() => setActive(!active)}
        >
          <FaShoppingCart className="cart-icon" />
          <div className="count-products">
            {/* <span id="contador-productos">{countProducts}</span> */}
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>

        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {cartProducts.length ? (
            <>
              <div className="row-product">
                {cartProducts.map((product) => (
                  <div className="cart-product" key={product.sys.id}>
                    {/* <div className="info-cart-product">
                      <div className="img-content-cart">
                        <img
                          src={product.fields.imagen.fields.file.url}
                          alt={product.fields.titulo}
                        />
                      </div>
                      <div className="flex-cart-product-top">
                        <p className="titulo-producto-carrito">
                          {product.fields.titulo}
                        </p>
                        <p className="nota-producto-carrito">
                          {product.note && `Nota: ${product.note}`}
                        </p>
                        <div className="flex-cart-product">
                          <span className="cantidad-producto-carrito">
                            <p>Cant: {product.quantity}</p>
                          </span>
                          <span className="precio-producto-carrito">
                            ${product.fields.precio}
                          </span>
                        </div>
                      </div>
                    </div> */}
                    <div className="info-cart-product">
                      <div className="img-content-cart">
                        <img
                          src={
                            product.fields.imagenPromocion &&
                            product.fields.imagenPromocion.fields.file.url
                              ? product.fields.imagenPromocion.fields.file.url
                              : product.fields.imagen &&
                                product.fields.imagen.fields.file.url
                          }
                          alt={
                            product.fields.tituloPromocion
                              ? product.fields.tituloPromocion
                              : product.fields.titulo
                          }
                        />
                      </div>
                      <div className="flex-cart-product-top">
                        <p className="titulo-producto-carrito">
                          {product.fields.tituloPromocion
                            ? product.fields.tituloPromocion
                            : product.fields.titulo}
                        </p>
                        <p className="nota-producto-carrito">
                          {product.noteCarousel
                            ? `Nota: ${product.noteCarousel}`
                            : product.note
                            ? `Nota: ${product.note}`
                            : ""}
                        </p>
                        <div className="flex-cart-product">
                          <span className="cantidad-producto-carrito">
                            <p>Cant: {product.quantity}</p>
                          </span>
                          <span className="precio-producto-carrito">
                            $
                            {product.fields.precioPromocion
                              ? product.fields.precioPromocion
                              : product.fields.precio}
                          </span>
                        </div>
                      </div>
                    </div>

                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="icon-close"
                      onClick={() => removeFromCart(product)} // Llamamos a la función removeFromCart al hacer clic en el botón de eliminar
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="checkout-section">
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="select-input"
                >
                  <option value="" disabled>
                    Seleccione opción de retiro
                  </option>
                  <option value="llevar-mesa">Llevar a mesa</option>
                  <option value="retiro-local">Retiro local</option>
                  <option value="llevar-domicilio">Llevar a domicilio</option>
                </select>

                {selectedOption === "llevar-mesa" && (
                  <select
                    value={selectedTable}
                    onChange={handleTableChange}
                    className="select-input-mesa"
                  >
                    <option value="" disabled>
                      Seleccione mesa
                    </option>
                    <option value="1">Mesa 1</option>
                    <option value="2">Mesa 2</option>
                    <option value="3">Mesa 3</option>
                    <option value="4">Mesa 4</option>
                  </select>
                )}

                {selectedOption === "retiro-local" && (
                  <div className="select-retiro-local">
                    <label htmlFor="customerName" className="label-text">
                      Nombre y Apellido:
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      value={customerName}
                      onChange={handleCustomerNameChange}
                      className="input-text"
                      placeholder="Nombre y apellido"
                    />
                  </div>
                )}

                {selectedOption === "llevar-domicilio" && (
                  <>
                    <div>
                      <label htmlFor="customerName" className="label-text">
                        Nombre y Apellido:
                      </label>
                      <input
                        type="text"
                        id="customerName"
                        value={customerName}
                        onChange={handleCustomerNameChange}
                        className="input-text"
                        placeholder="Nombre y apellido"
                      />
                    </div>
                    <div>
                      <label htmlFor="customerPhone" className="label-text">
                        Número de teléfono:
                      </label>
                      <input
                        type="text"
                        id="customerPhone"
                        value={customerPhone}
                        onChange={handleCustomerPhoneChange}
                        className="input-text"
                        placeholder="Número de teléfono"
                      />
                    </div>
                    <div>
                      <label htmlFor="customerAddress" className="label-text">
                        Dirección:
                      </label>
                      <input
                        type="text"
                        id="customerAddress"
                        value={customerAddress}
                        onChange={handleCustomerAddressChange}
                        className="input-text"
                        placeholder="Dirección"
                      />
                    </div>
                    <div className="shipping-cost">
                      El costo del envío es de ${shippingCost}.
                    </div>
                  </>
                )}
              </div>

              <div className="cart-subtotal">
                <h3>Subtotal:</h3>
                <span className="subtotal">${total}</span>
              </div>

              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">
                  {selectedOption === "llevar-domicilio"
                    ? total + shippingCost
                    : total}
                </span>
              </div>

              <button className="btn-pedido" onClick={handleOrderSubmit}>
                <FaWhatsapp className="whatsapp-icon" /> Realizar Pedido
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
