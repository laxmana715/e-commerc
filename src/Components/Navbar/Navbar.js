import "./Navbar.css";
import "../../App.css"; // Correct path relative to src/Components/Navbar
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));
    const location = useLocation();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const [scroll, setScroll] = useState(false);

    // Handle navbar background change on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Update current user when location changes
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`navbar ${scroll ? "active" : ""}`}
        >
            <div className="logo">
                Saree<span>Elegance</span>
            </div>
             
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li><Link to="/">Home</Link></li>

                {user ? (
                    <>
                        <li><Link to="/Items">Products</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li><button className="logout-btn" onClick={handleLogout} type="button">Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                )}
            </ul>

            <div className="icons">
                {/* Theme Toggle Button */}
                <button
                    className="theme-btn"
                    onClick={toggleTheme}
                    aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    type="button"
                >
                    {theme === "dark" ? <FaSun className="icon sun-icon" /> : <FaMoon className="icon moon-icon" />}
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                    type="button"
                >
                    ☰
                </button>
            </div>
        </motion.nav>
    );
}

export default Navbar;