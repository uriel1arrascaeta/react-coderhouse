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
function App() {
  return (
    <>
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
