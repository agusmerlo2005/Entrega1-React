/* ================== STYLES ================== */
const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#282c34",
    width: "100%",
  },
  main: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  footer: {
    backgroundColor: "#1f242d",
    padding: "20px 0",
  },
  footerText: {
    margin: 0,
    textAlign: "center",
    color: "white",
  },
};


import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

const NotFound = () => (
  <h2 style={{ color: "white", textAlign: "center", padding: "50px" }}>
    404 - Página no encontrada
  </h2>
);

const App = () => {
  const mensajeBienvenida =
    "Bienvenido a la mejor tienda online de la región, ¡disfruta nuestro catálogo!";

  return (
    <div style={styles.app}>
      <NavBar />

      <main style={styles.main}>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={mensajeBienvenida} />}
          />

          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting={mensajeBienvenida} />}
          />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer style={styles.footer}>
        <h2 style={styles.footerText}>Tu Landing Page</h2>
      </footer>
    </div>
  );
};

export default App;
