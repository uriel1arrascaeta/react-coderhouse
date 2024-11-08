import PropTypes from "prop-types";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const stockDisponible = item.stock || 0;

  const { carrito, handleAgregar } = useContext(CartContext);
  console.log(carrito);

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleSumar = () => {
    if (cantidad < stockDisponible) {
      setCantidad(cantidad + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:ml-8 w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800">
            {item.titulo}
          </h2>
          <p className="text-sm text-primary mt-1 uppercase">
            {item.categoria}
          </p>
          <p className="text-gray-500 mt-2 text-sm">{item.descripcion}</p>
          <div className="flex items-center mt-4">
            <span className="text-2xl font-bold text-gray-900">
              ${item.precio}
            </span>
          </div>
          <ItemCount
            cantidad={cantidad}
            handleRestar={handleRestar}
            handleSumar={handleSumar}
            handleAgregar={() => {
              handleAgregar(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    categoria: PropTypes.string,
    descripcion: PropTypes.string,
    precio: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemDetail;
