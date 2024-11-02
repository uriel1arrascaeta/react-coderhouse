import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
        <div className="xl:w-1/6 text-center -mt-4">
          <Link to="/" className="text-2xl font-bold relative p-1 bg-white">
            S H I N R Y U <span className="text-primary text-5xl">.</span>{" "}
            <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
          </Link>
        </div>
        <nav
          className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
            showMenu ? "left-0" : "-left-full"
          } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
        >
          <Link to="/">Inicio</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/">Servicios</Link>
          <Link to="/sobre-nosotros" className="nav-link">
            Sobre Nosotros
          </Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="xl:hidden text-2xl p-2"
        >
          {showMenu ? <IoClose /> : <IoMenu />}
        </button>
      </header>
    </>
  );
};

export default Navbar;
