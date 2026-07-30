import { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxamF4dGR4emptbHNhZW94eWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDE4MTcsImV4cCI6MjA5NjkxNzgxN30.Np2wvORlImgoan2P7DPeJK8SN8P305vl9ISsUTSMWYA";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await axios.get(
          `https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1/orders?user_id=eq.${userId}&select=*`,
          { headers }
        );
        setOrders(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Orders fetch error:", err);
        setError("Unable to load orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) {
    return (
      <div className="orders-page">
        <p>Loading orders...</p>
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="orders-page">
        <p>Please log in to view your orders.</p>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-card">
        <h1>My Orders</h1>
        {error && <div className="orders-error">{error}</div>}
        {orders.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div className="order-card" key={order.id}>
                <div className="order-header">
                  <div>
                    <h2>Order #{order.id}</h2>
                    <p>Status: <strong>{order.status}</strong></p>
                  </div>
                  <div className="order-price">₹{order.total_price?.toLocaleString("en-IN")}</div>
                </div>
                <div className="order-meta">
                  <span>{order.city}, {order.state}</span>
                  <span>Pin: {order.pincode}</span>
                </div>
                <div className="order-details">
                  <p>{order.address}</p>
                  <p>Phone: {order.phone_no || order.phone}</p>
                  <p>Placed by: {order.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
