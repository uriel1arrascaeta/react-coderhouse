import PropTypes from "prop-types";

const ItemDetail = ({ item }) => {
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
          <button className="mt-6 w-full lg:w-auto bg-primary text-white px-4 py-2 rounded-lg hover:bg-">
            Agregar al carrito
          </button>
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
    precio: PropTypes.number,
  }).isRequired,
};

export default ItemDetail;
