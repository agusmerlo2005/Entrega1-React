import React from 'react';

// Componente simple que simula el ícono del carrito de compras.
const CartWidget = () => {
  // Puedes usar un ícono de texto o un emoji simple si no usas una librería de íconos.
const iconoCarrito = '🛒'; 
  const contador = 5; // Ejemplo: 5 ítems en el carrito

return (
    <div style={{ fontSize: '1.5rem', marginLeft: '20px' }}>
    {iconoCarrito} 
    <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>{contador}</span>
    </div>
);
};

export default CartWidget;