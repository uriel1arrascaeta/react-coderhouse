import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cursos from "./components/Cursos";
import NewsLetter from "./components/NewsLetter";
import ItemDetailContainer from "./components/ItemDetailContainer";
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
                <Portfolio />
                <NewsLetter />
              </>
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/contacto" element={<NewsLetter />} />
        </Routes>
        <Footer />
        <ItemDetailContainer itemId={2} />
      </BrowserRouter>
    </>
  );
}

export default App;
