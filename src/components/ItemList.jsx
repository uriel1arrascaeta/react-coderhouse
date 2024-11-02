import PropTypes from "prop-types";
import { Item } from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Nuestros Cursos
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Los mejores cursos para vos
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((prod) => (
              <Item key={prod.id} productos={prod} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

ItemList.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titulo: PropTypes.string.isRequired,
    })
  ).isRequired,
};
