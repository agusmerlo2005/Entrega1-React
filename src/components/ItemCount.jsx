import React, { useState } from 'react';
import '../App.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => count < stock && setCount(count + 1);
    const decrement = () => count > 1 && setCount(count - 1);

    return (
        <div className="counter-container">
            <div className="counter-controls">
                <button className="btn-count" onClick={decrement}>-</button>
                <span className="count-number">{count}</span>
                <button className="btn-count" onClick={increment}>+</button>
            </div>
            <button 
                className="btn-add-cart" 
                onClick={() => onAdd(count)}
                disabled={stock === 0}
            >
                {stock === 0 ? 'Sin Stock' : 'Agregar al carrito'}
            </button>
        </div>
    );
};

export default ItemCount;
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        maxWidth: '300px',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    button: {
        padding: '10px 15px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    },
    count: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        minWidth: '30px',
        textAlign: 'center',
    },
    addButton: {
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        width: '100%',
        transition: 'background-color 0.3s',
    }
};