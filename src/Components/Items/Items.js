import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useCart } from "../Cart/CartContext";
import "./Product.css";
import "../../App.css";

const BASE_URL =
  "https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1";

const headers = {
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxamF4dGR4emptbHNhZW94eWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDE4MTcsImV4cCI6MjA5NjkxNzgxN30.Np2wvORlImgoan2P7DPeJK8SN8P305vl9ISsUTSMWYA",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxamF4dGR4emptbHNhZW94eWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDE4MTcsImV4cCI6MjA5NjkxNzgxN30.Np2wvORlImgoan2P7DPeJK8SN8P305vl9ISsUTSMWYA",
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

const Items = () => {
  const { addToCart } = useCart();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const userId = user?.id;

  // ===========================
  // Fetch Products & Wishlist
  // ===========================

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      // Products
      const productsRes = await axios.get(
        `${BASE_URL}/products`,
        {
          headers,
        }
      );

      setItems(productsRes.data);

      // Wishlist
      if (userId) {
        const wishlistRes = await axios.get(
          `${BASE_URL}/wishlist?user_id=eq.${userId}`,
          {
            headers,
          }
        );

        const ids = wishlistRes.data.map(
          (item) => item.product_id
        );

        setWishlist(ids);

        console.log("Wishlist:", ids);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

    // ===========================
  // Toggle Wishlist
  // ===========================

  const toggleWishlist = async (productId) => {
    if (!userId) {
      alert("Please Login First");
      return;
    }

    try {
      // Check whether product already exists
      const check = await axios.get(
        `${BASE_URL}/wishlist?user_id=eq.${userId}&product_id=eq.${productId}`,
        {
          headers,
        }
      );

      // Remove from Wishlist
      if (check.data.length > 0) {
        await axios.delete(
          `${BASE_URL}/wishlist?user_id=eq.${userId}&product_id=eq.${productId}`,
          {
            headers,
          }
        );

        setWishlist((prev) =>
          prev.filter((id) => id !== productId)
        );

        alert("Removed From Wishlist");
      }

      // Add To Wishlist
      else {
        await axios.post(
          `${BASE_URL}/wishlist`,
          {
            user_id: userId,
            product_id: productId,
          },
          {
            headers,
          }
        );

        setWishlist((prev) => [...prev, productId]);

        alert("Added To Wishlist");
      }
    } catch (error) {
      console.log(
        "Wishlist Error:",
        error.response?.data || error
      );

      alert("Something went wrong.");
    }
  };

  // ===========================
  // Category Filter
  // ===========================

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() ===
              selectedCategory.toLowerCase()
        );

  // ===========================
  // Loading
  // ===========================

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading Products...</h2>
      </div>
    );
  }
    return (
    <div className="products-page">

      <h1 className="products-title">Our Products</h1>

      {/* Category Buttons */}
      <div className="category-buttons">
        {[
          "All",
          "Sarees",
          "Kurtis",
          "Furniture",
          "Men",
          "Ladies",
          "Sofas",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "category-btn active"
                : "category-btn"
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="products-container">
        {filteredItems.map((item) => {

          const isWishlisted = wishlist.includes(item.id);

          return (
            <div className="card" key={item.id}>

              {/* Wishlist Button */}
              <button
                className="wishlist-icon-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleWishlist(item.id);
                }}
              >
                {isWishlisted ? (
                  <FaHeart color="red" size={22} />
                ) : (
                  <FaRegHeart color="#777" size={22} />
                )}
              </button>

              {/* Product Image */}
              <Link to={`/product/${item.id}`}>
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/300"
                  }
                  alt={item.name}
                  className="product-image"
                />
              </Link>

              {/* Product Details */}
              <div className="card-body">

                <Link
                  to={`/product/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <h2>{item.name}</h2>
                </Link>

                <p className="title">
                  {item.title}
                </p>

                <p className="category">
                  {item.category}
                </p>

                <p className="stock">
                  {item.stock > 0
                    ? `Only ${item.stock} left in stock`
                    : "Out of stock"}
                </p>

                <div className="rating-row">
                  <div className="rating-stars">
                    {Array.from({ length: 5 }, (_, index) => {
                      const ratingValue = typeof item.rating === "number" ? item.rating : 0;
                      return (
                        <FaStar
                          key={index}
                          className={
                            index < Math.round(ratingValue)
                              ? "star-filled"
                              : "star-empty"
                          }
                          size={14}
                        />
                      );
                    })}
                  </div>
                  <span className="rating-value">
                    {typeof item.rating === "number" ? item.rating.toFixed(1) : "-"}
                  </span>
                  <span className="rating-text">
                    {typeof item.rating === "number"
                      ? item.rating >= 4.8
                        ? "Best Seller"
                        : item.rating >= 4.5
                        ? "Excellent choice"
                        : item.rating >= 4.0
                        ? "Highly rated"
                        : "Good value"
                      : "Rating unavailable"}
                  </span>
                </div>

                <p className="desc">
                  {item.description}
                </p>

                <h3 className="price">
                  ₹ {item.price}
                </h3>

                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(item.id)}
                >
                  Add To Cart
                </button>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Items;