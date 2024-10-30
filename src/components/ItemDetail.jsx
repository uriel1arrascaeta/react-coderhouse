const ItemDetail = ({ item }) => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row items-center">
        <img
          src={item.imagen}
          alt={item.titulo}
          className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 lg:mb-0"
        />

        <div className="lg:ml-8 w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800">
            {item.titulo}
          </h2>
          <p className="text-sm text-blue-500 mt-1 uppercase">
            {item.categoria}
          </p>
          <p className="text-gray-500 mt-2 text-sm">{item.descripcion}</p>
          <div className="flex items-center mt-4">
            <span className="text-2xl font-bold text-gray-900">
              ${item.precio}
            </span>
          </div>
          <button className="mt-6 w-full lg:w-auto bg-primary text-white px-4 py-2 rounded-lg hover:bg-secundary">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
