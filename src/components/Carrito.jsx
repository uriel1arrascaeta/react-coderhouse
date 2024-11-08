import { useContext } from "react";
import { CartContext } from "./CartContext";

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const handlerVaciar = () => {
    setCarrito([]);
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tu Carrito</h2>

      {carrito.length === 0 ? (
        <p className="text-gray-600 text-center">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {carrito.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b border-gray-200"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {item.titulo}
                </h3>
                <p className="text-gray-500">Cantidad: {item.cantidad}</p>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                ${item.precio * item.cantidad}
              </p>
            </div>
          ))}

          <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <span className="text-xl font-semibold text-gray-800">Total:</span>
            <span className="text-xl font-bold text-primary">${total}</span>
          </div>

          <button className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-secundary-dark transition">
            pagar
          </button>
          <button
            onClick={handlerVaciar}
            className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-secundary transition mt-4"
          >
            vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
