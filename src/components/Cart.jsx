import { useState } from "react";
import { useCart } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import '../App.css';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const [orderId, setOrderId] = useState(null);
    const [isCreatingOrder, setIsCreatingOrder] = useState(false);

    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // Recibimos los datos del comprador desde CheckoutForm
    const handleConfirm = async (buyerData) => {
        setIsCreatingOrder(true);
        
        try {
            const order = {
                buyer: buyerData,
                items: cart.map(item => ({
                    id: item.id,
                    title: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: totalPrice,
                date: serverTimestamp() // Usamos la hora del servidor de Firebase
            };

            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, order);
            
            setOrderId(docRef.id); // Guardamos el ID real de Firebase
            clearCart();
        } catch (error) {
            console.error("Error al crear la orden:", error);
            alert("Hubo un error al procesar tu compra.");
        } finally {
            setIsCreatingOrder(false);
        }
    };

    if (orderId) return (
        <div className="catalog-container">
            <div className="greeting-banner">
                <h2>¡Compra Exitosa! 🎉</h2>
                <p>Tu ticket de seguimiento es: <strong style={{color: 'var(--primary)'}}>{orderId}</strong></p>
                <p>Gracias por confiar en TIENDAPRO</p>
            </div>
        </div>
    );

    if (cart.length === 0) return (
        <div className="catalog-container">
            <h2 className="catalog-title">Tu carrito está vacío 🛒</h2>
        </div>
    );

    return (
        <div className="catalog-container">
            <h2 className="catalog-title">Tu Carrito</h2>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                {cart.map((prod) => (
                    <div key={prod.id} className="product-card" style={{flexDirection: 'row', marginBottom: '15px', height: 'auto'}}>
                        <div style={{flexGrow: 1}}>
                            <h3 className="product-name">{prod.name}</h3>
                            <p className="product-desc">Cantidad: {prod.quantity} x ${prod.price}</p>
                        </div>
                        <button className="product-stock" 
                                style={{background: '#ff4b4b', color: 'white', border: 'none', cursor: 'pointer', padding: '10px 15px'}}
                                onClick={() => removeFromCart(prod.id)}>
                            Quitar
                        </button>
                    </div>
                ))}
                
                <div className="greeting-banner">
                    <h3>Total a pagar: ${totalPrice}</h3>
                    <button className="link-item" onClick={clearCart} style={{marginTop: '10px', display: 'block', width: '100%', border: '1px solid var(--primary)', padding: '10px'}}>
                        Vaciar Carrito
                    </button>
                </div>
                
                {/* Si estamos procesando, mostramos un mensaje, sino el formulario */}
                {isCreatingOrder ? (
                    <h3 className="loading-text">GENERANDO ORDEN...</h3>
                ) : (
                    <CheckoutForm onConfirm={handleConfirm} />
                )}
            </div>
        </div>
    );
};

export default Cart;

const styles = {
  container: { maxWidth: "800px", margin: "40px auto", padding: "30px", backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", textAlign: "center" },
  item: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd", padding: "15px 0" },
  remove: { backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "6px", padding: "6px 10px", cursor: "pointer" },
  clear: { marginTop: "20px", padding: "10px 20px", backgroundColor: "#333", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" },
};