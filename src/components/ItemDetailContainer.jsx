import React, { useState, useEffect } from 'react';
// [NUEVO] Importamos useParams para obtener el ID del producto de la URL
import { useParams } from 'react-router-dom'; 
import ItemCount from './ItemCount'; // Asumimos que ItemCount existe en 'components'

// --- SIMULACIÓN DE DATOS Y FUNCIÓN ASÍNCRONA ---
// (Mismos productos que en ItemListContainer, necesarios aquí para simular la BD)
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

// Función asíncrona que simula la búsqueda de un solo producto por ID
const getItem = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Busca el producto por ID, asegurando que el ID sea numérico
            const product = products.find(prod => prod.id === parseInt(id));
            if (product) {
                resolve(product);
            } else {
                reject(new Error("Producto no encontrado."));
            }
        }, 1000); // 1.0 segundo de retraso
    });
};
// ------------------------------------------------

const ItemDetailContainer = () => {
    // [NUEVO] Estado para almacenar el producto
    const [item, setItem] = useState(null);
    // [NUEVO] Estado para mostrar un indicador de carga
    const [loading, setLoading] = useState(true);

    // [NUEVO] Hook para obtener el ID del producto de la URL (ej: /item/5 -> id: '5')
    const { id } = useParams();

    // Función que se ejecuta cada vez que el 'id' de la URL cambia
    useEffect(() => {
        setLoading(true);
        setItem(null); // Limpiamos el item anterior

        // Llama a la promesa con el ID obtenido de la URL
        getItem(id)
            .then(productData => {
                setItem(productData);
            })
            .catch(error => {
                console.error("Error al cargar el detalle del producto:", error);
                // Aquí podrías redirigir a un 404 o mostrar un mensaje de error
            })
            .finally(() => {
                setLoading(false);
            });

        // [IMPORTANTE] Dependencia: el efecto se re-ejecuta si el 'id' de la URL cambia.
    }, [id]); 


    // --- RENDERING CONDICIONAL ---

    if (loading) {
        return <div style={styles.container}><h2 style={styles.title}>Cargando detalle del producto...</h2></div>;
    }

    if (!item) {
        return <div style={styles.container}><h2 style={styles.title}>El producto solicitado no existe.</h2></div>;
    }

    // Si el producto existe, muestra el detalle (simulando un ItemDetail)
    return (
        <div style={styles.container}>
            <div style={styles.detailCard}>
                <h2 style={styles.itemName}>{item.name}</h2>
                <p style={styles.category}>Categoría: {item.categoryId.toUpperCase()}</p>
                <p style={styles.description}>{item.description}</p>
                
                <div style={styles.infoRow}>
                    <span style={styles.price}>Precio: $ {item.price}</span>
                    <span style={styles.stock}>Stock disponible: {item.stock}</span>
                </div>
                
                <hr style={{margin: '20px 0'}} />
                
                {/* [REQUISITO] Interfaz para agregar unidades (ItemCount) */}
                <h3 style={styles.addToCartTitle}>Agregar al Carrito</h3>
                {item.stock > 0 ? (
                    <ItemCount initial={1} stock={item.stock} onAdd={(count) => console.log(`Agregado al carrito: ${count} unidades de ${item.name}`)} />
                ) : (
                    <p style={{color: 'red', fontWeight: 'bold'}}>¡Sin Stock!</p>
                )}

            </div>
        </div>
    );
};

export default ItemDetailContainer;

// ----------------------------------
// ESTILOS DEL DETALLE DEL PRODUCTO
// ----------------------------------
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '50px 20px',
        minHeight: '80vh',
        backgroundColor: '#f4f4f9', 
    },
    detailCard: {
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
        padding: '40px',
        maxWidth: '700px',
        width: '100%',
        textAlign: 'left',
    },
    itemName: {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '10px',
    },
    category: {
        fontSize: '1rem',
        color: '#007bff',
        fontWeight: 'bold',
        marginBottom: '20px',
        borderBottom: '2px solid #007bff',
        paddingBottom: '5px',
        display: 'inline-block',
    },
    description: {
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '30px',
    },
    infoRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        padding: '10px 0',
    },
    price: {
        fontSize: '1.8rem',
        color: '#28a745',
        fontWeight: '700',
    },
    stock: {
        fontSize: '1.2rem',
        color: '#ffc107',
        fontWeight: '600',
        padding: '5px 10px',
        backgroundColor: '#fffbe6',
        borderRadius: '5px',
    },
    addToCartTitle: {
        fontSize: '1.5rem',
        color: '#333',
        marginBottom: '15px',
    }
};