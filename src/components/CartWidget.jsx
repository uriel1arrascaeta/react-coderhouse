import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const { carrito } = useContext(CartContext);
  const cantidadCarrito = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  return (
    <div className="relative">
      <Link to="/carrito" className="text-white flex items-center">
        🛒
        <span
          className={`${
            cantidadCarrito > 0 ? "flex" : "hidden"
          } bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2`}
        >
          {cantidadCarrito}
        </span>
      </Link>
    </div>
  );
};

export default CartWidget;
