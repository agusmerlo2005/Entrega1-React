import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from './ItemList'; 
import '../App.css';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        // 1. Referencia a la colección 'items' en Firestore
        const itemsCollection = collection(db, "items");

        // 2. Filtro por categoría si existe en la URL
        const q = categoryId 
            ? query(itemsCollection, where("categoryId", "==", categoryId))
            : itemsCollection;

        // 3. Petición a Firebase
        getDocs(q)
            .then((snapshot) => {
                const docs = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setItems(docs);
            })
            .catch(error => console.error("Error al obtener productos:", error))
            .finally(() => setLoading(false));
            
    }, [categoryId]); 

    return (
        <div className="catalog-container">
            <h2 className="catalog-title">
                {categoryId ? categoryId.toUpperCase() : "NUESTRO CATÁLOGO"}
            </h2>
            
            {loading ? (
                <p className="loading-text">CARGANDO PRODUCTOS...</p>
            ) : (
                <ItemList items={items} />
            )}
        </div>
    );
};

export default ItemListContainer;
// ----------------------------------
// ESTILOS ADICIONALES PARA LA LISTA
// ----------------------------------
const styles = {
    // ... (El resto de los estilos del container, title, etc., permanecen igual)
container: {
        textAlign: 'center',
        padding: '40px 0',
        backgroundColor: '#f8f8f8', 
        minHeight: '400px', 
        height: '100%', 
        width: '100%',
        maxWidth: 'none',
        margin: 0,
        boxSizing: 'border-box',
},
title: {
        fontSize: '2.2rem',
        color: '#007bff',
        marginBottom: '10px',
        fontWeight: '600',
},
greetingMessage: {
        fontSize: '1.2rem',
        fontWeight: '500', 
        color: '#004085', 
        marginTop: '30px',
        marginBottom: '40px',
        padding: '15px 25px',
        width: '70%', 
        display: 'block', 
        margin: '0 auto 30px auto', 
        border: '1px solid #b8daff', 
        backgroundColor: '#d6e9ff', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)', 
},
secondaryText: {
        fontSize: '1rem',
        color: '#6c757d', 
        marginBottom: '20px',
},

    // --- ESTILOS DE LA LISTA DE PRODUCTOS ---
itemList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px', // Espacio entre las tarjetas
        padding: '20px',
},
itemCardLink: {
        textDecoration: 'none', // Quitar subrayado del Link
        color: 'inherit',
},
itemCard: {
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        width: '280px', // Ancho fijo para las tarjetas
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        textAlign: 'left',
},
itemName: {
        fontSize: '1.5rem',
        color: '#333',
        marginBottom: '10px',
},
itemDescription: {
        fontSize: '0.9rem',
        color: '#666',
        marginBottom: '10px',
        height: '40px', // Altura fija para la descripción
        overflow: 'hidden',
},
itemPrice: {
        fontSize: '1.2rem',
        color: '#28a745',
        fontWeight: '700',
        marginBottom: '5px',
},
itemStock: {
        fontSize: '0.8rem',
        color: '#ffc107',
        fontWeight: '600',
},
};