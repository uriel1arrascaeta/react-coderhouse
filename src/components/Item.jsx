import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ productos }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h4 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          {productos.titulo}
        </h4>
        <p className="text-gray-600 mb-4 text-center">
          {productos.descripcion}
        </p>
        <p className="text-xl font-semibold text-gray-900 mb-4 text-center">
          ${productos.precio}
        </p>
        <Link to={`/item/${productos.id}`}>
          <button className="mt-auto w-full bg-primary text-white py-2 rounded-lg hover:bg-secundary">
            Ver Detalles
          </button>
        </Link>
      </div>
    </>
  );
};

Item.propTypes = {
  productos: PropTypes.shape({
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
    precio: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;
