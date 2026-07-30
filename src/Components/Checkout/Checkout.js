import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Checkout.css";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxamF4dGR4emptbHNhZW94eWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDE4MTcsImV4cCI6MjA5NjkxNzgxN30.Np2wvORlImgoan2P7DPeJK8SN8P305vl9ISsUTSMWYA";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [orderLoading, setOrderLoading] = useState(false);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  const name = user?.username || "";
  const phone = user?.phone || "";

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = item.products?.price || 0;
    const quantity = item.quantity || 1;
    return sum + price * quantity;
  }, 0);

  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await axios.get(
          `https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1/cart?user_id=eq.${userId}&select=*,products(*)`,
          { headers }
        );
        setCartItems(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Checkout fetch cart error:", err);
        setError("Unable to load cart. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!address.trim() || !city.trim() || !pincode.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!userId) {
      setError("You must be logged in to place an order.");
      return;
    }

    const order = {
      user_id: userId,
      name,
      phone: phone,
      address,
      city,
      state: "AP",
      pincode,
      total_price: totalPrice,
      status: "pending",
    };

    try {
      setOrderLoading(true);
      await axios.post(
        "https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1/orders",
        order,
        { headers }
      );

      await axios.delete(
        `https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1/cart?user_id=eq.${userId}`,
        { headers }
      );

      alert("Order placed successfully!");
      navigate("/orders");
    } catch (err) {
      console.error("Order submit error:", err);
      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.response?.statusText ||
        err.message ||
        "Failed to place order. Please try again.";
      setError(message);
    } finally {
      setOrderLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="checkout-page">
        <div className="checkout-loading">Loading checkout...</div>
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">Please log in to checkout.</div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">Your cart is empty. Add items before checkout.</div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h1>Checkout</h1>
        <div className="checkout-grid">
          <section className="checkout-summary">
            <h2>Order Summary</h2>
            {cartItems.map((item) => {
              const quantity = item.quantity || 1;
              const product = item.products || {};
              return (
                <div key={item.id} className="checkout-item">
                  <img src={product.image || "https://via.placeholder.com/100"} alt={product.name} />
                  <div>
                    <h3>{product.name || "Product"}</h3>
                    <p>{quantity} x ₹{product.price || 0}</p>
                  </div>
                  <span>₹{((product.price || 0) * quantity).toLocaleString("en-IN")}</span>
                </div>
              );
            })}
            <div className="checkout-total-row">
              <span>Total</span>
              <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
            </div>
          </section>

          <section className="checkout-form-section">
            <h2>Shipping Details</h2>
            {error && <div className="checkout-error">{error}</div>}
            <form onSubmit={handleSubmit} className="checkout-form">
              <label>
                Name
                <input value={name} disabled />
              </label>
              <label>
                Phone
                <input value={phone} disabled />
              </label>
              <label>
                Address*
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
              </label>
              <label>
                City*
                <input value={city} onChange={(e) => setCity(e.target.value)} required />
              </label>
              <label>
                Pincode*
                <input value={pincode} onChange={(e) => setPincode(e.target.value)} required />
              </label>
              <button className="checkout-submit" type="submit" disabled={orderLoading}>
                {orderLoading ? "Placing Order..." : "Place Order"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
