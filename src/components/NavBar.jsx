import React from 'react';
// [NUEVO] Importamos el componente Link para la navegación SPA
import { Link } from 'react-router-dom'; 

import CartWidget from './CartWidget'; // Importa el componente del carrito

const NavBar = () => {
    // Definimos las categorías que queremos mostrar y que coinciden con la ruta /category/:categoryId
    const categories = [
        { name: "Tecnología", id: "tecnologia" },
        { name: "Hogar", id: "hogar" },
        // Mantenemos "Ofertas" como una categoría, aunque puedes cambiarle el id si quieres.
        { name: "Ofertas", id: "ofertas" }, 
    ];

    return (
        <nav style={styles.navBar}>
            {/* Logo de la tienda */}
            <div style={styles.logo}>
                {/* [MODIFICADO] Usamos <Link to="/"> para ir al catálogo principal */}
                <Link to="/" style={styles.logoLink}>Mi Tienda Online</Link>
            </div>

            {/* Enlaces de navegación */}
            <ul style={styles.navList}>
                {/* Usamos el método map() para generar los enlaces de categoría dinámicamente */}
                {categories.map((cat) => (
                    <li key={cat.id}>
                        {/* [MODIFICADO] Usamos <Link to="..."> */}
                        {/* La ruta es /category/ seguido del ID de la categoría (ej: /category/tecnologia) */}
                        <Link to={`/category/${cat.id}`} style={styles.navLink}>
                            {cat.name}
                        </Link>
                    </li>
                ))}
                
                {/* [MODIFICADO] Mantenemos Contacto, pero lo dirigimos a una ruta simple si la creas (o lo mantenemos temporalmente sin funcionalidad) */}
                <li><Link to="/contacto" style={styles.navLink}>Contacto</Link></li>
            </ul>

            {/* Widget del Carrito de Compras */}
            <CartWidget />
        </nav>
    );
};

export default NavBar;

// Estilos básicos en JavaScript (Mismos estilos que antes)
const styles = {
    // ... (El objeto styles permanece exactamente igual)
    navBar: {
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: '#1f242d', 
        padding: '15px 30px', 
        color: 'white',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', 
    },
    logo: {
        fontSize: '2rem', 
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
        gap: '20px', 
        padding: 0,
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