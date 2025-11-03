import React from 'react';
// Importa los componentes que acabas de crear
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  // Define el string que será enviado como prop
  const mensajeBienvenida = "Bienvenido a la mejor tienda online de la región, ¡disfruta nuestro catálogo!";

  return (
    // APLICAMOS el estilo Flexbox para organizar el contenido verticalmente
    <div className="App" style={appStyles.fullWidthContainer}>
      {/* 1. Renderiza el NavBar */}
      <NavBar />
      
      {/* 2. Contenedor de contenido flexible que empuja el footer */}
      <main style={appStyles.mainContent}>
          <ItemListContainer greeting={mensajeBienvenida} />
      </main>

      {/* 3. El Pie de Página (Footer) permanece en la parte inferior */}
      <footer style={appStyles.footer}>
            <h1 style={appStyles.footerTitle}>Tu Landing Page</h1>
        </footer>
    </div>
  );
};

export default App;

// Objeto de estilos para forzar el ancho completo y el Footer al final
const appStyles = {
    // 1. Contenedor principal: Activa Flexbox para organizar verticalmente
    fullWidthContainer: {
        display: 'flex',
        flexDirection: 'column', // Apila los elementos: NavBar, main, footer
        minHeight: '100vh', // Mínimo la altura completa de la ventana
        width: '100vw', 
        margin: 0,
        padding: 0,
        backgroundColor: '#282c34', 
    },
    // 2. Contenedor de contenido: Toma todo el espacio disponible
    mainContent: {
        flexGrow: 1, // ¡Esta propiedad hace que se extienda y empuje el footer!
        width: '100%',
    },
    // 3. Estilos del Footer
    footer: {
        backgroundColor: '#1f242d', // Color oscuro, similar a la NavBar
        width: '100%',
        padding: '20px 0', 
        boxSizing: 'border-box',
    },
    footerTitle: {
        textAlign: 'center',
        margin: 0,
        color: 'white',
        fontSize: '1.5rem',
        padding: '10px 0',
    }
};