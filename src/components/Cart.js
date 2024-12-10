import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { CartContext } from '../CartContext'; // Import the CartContext
import './Cart.css'; // Import your custom styles

function Cart() {
    const { cartItems, removeItem } = useContext(CartContext); // Access cartItems and removeItem from the context

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.img} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.price} PHP</p>
                                    <p>Size: {item.size}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <button
                                    className="remove-item-btn"
                                    onClick={() => removeItem(item.id, item.size)} // Remove item based on id and size
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p>Total: {getTotalPrice().toFixed(2)} PHP</p>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>
            )}

            {/* Navigation buttons */}
            <div className="cart-navigation">
                <Link to="/" className="home-btn">Home</Link>
                <Link to="/shop-all" className="back-to-products-btn">Back to Products</Link>
            </div>
        </div>
    );
}

export default Cart;
