import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import '../App.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // Referencia al documento específico en la colección "items"
    const queryDoc = doc(db, "items", id); 

    getDoc(queryDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2 className="loading-text">CARGANDO DETALLE...</h2>;
  if (!item) return <h2 className="catalog-title">Producto no encontrado</h2>;

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

const styles = {
  container: { display: "flex", justifyContent: "center", padding: "40px" },
  card: { background: "#fff", padding: "30px", borderRadius: "10px", width: "100%", maxWidth: "600px", boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
};