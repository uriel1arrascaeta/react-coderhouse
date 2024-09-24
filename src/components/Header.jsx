import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
        <div className="xl:w-1/6 text-center -mt-4">
          <a href="#" className="text-2xl font-bold relative p-1 bg-white">
            SAMTHER <span className="text-primary text-5xl">.</span>{" "}
            <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
          </a>
        </div>
        <nav
          className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
            showMenu ? "left-0" : "-left-full"
          } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
        >
          <a href="#">Inicio</a>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
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

export default Header;
