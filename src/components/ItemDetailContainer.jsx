import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((resp) => {
      console.log(resp);
    });
  }, [id]);

  if (!item) {
    return <p>No se encontró el item</p>;
  }

  return <>{item && <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
