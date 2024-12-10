import React, { useContext, useState } from 'react'; // Import useState and useContext
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { CartContext } from '../CartContext'; // Import CartContext to get cart items
import './Header.css';

function Header() {
    const [searchQuery, setSearchQuery] = useState(''); // State to track search input
    const navigate = useNavigate(); // Hook for navigation
    const { cartItems } = useContext(CartContext); // Access cartItems from CartContext

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`); // Navigate to search results page with the query
        } else {
            alert("Please enter a search term."); // Handle empty search case
        }
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">SHOEPATOS</Link>
            </div>
            <nav className="nav">
                <Link to="/blog">Blog</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="search-container">
                <input
                    type="text"
                    placeholder="Search"
                    className="search"
                    value={searchQuery} // Bind input value to state
                    onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
                />
                <button type="submit" className="search-btn">
                    <i className="fas fa-search"></i>
                </button>
            </form>
            <div className="icons">
                <Link to="/signin" className="icon">
                    <i className="fas fa-user"></i>
                </Link>
                {/* Cart Icon with Item Count */}
                <Link to="/cart" className="icon">
                    <i className="fas fa-shopping-cart"></i>
                    {/* Display number of items in cart if available */}
                    {cartItems.length > 0 && (
                        <span className="cart-count">{cartItems.length}</span>
                    )}
                </Link>
            </div>
        </header>
    );
}

export default Header;
