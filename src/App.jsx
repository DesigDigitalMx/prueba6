import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Componentes/Header";
import Carousel from "./Componentes/Carousel";
import Contacto from "./Componentes/Contacto";
import Login from "./Componentes/Login";
import Iconosmenu from "./Componentes/IconosMenu";
import Mesero from "./Componentes/Mesero";
// import Pedido from "./Componentes/MeseroOpciones/Pedido";
// import Mesas from "./Componentes/MeseroOpciones/Mesas";
// import Productos from "./Componentes/MeseroOpciones/Productos";
import Loader from "./Componentes/Loader";
import { ProductList } from "./Componentes/ProductList";
import { client } from "./Componentes/Client";
// import { isLocalOpen } from "./Componentes/helpers";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("platillos");
  const [activePage, setActivePage] = useState("home");
  const [cartProducts, setCartProducts] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("mesas");
  const [isMesero, setIsMesero] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    setActivePage("mesero");
    setIsMesero(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setActivePage("login");
  };

  useEffect(() => {
    const savedLoggedInStatus = localStorage.getItem("isLoggedIn");
    if (savedLoggedInStatus === "true") {
      setLoggedIn(true);
      setActivePage("mesero");
    }
  }, []);

  const handleMesaClick = (mesa) => {
    handleTableSelect(mesa); // Establecer la mesa seleccionada
    setActivePage("mesero"); // Cambiar a la página de Mesero
  };

  const handleTableSelect = (tableNumber) => {
    setSelectedTable(tableNumber || null); // Si tableNumber es undefined, asigna null
    setSelectedProducts([]); // Restablece los productos seleccionados al cambiar de mesa
  };

  const handleProductSelect = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const styleSpan = {
    color: "#ff8800",
    fontFamily: "'Smooch', cursive",
    fontSize: "3rem",
    marginLeft: "0.5rem",
    fontWeight: "600",
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const setModalProduct = (product) => {
    // Lógica para setear el producto modal
  };

  const setModalQuantity = (quantity) => {
    // Lógica para setear la cantidad modal
  };

  const showAlert = () => {
    // Lógica para mostrar la alerta
  };

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setAllProducts(response.items);
        // Establecer la categoría seleccionada como la primera categoría con orden 1
        const firstCategoryWithOrder1 = response.items.find(
          (item) => item.fields.order === 1
        );
        if (firstCategoryWithOrder1) {
          setSelectedCategory(firstCategoryWithOrder1.fields.tituloCategoria);
        }
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const filteredAllProducts = allProducts.filter((item) => {
    return (
      item.fields.tituloPromocion && // Verifica que el título no esté vacío o indefinido
      item.fields.descripcionPromocion && // Verifica que la descripción no esté vacía o indefinida
      item.fields.imagenPromocion && // Verifica que la imagen no esté vacía o indefinida
      item.fields.precioPromocion // Verifica que el precio no esté vacío o indefinido
    );
  });

  // Renderiza la página correspondiente según el estado `activePage`
  const renderPage = () => {
    if (loggedIn) {
      return <Mesero selectedTable={selectedTable} />;
    }
    switch (activePage) {
      case "contacto":
        return <Contacto />;
      case "login":
        return <Login onLogin={handleLogin} />;
      default:
        return (
          <>
            <div className="container_promocion">
              <h2 className="titulo-menu">
                Nuestras <span style={styleSpan}>Promociones</span>
              </h2>
            </div>
            <Carousel
              items={filteredAllProducts}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              selectedCategory={selectedCategory}
              setModalProduct={setModalProduct}
              setModalQuantity={setModalQuantity}
              showAlert={showAlert}
            />
            <div className="container_menu">
              <h2 className="titulo-menu">
                Ordene <span style={styleSpan}>Aquí</span>
              </h2>

              <Iconosmenu
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryClick}
              />
            </div>

            <ProductList
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              selectedCategory={selectedCategory}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              setModalProduct={setModalProduct}
              setModalQuantity={setModalQuantity}
              showAlert={showAlert}
            />
          </>
        );
    }
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      {loading ? ( // Renderiza el Loader si está cargando
        <Loader />
      ) : (
        <>
          <Header
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            onPageClick={handlePageClick}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            shippingCost={shippingCost}
            setShippingCost={setShippingCost}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
            loggedIn={loggedIn}
            onLogout={handleLogout}
          />

          {renderPage()}
        </>
      )}
    </div>
  );
}

export default App;
