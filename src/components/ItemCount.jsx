import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.controls}>
                <button onClick={decrement} disabled={count === initial} style={styles.button}>-</button>
                <span style={styles.count}>{count}</span>
                <button onClick={increment} disabled={count === stock} style={styles.button}>+</button>
            </div>
            <button onClick={() => onAdd(count)} disabled={stock === 0} style={styles.addButton}>
                {stock > 0 ? "Agregar al carrito" : "Sin Stock"}
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