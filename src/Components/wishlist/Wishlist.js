import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import "./wishlist.css";

// API Configuration
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxamF4dGR4emptbHNhZW94eWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDE4MTcsImV4cCI6MjA5NjkxNzgxN30.Np2wvORlImgoan2P7DPeJK8SN8P305vl9ISsUTSMWYA";

const BASE_URL = "https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // Retrieve user safely from localStorage (defaults to user ID 1 if not logged in)
  const user = JSON.parse(localStorage.getItem("user")) || { id: 1 };
  const userId = user?.id || user?.user_id || 1;

  // ============================
  // Fetch Wishlist Items
  // ============================
  const fetchWishlist = useCallback(async () => {
    if (!userId) {
      setWishlist([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(
        `${BASE_URL}/wishlist?user_id=eq.${userId}&select=*,products(*)`,
        { headers }
      );

      setWishlist(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  // ============================
  // Delete Wishlist Item
  // ============================
  const deleteWishlist = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/wishlist?id=eq.${id}`, { headers });

      // Update state locally for fast UI response
      setWishlist((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error removing wishlist item:", err);
    }
  };

  if (loading) {
    return (
      <div className="wishlist-container">
        <h2>Loading Wishlist...</h2>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h2>My Wishlist ({wishlist.length})</h2>

      {wishlist.length === 0 ? (
        <h3>Your Wishlist is Empty</h3>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img
                src={item.products?.image || item.products?.thumbnail}
                alt={item.products?.name || item.products?.title}
                className="wishlist-image"
              />

              <div className="wishlist-info">
                <h3 className="wishlist-title">
                  {item.products?.name || item.products?.title}
                </h3>

                <p className="wishlist-price">₹{item.products?.price}</p>

                <div className="wishlist-actions">
                  <button
                    className="btn-remove"
                    onClick={() => deleteWishlist(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;