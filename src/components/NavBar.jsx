import React from 'react';
import CartWidget from './CartWidget'; // Importa el componente del carrito

const NavBar = () => {
    return (
        <nav style={styles.navBar}>
            {/* Logo de la tienda */}
            <div style={styles.logo}>
                <a href="/" style={styles.logoLink}>Mi Tienda Online</a>
            </div>

            {/* Enlaces de navegación */}
            <ul style={styles.navList}>
                <li><a href="#categoria1" style={styles.navLink}>Tecnología</a></li>
                <li><a href="#categoria2" style={styles.navLink}>Hogar</a></li>
                <li><a href="#ofertas" style={styles.navLink}>Ofertas</a></li>
                <li><a href="#contacto" style={styles.navLink}>Contacto</a></li>
            </ul>

            {/* Widget del Carrito de Compras */}
            <CartWidget />
        </nav>
    );
};

export default NavBar;

// Estilos básicos en JavaScript (MODIFICADOS PARA ESTÉTICA Y RESPONSIVE)
const styles = {
    // ESTILOS DE ESCRITORIO (Base)
    navBar: {
        display: 'flex',
        // Cambiamos a 'space-between' para un espaciado más limpio
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: '#1f242d', // Un negro más profundo
        padding: '15px 30px', // Hacemos la barra más alta y con buen relleno lateral
        color: 'white',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', // Sombra para que flote

        // Simulamos un Media Query simple (solo se aplicaría si usáramos un hook)
        // Por la limitación de CSS-in-JS puro, lo mantenemos horizontal,
        // pero ajustamos el espaciado para que no se rompa en móvil.
    },
    logo: {
        fontSize: '2rem', // Hacemos el logo más grande
        fontWeight: '700',
    },
    logoLink: {
        color: 'white',
        textDecoration: 'none',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        // Reducimos el espaciado para que quepa en pantallas pequeñas si no hay media query
        gap: '20px', 
        padding: 0,
        // Esto empuja la lista ligeramente a la izquierda en pantallas grandes
        flexGrow: 1, 
        justifyContent: 'center', 
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        padding: '5px 0',
        transition: 'color 0.3s, border-bottom 0.3s',
    },
};