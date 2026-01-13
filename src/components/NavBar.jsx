import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../App.css'; // Importamos el CSS

const NavBar = () => {
    const categories = [
        { name: "Tecnología", id: "tecnologia" },
        { name: "Hogar", id: "hogar" },
        { name: "Ofertas", id: "ofertas" },
    ];

    return (
        <nav className="navbar-container">
            {/* Logo */}
            <Link to="/" className="logo-text">
                Tienda<span>Pro</span>
            </Link>

            {/* Navegación */}
            <ul className="nav-links">
                {categories.map((cat) => (
                    <li key={cat.id}>
                        <Link to={`/category/${cat.id}`} className="link-item">
                            {cat.name}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link to="/contacto" className="link-item">Contacto</Link>
                </li>
            </ul>

            {/* Carrito */}
            <CartWidget />
        </nav>
    );
};

export default NavBar;

// --------------------
// ESTILOS
// --------------------
const styles = {
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
    },
};
