import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Product.css"; 
import "../../App.css"; // Ensure your styling is linked

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxamF4dGR4emptbHNhZW94eWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDE4MTcsImV4cCI6MjA5NjkxNzgxN30.Np2wvORlImgoan2P7DPeJK8SN8P305vl9ISsUTSMWYA";

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Prefer: "return=representation",
};

const ProductDetail = () => {
    const { id } = useParams(); // Gets product ID from URL (/product/1)
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [adding, setAdding] = useState(false);

    // Get current logged-in user
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const userId = user?.id;

    // Fetch Product Details from Supabase
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    `https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1/products?id=eq.${id}`,
                    { headers }
                );
                if (res.data.length > 0) {
                    setProduct(res.data[0]);
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    // Handle Add to Cart Functionality
    const handleAddToCart = async () => {
        if (!userId) {
            alert("Please log in first to add items to your cart!");
            navigate("/login");
            return;
        }

        try {
            setAdding(true);
            await axios.post(
                `https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1/cart`,
                {
                    user_id: userId,
                    product_id: product.id,
                    quantity: 1,
                },
                { headers }
            );

            alert("Item successfully added to your cart!");
        } catch (error) {
            console.error("Error adding to cart:", error);
            alert("Failed to add item to cart. Please try again.");
        } finally {
            setAdding(false);
        }
    };

    if (loading) {
        return <div style={{ textAlign: "center", marginTop: "100px" }}>Loading Product...</div>;
    }

    if (!product) {
        return <div style={{ textAlign: "center", marginTop: "100px" }}>Product not found.</div>;
    }

    return (
        <div className="product-detail-container" style={{ maxWidth: "600px", margin: "100px auto 40px", padding: "20px" }}>
            <div className="product-card" style={{ background: "var(--card-bg, #fff)", border: "1px solid #e0e0e0", borderRadius: "12px", overflow: "hidden", padding: "20px" }}>
                <img
                    src={product.image || "https://via.placeholder.com/500x350"}
                    alt={product.name || "Saree"}
                    style={{ width: "100%", height: "380px", objectFit: "cover", borderRadius: "8px" }}
                />
                <div style={{ marginTop: "16px" }}>
                    <span style={{ textTransform: "uppercase", fontSize: "0.85rem", color: "#6b7280" }}>
                        {product.category || "Sarees"}
                    </span>
                    <h2 style={{ fontSize: "1.5rem", margin: "8px 0" }}>{product.name}</h2>
                    <h3 style={{ color: "#e11d48", fontSize: "1.5rem", marginBottom: "20px" }}>
                        ₹ {product.price}
                    </h3>
                    <button
                        onClick={handleAddToCart}
                        disabled={adding}
                        style={{
                            width: "100%",
                            padding: "14px",
                            backgroundColor: "#2563eb",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        {adding ? "Adding to Cart..." : "Add To Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;