import { FaLock, FaCreditCard, FaTruck } from "react-icons/fa";

const CartSummary = ({
  subtotal,
  tax,
  shipping,
  discount,
  total,
}) => {
  return (
    <div className="cart-summary">

      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="summary-row">
        <span>Tax (5%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <div className="summary-row">
        <span>
          <FaTruck /> Shipping
        </span>

        <span>
          {shipping === 0
            ? "FREE"
            : `$${shipping.toFixed(2)}`}
        </span>
      </div>

      <div className="summary-row">
        <span>Discount</span>

        <span className="discount">
          -${discount.toFixed(2)}
        </span>
      </div>

      <hr />

      <div className="summary-total">

        <h3>Total</h3>

        <h3 className="grand-total">
          ${total.toFixed(2)}
        </h3>

      </div>

      <button className="checkout-btn">

        <FaLock />

        Proceed to Checkout

      </button>

      <div className="payment-info">

        <p>
          <FaCreditCard />
          Secure SSL Encrypted Payment
        </p>

        <small>
          Visa • MasterCard • PayPal • UPI
        </small>

      </div>

      <div className="delivery-box">

        <FaTruck className="truck-icon" />

        <div>

          <h4>Free Delivery</h4>

          <p>
            Orders above $100 qualify for free
            shipping.
          </p>

        </div>

      </div>

    </div>
  );
};

export default CartSummary;