import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addToCart } = useCart();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addToCart(item, quantity);
  };

  return (
    <div className="detail-container">
      <div className="detail-card">
        <h2 className="detail-name">{item.name}</h2>
        <p className="detail-description">{item.description}</p>
        <p className="detail-price">${item.price}</p>
        <span className="product-stock">Disponibles: {item.stock}</span>

        <div className="counter-wrapper">
          {goToCart ? (
            <Link to="/cart" className="btn-add-cart" style={{textDecoration: 'none', display: 'inline-block'}}>
              Terminar mi compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;