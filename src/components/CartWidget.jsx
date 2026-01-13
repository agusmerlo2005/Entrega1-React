import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <Link
      to="/cart"
      style={{
        position: "relative",
        textDecoration: "none",
        fontSize: "22px",
      }}
    >
      🛒

      {totalQuantity > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-10px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}
