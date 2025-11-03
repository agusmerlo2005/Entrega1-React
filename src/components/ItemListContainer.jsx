import React from 'react';

// El componente recibe un objeto 'props' y desestructura la propiedad 'greeting'
const ItemListContainer = ({ greeting }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Catálogo de Productos</h2>
            {/* Muestra el mensaje de bienvenida usando la prop 'greeting' */}
            <p style={styles.greetingMessage}>
                ¡{greeting}
            </p>
            <p style={styles.secondaryText}>Aquí se listarán todos los productos del e-commerce. ¡Pronto los verás aquí!</p>

            {/* Puedes agregar un tag de imagen aquí si deseas ilustrar la sección */}
           
        </div>
    );
};

export default ItemListContainer;

// Estilos básicos en JavaScript (MODIFICADOS PARA ESTIRAR EL FONDO BLANCO)
const styles = {
    container: {
        textAlign: 'center',
        // Reducimos el padding vertical innecesario
        padding: '40px 0',
        backgroundColor: '#f8f8f8', 
        
        // --- CAMBIOS CLAVE AQUÍ ---
        minHeight: '400px', // Mantener como fallback, pero...
        height: '100%',     // <-- ¡Esto hace que se estire a la altura de su padre (<main>)!
        // Mantenemos estas propiedades para el ancho completo
        width: '100%',
        maxWidth: 'none',
        margin: 0,
        boxSizing: 'border-box',
        // ------------------------
    },
    title: {
        // Reducimos el tamaño de la fuente para más elegancia
        fontSize: '2.2rem',
        color: '#007bff',
        marginBottom: '10px',
        fontWeight: '600',
    },
    greetingMessage: {
        // Mejoramos el estilo visual para que parezca un banner de bienvenida
        fontSize: '1.2rem',
        fontWeight: '500', 
        color: '#004085', 
        marginTop: '30px',
        marginBottom: '40px',
        padding: '15px 25px',
       
        // El banner en sí
        width: '70%', 
        display: 'block', 
        margin: '0 auto 30px auto', 
       
        // Estilo de banner/alerta sutil
        border: '1px solid #b8daff', 
        backgroundColor: '#d6e9ff', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)', 
    },
    secondaryText: {
        fontSize: '1rem',
        color: '#6c757d', 
        marginBottom: '20px',
    }
};