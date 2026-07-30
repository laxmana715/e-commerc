import { useContext } from "react";
import { CartContext } from "./CartContext";
import { FaTrash, FaMinus, FaPlus, FaStar } from "react-icons/fa";

const CartItem = ({ item }) => {
  const {
    increment,
    decrement,
    deleteItem,
  } = useContext(CartContext);

  const product = item.products;

  const itemTotal = product.price * item.quantity;

  return (
    <div className="cart-item">

      {/* Product Image */}

      <div className="cart-image">

        <img
          src={product.thumbnail}
          alt={product.title}
        />

      </div>

      {/* Product Details */}

      <div className="cart-details">

        <h2>{product.title}</h2>

        <p className="brand">
          Brand :
          <span>
            {" "}
            {product.brand}
          </span>
        </p>

        <div className="rating">

          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star-half" />

          <span>
            {product.rating}
          </span>

        </div>

        <h3 className="price">
          ${product.price}
        </h3>

      </div>

      {/* Quantity */}

      <div className="quantity-section">

        <button
          className="qty-btn"
          onClick={() => decrement(item)}
        >
          <FaMinus />
        </button>

        <span className="qty">
          {item.quantity}
        </span>

        <button
          className="qty-btn"
          onClick={() => increment(item)}
        >
          <FaPlus />
        </button>

      </div>

      {/* Total */}

      <div className="item-total">

        <h3>
          $
          {itemTotal.toFixed(2)}
        </h3>

        <button
          className="delete-btn"
          onClick={() => deleteItem(item.id)}
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
};

export default CartItem;