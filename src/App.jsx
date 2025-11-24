import React from 'react';
// Importamos los módulos necesarios de React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

// Importa tus componentes
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// Necesario para la ruta de detalle
import ItemDetailContainer from './components/ItemDetailContainer'; 

// Componente simple para manejar la ruta 404
const NotFound = () => (
  <h2 style={{ color: 'white', textAlign: 'center', padding: '50px' }}>404 - ¡Página no encontrada!</h2>
);

const App = () => {
  // Define el string que será enviado como prop
  const mensajeBienvenida = "Bienvenido a la mejor tienda online de la región, ¡disfruta nuestro catálogo!";

  return (
    // APLICAMOS el estilo Flexbox para organizar el contenido verticalmente
    <div className="App" style={appStyles.fullWidthContainer}>
        {/* 1. Envolvemos la aplicación con BrowserRouter */}
        <BrowserRouter>
          {/* 1. Renderiza el NavBar (Fuera de Routes para que se vea siempre) */}
          <NavBar />
          
          {/* 2. Contenedor de contenido flexible que empuja el footer */}
          <main style={appStyles.mainContent}>
                {/* Definimos las rutas usando Routes y Route */}
                <Routes>
                    {/* RUTA 1: Catálogo Principal (Home) */}
                    <Route 
                      path="/" 
                      element={<ItemListContainer greeting={mensajeBienvenida} />} 
                    />
                    
                    {/* RUTA 2: Catálogo Filtrado por Categoría (path="/category/:categoryId") */}
                    <Route 
                      path="/category/:categoryId" 
                      element={<ItemListContainer greeting={mensajeBienvenida} />} 
                    />
                    
                    {/* RUTA 3: Vista Detalle del Producto (path="/item/:id") */}
                    <Route 
                      path="/item/:id" 
                      element={<ItemDetailContainer />} 
                    />
                    
                    {/* RUTA 4: 404 - Cualquier otra ruta no definida (path="*") */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
          </main>

          {/* 3. El Pie de Página (Footer) permanece en la parte inferior */}
          <footer style={appStyles.footer}>
                <h1 style={appStyles.footerTitle}>Tu Landing Page</h1>
            </footer>
        </BrowserRouter>
      </div>
  );
};

export default App;

// Objeto de estilos (mantenidos sin cambios)
const appStyles = {
    fullWidthContainer: {
        display: 'flex',
        flexDirection: 'column', 
        minHeight: '100vh', 
        width: '100vw', 
        margin: 0,
        padding: 0,
        backgroundColor: '#282c34', 
    },
    mainContent: {
        flexGrow: 1, 
        width: '100%',
    },
    footer: {
        backgroundColor: '#1f242d', 
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