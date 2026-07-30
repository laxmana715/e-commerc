import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaShoppingBag, FaTruck, FaStar, FaArrowRight } from "react-icons/fa";
import "./cart.css";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxamF4dGR4emptbHNhZW94eWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDE4MTcsImV4cCI6MjA5NjkxNzgxN30.Np2wvORlImgoan2P7DPeJK8SN8P305vl9ISsUTSMWYA";

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Prefer: "return=representation",
};

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [coupon, setCoupon] = useState("");
    const [discount] = useState(0);
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const userId = user?.id;
    const navigate = useNavigate();

    // Helper: Merge duplicates by product_id
    const consolidateItems = (items) => {
        const mergedMap = new Map();

        items.forEach((item) => {
            const pId = item.product_id;

            if (mergedMap.has(pId)) {
                // If product already exists in map, combine quantities and track all DB row IDs
                const existing = mergedMap.get(pId);
                existing.quantity += item.quantity || 1;
                existing.dbIds.push(item.id);
            } else {
                mergedMap.set(pId, {
                    ...item,
                    quantity: item.quantity || 1,
                    dbIds: [item.id], // Array to keep track of duplicate IDs in DB
                });
            }
        });

        return Array.from(mergedMap.values());
    };

    // Fetch Cart Items
    const fetchCart = useCallback(async () => {
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

            const rawData = res.data || [];
            // Group duplicate items together
            const mergedCart = consolidateItems(rawData);
            setCartItems(mergedCart);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        } finally {
            setLoading(false);
        }
    }, [userId]);

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    // Handle Delete Item
    const handleRemove = async (item) => {
        try {
            // Delete all associated duplicate rows from Supabase
            await Promise.all(
                item.dbIds.map((id) =>
                    axios.delete(
                        `https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1/cart?id=eq.${id}`,
                        { headers }
                    )
                )
            );
            setCartItems((prev) => prev.filter((cItem) => cItem.product_id !== item.product_id));
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    // Handle Quantity Update
    const updateQuantity = async (item, delta) => {
        const newQty = item.quantity + delta;
        if (newQty < 1) return;

        try {
            // Update the primary database entry
            const primaryId = item.dbIds[0];
            await axios.patch(
                `https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1/cart?id=eq.${primaryId}`,
                { quantity: newQty },
                { headers }
            );

            setCartItems((prev) =>
                prev.map((cItem) =>
                    cItem.product_id === item.product_id
                        ? { ...cItem, quantity: newQty }
                        : cItem
                )
            );
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    };

    // Calculate Subtotal
    const subtotal = cartItems.reduce((acc, item) => {
        const price = item.products?.price || 0;
        const qty = item.quantity || 1;
        return acc + price * qty;
    }, 0);

    const grandTotal = subtotal - discount;

    if (loading) {
        return (
            <div className="cart-loading">
                <div className="loader"></div>
                <p>Loading Cart...</p>
            </div>
        );
    }

    if (!userId || cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <div className="empty-card">
                    <FaShoppingBag className="empty-icon" />
                    <h1>Your Cart is Empty</h1>
                    <p>Explore our latest saree collection and add your favorite pieces!</p>
                    <Link to="/Items" className="continue-btn">
                        Explore Collection <FaArrowRight />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className="cart-header">
                <div>
                    <h1>Shopping Cart</h1>
                    <p>{cartItems.length} items in your cart</p>
                </div>
            </div>

            <div className="cart-layout">
                {/* Left Column: Cart Items List */}
                <div className="cart-items">
                    {cartItems.map((item) => {
                        const product = item.products || {};
                        const qty = item.quantity || 1;
                        const itemTotal = (product.price || 0) * qty;

                        return (
                            <div className="cart-item" key={item.product_id}>
                                <div className="cart-image">
                                    <img
                                        src={product.image || "https://via.placeholder.com/120"}
                                        alt={product.name || "Product"}
                                    />
                                </div>

                                <div className="cart-details">
                                    <h2>{product.name || "Saree Product"}</h2>
                                    <div className="brand">
                                        Category: <span>{product.category || "Ethnic"}</span>
                                    </div>
                                    <div className="rating">
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star-half" />
                                        <span>(4.8)</span>
                                    </div>
                                    <div className="price">₹{product.price || "0.00"}</div>
                                </div>

                                <div className="quantity-section">
                                    <button
                                        className="qty-btn"
                                        onClick={() => updateQuantity(item, -1)}
                                    >
                                        -
                                    </button>
                                    <span className="qty">{qty}</span>
                                    <button
                                        className="qty-btn"
                                        onClick={() => updateQuantity(item, 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="item-total">
                                    <h3>₹{itemTotal.toLocaleString("en-IN")}</h3>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleRemove(item)}
                                        title="Remove Item"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Column: Order Summary */}
                <div className="cart-right">
                    <div className="coupon-card">
                        <h3>Apply Coupon</h3>
                        <div className="coupon-box">
                            <input
                                type="text"
                                placeholder="Enter coupon code"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                            />
                            <button onClick={() => alert("Coupon applied!")}>Apply</button>
                        </div>
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toLocaleString("en-IN")}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span className="discount">FREE</span>
                        </div>
                        {discount > 0 && (
                            <div className="summary-row">
                                <span>Discount</span>
                                <span className="discount">-₹{discount}</span>
                            </div>
                        )}
                        <div className="summary-total">
                            <span>Grand Total</span>
                            <span className="grand-total">₹{grandTotal.toLocaleString("en-IN")}</span>
                        </div>

                        <button className="checkout-btn" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>

                        <div className="delivery-box">
                            <FaTruck className="truck-icon" />
                            <div>
                                <h4>Free Standard Delivery</h4>
                                <p>Estimated delivery within 3-5 business days.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;