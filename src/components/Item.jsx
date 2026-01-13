import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, description, price, stock }) => {
    return (
        <Link to={`/item/${id}`} className="card-link">
            <div className="product-card">
                <h3 className="product-name">{name}</h3>
                <p className="product-desc">{description}</p>
                <p className="product-price">$ {price}</p>
                <span className="product-stock">Stock: {stock}</span>
            </div>
        </Link>
    );
};

export default Item;