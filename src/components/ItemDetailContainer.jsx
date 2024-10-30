import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    pedirItemPorId(itemId).then((res) => {
      setItem(res);
    });
  }, [itemId]);

  if (!item) {
    return <p>No se encontró el item</p>;
  }

  return <div>{item && <ItemDetail item={item} />}</div>;
};

ItemDetailContainer.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ItemDetailContainer;
