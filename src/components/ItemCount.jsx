import PropTypes from "prop-types";

const ItemCount = ({ cantidad, handleRestar, handleSumar }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={handleRestar}
          className="w-10 h-10 bg-primary text-white rounded-full shadow-md hover:bg-secundary focus:outline-none focus:ring-2 focus:ring-secundary transition duration-200"
        >
          -
        </button>
        <span className="text-xl font-semibold">{cantidad}</span>
        <button
          onClick={handleSumar}
          className="w-10 h-10 bg-primary text-white rounded-full shadow-md hover:bg-secundary focus:outline-none focus:ring-2 focus:ring-secundary transition duration-200"
        >
          +
        </button>
      </div>
      <button className="w-full lg:w-auto bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-secundary focus:outline-none focus:ring-2 focus:ring-secundary transition duration-200">
        Agregar al carrito
      </button>
    </div>
  );
};

ItemCount.propTypes = {
  cantidad: PropTypes.number.isRequired,
  handleRestar: PropTypes.func.isRequired,
  handleSumar: PropTypes.func.isRequired,
};

export default ItemCount;
