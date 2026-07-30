import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div className="empty-cart">

      <div className="empty-card">

        <FaShoppingCart className="empty-icon" />

        <h1>Your Cart is Empty</h1>

        <p>
          Looks like you haven't added anything to your cart yet.
        </p>

        <Link to="/" className="continue-btn">
          <FaArrowLeft />
          Continue Shopping
        </Link>

      </div>

      <div className="shopping-tips">

        <h3>Why shop with us?</h3>

        <div className="tip">
          🚚 <span>Free Shipping on orders above $100</span>
        </div>

        <div className="tip">
          🔒 <span>100% Secure Payments</span>
        </div>

        <div className="tip">
          💳 <span>Multiple Payment Options</span>
        </div>

        <div className="tip">
          ⭐ <span>Top Rated Products</span>
        </div>

        <div className="tip">
          🔄 <span>Easy 7-Day Returns</span>
        </div>

      </div>

    </div>
  );
};

export default EmptyCart;