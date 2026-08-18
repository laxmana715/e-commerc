import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// 1. Import ThemeProvider
import { ThemeProvider } from "./Components/ThemeContext"; 
import { CartProvider } from "./Components/Cart/CartContext";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Categories from "./Components/Categories/Categories";
import Products from "./Components/Product/Products";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";
import Items from "./Components/Items/Items";
import Login from "./Components/Login/Login";
import ProductDetails from "./Components/Items/ProductDetails";
import Wishlist from "./Components/wishlist/Wishlist";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Orders from "./Components/Orders/Orders";
import ProtectedRoute from "./Components/ProtectedRoute";


const App = () => {
  return (
    /* Wrap the entire router structure with ThemeProvider */
    <ThemeProvider>
      <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Redirect Root */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Main Home Page */}
          <Route path="/home" element={<Home />} />

          {/* Individual Component Pages */}
          <Route path="/hero" element={<Hero />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/items" element={<Items />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;