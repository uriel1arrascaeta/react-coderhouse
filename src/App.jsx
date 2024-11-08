import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsLetter from "./components/NewsLetter";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import AboutUs from "./components/AboutUs";
import { CartContext } from "./components/CartContext";
import { useState } from "react";
import Carrito from "./components/Carrito";
function App() {
  const [carrito, setCarrito] = useState([]);

  const handleAgregar = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...carrito];

    const estaenelCarrito = nuevoCarrito.find(
      (productos) => productos.id === itemAgregado.id
    );

    if (estaenelCarrito) {
      estaenelCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
      setCarrito([...carrito, itemAgregado]);
    }
    setCarrito(nuevoCarrito);

    setCarrito([...carrito, itemAgregado]);
  };

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };
  return (
    <>
      <CartContext.Provider
        value={{ carrito, setCarrito, handleAgregar, cantidadCarrito }}
      >
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <AboutUs />
                  <Portfolio />
                  <NewsLetter />
                </>
              }
            />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cursos" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/contacto" element={<NewsLetter />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
