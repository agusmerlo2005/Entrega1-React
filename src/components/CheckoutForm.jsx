import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import '../App.css';

const CheckoutForm = ({ onConfirm }) => {
  // Obtenemos el total del carrito para el botón
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    emailConfirm: "" // Agregamos confirmación de email (suele pedirse en la rúbrica)
  });

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.phone || !buyer.email) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    if (buyer.email !== buyer.emailConfirm) {
        alert("Los correos electrónicos no coinciden.");
        return;
    }

    // Enviamos solo los datos necesarios al Cart.jsx
    const { emailConfirm, ...dataToSubmit } = buyer;
    onConfirm(dataToSubmit);
  };

  return (
    <div className="checkout-section">
      <h2 className="form-title">Finalizar compra</h2>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={buyer.name}
          onChange={handleChange}
          required
        />

        <input
          className="form-input"
          type="tel"
          name="phone"
          placeholder="Teléfono de contacto"
          value={buyer.phone}
          onChange={handleChange}
          required
        />

        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <input
          className="form-input"
          type="email"
          name="emailConfirm"
          placeholder="Confirmar correo electrónico"
          value={buyer.emailConfirm}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-confirm">
          Confirmar compra (${total})
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
// ---------------- STYLES ----------------
const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
