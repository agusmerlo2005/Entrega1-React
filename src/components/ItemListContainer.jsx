import React, { useState, useEffect } from 'react';
// [NUEVO] Importamos useParams para leer el parámetro de la URL
import { useParams, Link } from 'react-router-dom'; 

// --- SIMULACIÓN DE DATOS Y FUNCIÓN ASÍNCRONA ---
const products = [
        { id: 1, name: 'Laptop Pro X', description: 'Potente laptop para profesionales.', price: 1200, categoryId: 'tecnologia', stock: 5 },
        { id: 2, name: 'Televisor QLED 55"', description: 'Televisor 4K con colores vibrantes.', price: 750, categoryId: 'hogar', stock: 3 },
        { id: 3, name: 'Smartwatch Ultra', description: 'Reloj inteligente con GPS.', price: 250, categoryId: 'tecnologia', stock: 12 },
        { id: 4, name: 'Robot Aspirador Pro', description: 'Limpieza automática inteligente.', price: 300, categoryId: 'hogar', stock: 8 },
        { id: 5, name: 'Cámara Mirrorless A1', description: 'Cámara profesional de alta velocidad.', price: 1500, categoryId: 'tecnologia', stock: 2 },
        { id: 6, name: 'Auriculares Inalámbricos', description: 'Sonido HD con cancelación de ruido.', price: 150, categoryId: 'tecnologia', stock: 20 },
        { id: 7, name: 'Set de Ollas Premium', description: 'Juego de ollas de acero inoxidable.', price: 180, categoryId: 'hogar', stock: 15 },
        { id: 8, name: 'Consola Retro 4K', description: 'Juegos clásicos con gráficos modernos.', price: 90, categoryId: 'ofertas', stock: 10 },
];

const getProducts = (categoryId) => {
        return new Promise((resolve) => {
        setTimeout(() => {
                if (categoryId) {
                const filteredProducts = products.filter(prod => prod.categoryId === categoryId);
                resolve(filteredProducts);
                } else {
                resolve(products);
                }
        }, 1500); // Retraso de 1.5s
        });
};
// ------------------------------------------------

const ItemListContainer = ({ greeting }) => {
    // [NUEVO] Estado para almacenar la lista de productos
        const [items, setItems] = useState([]);
    // [NUEVO] Estado para mostrar un indicador de carga
        const [loading, setLoading] = useState(true); 

    // [NUEVO] Hook para leer el parámetro categoryId de la URL
const { categoryId } = useParams();

    // Hook para ejecutar la carga de datos al inicio y cuando categoryId cambia
useEffect(() => {
        // 1. Inicializa el estado de carga y limpia los items anteriores
        setLoading(true);
        setItems([]);
        
        // 2. Llama a la promesa, pasando el categoryId (que será undefined en la ruta "/")
        getProducts(categoryId)
.then(data => {
                // 3. Cuando la promesa resuelve, guarda los datos
                setItems(data);
        })
        .catch(error => {
                console.error("Error al cargar los productos:", error);
        })
        .finally(() => {
                // 4. Detiene el indicador de carga
                setLoading(false);
        });

        // [IMPORTANTE] El array de dependencias. Re-ejecuta el efecto si categoryId cambia.
}, [categoryId]); 

    // Determina el título que se muestra
const displayTitle = categoryId 
        ? `Productos en ${categoryId.toUpperCase()}`
        : 'Catálogo Completo';

return (
        <div style={styles.container}>
        <h2 style={styles.title}>{displayTitle}</h2>
        
            {/* Mensaje de bienvenida (solo para la ruta principal) */}
        {!categoryId && (
                <p style={styles.greetingMessage}>
                ¡{greeting}
                </p>
        )}

            {/* Muestra el indicador de carga si loading es true */}
        {loading ? (
                <p style={styles.secondaryText}>Cargando productos...</p>
        ) : (
                // Muestra la lista de productos si loading es false
                <div style={styles.itemList}>
                {items.length > 0 ? (
                        items.map(item => (
                            // [REQUISITO] Usamos Array.map() y la prop "key"
                            // [NUEVO] Usamos <Link> para ir a la vista detalle
                        <Link to={`/item/${item.id}`} key={item.id} style={styles.itemCardLink}>
                                <div style={styles.itemCard}>
                                <h3 style={styles.itemName}>{item.name}</h3>
                                <p style={styles.itemDescription}>{item.description}</p>
                                <p style={styles.itemPrice}>$ {item.price}</p>
                                <p style={styles.itemStock}>Stock: {item.stock}</p>
                                    {/* Aquí podrías agregar el ItemCount para pre-visualización */}
                                </div>
                        </Link>
                        ))
                ) : (
                        <p style={styles.secondaryText}>No hay productos disponibles en esta categoría.</p>
                )}
                </div>
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