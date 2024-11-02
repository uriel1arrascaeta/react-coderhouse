import { useEffect, useState } from "react";
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams(); // Obtiene el id de los parámetros de la URL

  useEffect(() => {
    pedirItemPorId(Number(id)).then((res) => {
      setItem(res);
    });
  }, [id]);

  if (!item) {
    return <p>No se encontró el item</p>;
  }

  return <>{item && <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
