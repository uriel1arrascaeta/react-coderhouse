import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    getDocs(productosRef).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          const data = doc.data();
          return { ...data, id: Number(doc.id) };
        })
      );
    });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
