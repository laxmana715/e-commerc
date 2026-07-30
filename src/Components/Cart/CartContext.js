import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext();

const BASE_URL = "https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxamF4dGR4emptbHNhZW94eWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDE4MTcsImV4cCI6MjA5NjkxNzgxN30.Np2wvORlImgoan2P7DPeJK8SN8P305vl9ISsUTSMWYA";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

// Default user fallback if localStorage is empty
const defaultUser = { id: 1 };

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Retrieve logged-in user safely
  const user = JSON.parse(localStorage.getItem("user")) || defaultUser;
  const userId = user?.id || user?.user_id || defaultUser.id;

  // ============================
  // Fetch Cart Items
  // ============================
  const fetchCart = useCallback(async () => {
    if (!userId) {
      setCart([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}/cart?user_id=eq.${userId}&select=*,products(*)`,
        { headers }
      );
      const data = await res.json();
      setCart(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch Cart Error:", err);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // ============================
  // Add To Cart
  // ============================
  const addToCart = async (productId) => {
    try {
      // Check if product is already in cart
      const checkRes = await fetch(
        `${BASE_URL}/cart?user_id=eq.${userId}&product_id=eq.${productId}`,
        { headers }
      );
      const existingItems = await checkRes.json();

      if (existingItems.length > 0) {
        // If it exists, increment quantity
        const existingItem = existingItems[0];
        await increment(existingItem);
      } else {
        // Otherwise, add new item
        const body = {
          user_id: userId,
          product_id: productId,
          quantity: 1,
        };

        const res = await fetch(`${BASE_URL}/cart`, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        });

        if (res.ok) {
          fetchCart();
        }
      }
    } catch (err) {
      console.error("Add To Cart Error:", err);
    }
  };

  // ============================
  // Increment Quantity
  // ============================
  const increment = async (item) => {
    try {
      await fetch(`${BASE_URL}/cart?id=eq.${item.id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({
          quantity: item.quantity + 1,
        }),
      });

      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } catch (err) {
      console.error("Increment Error:", err);
    }
  };

  // ============================
  // Decrement Quantity
  // ============================
  const decrement = async (item) => {
    try {
      if (item.quantity === 1) {
        deleteItem(item.id);
        return;
      }

      await fetch(`${BASE_URL}/cart?id=eq.${item.id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({
          quantity: item.quantity - 1,
        }),
      });

      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } catch (err) {
      console.error("Decrement Error:", err);
    }
  };

  // ============================
  // Delete Cart Item
  // ============================
  const deleteItem = async (id) => {
    try {
      await fetch(`${BASE_URL}/cart?id=eq.${id}`, {
        method: "DELETE",
        headers,
      });

      setCart((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  // ============================
  // Calculations
  // ============================
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce(
    (sum, item) => sum + (item.products?.price || 0) * item.quantity,
    0
  );

  const tax = subtotal * 0.05;
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 20;
  const total = subtotal + tax + shipping;

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        fetchCart,
        addToCart,
        increment,
        decrement,
        deleteItem,
        totalItems,
        subtotal,
        tax,
        shipping,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);