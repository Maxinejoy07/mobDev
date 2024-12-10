import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext'; // Import CartContext
import './ShopAll.css';

const products = [
    { id: 1, name: 'Nike Air Max 90 GTX shoes', price: '1,599.00', category: 'Sneakers', img: 'https://th.bing.com/th/id/OPAC.ZjijQiW1wRqzfg474C474?w=200&h=150&rs=1&o=5&dpr=1.3&pid=21.1', tag: 'Sale' },
    { id: 2, name: 'Serene Sole', price: '499.00', category: 'Sneakers', img: 'https://th.bing.com/th/id/OIP.cCTaY8OcAm0z3SQP32DtbQHaHa?pid=ImgDet&w=474&h=474&rs=1' },
    { id: 3, name: 'SprintWave', price: '599.00', category: 'Sneakers', img: 'https://th.bing.com/th/id/OIP.MAXA6FhNkRhhICNRHGUjGwHaHa?pid=ImgDet&w=474&h=474&rs=1', tag: 'Sale' },
    { id: 4, name: 'Eclipse Stride', price: '799.00', category: 'Sneakers', img: 'https://th.bing.com/th/id/OIP.xEFbxXAi0iQWl_LKK-BJowHaHa?pid=ImgDet&w=474&h=474&rs=1', tag: 'Sale' },
    { id: 5, name: 'Velocity Vibe', price: '699.00', category: 'Sneakers', img: 'https://th.bing.com/th/id/OIP.3-tqI0-66MC4j0rur7g7awHaHa?pid=ImgDet&w=474&h=474&rs=1' },
    { id: 6, name: 'Rogue Rhythm', price: '399.00', category: 'Sneakers', img: 'https://th.bing.com/th/id/OIP.PAubZ6YVvlEqgAOJbNH9cAHaHa?w=592&h=592&rs=1&pid=ImgDetMain', tag: 'Sale' },
    { id: 7, name: 'Serene Sole', price: '499.00', category: 'Boots', img: 'https://th.bing.com/th/id/OIP.cCTaY8OcAm0z3SQP32DtbQHaHa?pid=ImgDet&w=474&h=474&rs=1' },
    { id: 8, name: 'SprintWave', price: '599.00', category: 'Boots', img: 'https://th.bing.com/th/id/OIP.MAXA6FhNkRhhICNRHGUjGwHaHa?pid=ImgDet&w=474&h=474&rs=1', tag: 'Sale' },
    { id: 9, name: 'Eclipse Stride', price: '799.00', category: 'Boots', img: 'https://th.bing.com/th/id/OIP.xEFbxXAi0iQWl_LKK-BJowHaHa?pid=ImgDet&w=474&h=474&rs=1', tag: 'Sale' },
    { id: 10, name: 'Velocity Vibe', price: '699.00', category: 'Boots', img: 'https://th.bing.com/th/id/OIP.3-tqI0-66MC4j0rur7g7awHaHa?pid=ImgDet&w=474&h=474&rs=1' },
    { id: 11, name: 'Serene Sole', price: '499.00', category: 'Boots', img: 'https://th.bing.com/th/id/OIP.cCTaY8OcAm0z3SQP32DtbQHaHa?pid=ImgDet&w=474&h=474&rs=1' },
    { id: 12, name: 'SprintWave', price: '599.00', category: 'Boots', img: 'https://th.bing.com/th/id/OIP.MAXA6FhNkRhhICNRHGUjGwHaHa?pid=ImgDet&w=474&h=474&rs=1', tag: 'Sale' },
    { id: 13, name: 'Eclipse Stride', price: '799.00', category: 'Kids Boys', img: 'https://th.bing.com/th/id/OIP.xEFbxXAi0iQWl_LKK-BJowHaHa?pid=ImgDet&w=474&h=474&rs=1', tag: 'Sale' },
    { id: 14, name: 'Velocity Vibe', price: '699.00', category: 'Kids Boys', img: 'https://th.bing.com/th/id/OIP.3-tqI0-66MC4j0rur7g7awHaHa?pid=ImgDet&w=474&h=474&rs=1' }, { id: 4, name: 'Eclipse Stride', price: '799.00', category: 'Kids Boys', img: 'https://th.bing.com/th/id/OIP.xEFbxXAi0iQWl_LKK-BJowHaHa?pid=ImgDet&w=474&h=474&rs=1', tag: 'Sale' },
    { id: 15, name: 'Velocity Vibe', price: '699.00', category: 'Kids Boys', img: 'https://th.bing.com/th/id/OIP.3-tqI0-66MC4j0rur7g7awHaHa?pid=ImgDet&w=474&h=474&rs=1' },
    { id: 1, name: 'Rogue Rhythm', price: '399.00', category: 'Kids Boys', img: 'https://th.bing.com/th/id/OIP.PAubZ6YVvlEqgAOJbNH9cAHaHa?w=592&h=592&rs=1&pid=ImgDetMain', tag: 'Sale' },
    { id: 16, name: 'Serene Sole', price: '499.00', category: 'Kids Girls', img: 'https://th.bing.com/th/id/OIP.cCTaY8OcAm0z3SQP32DtbQHaHa?pid=ImgDet&w=474&h=474&rs=1' },
    { id: 3, name: 'SprintWave', price: '599.00', category: 'Kids Girls', img: 'https://th.bing.com/th/id/OIP.MAXA6FhNkRhhICNRHGUjGwHaHa?pid=ImgDet&w=474&h=474&rs=1', tag: 'Sale' },
    { id: 17, name: 'Eclipse Stride', price: '799.00', category: 'Kids Girls', img: 'https://th.bing.com/th/id/OIP.xEFbxXAi0iQWl_LKK-BJowHaHa?pid=ImgDet&w=474&h=474&rs=1', tag: 'Sale' },
    { id: 18, name: 'Velocity Vibe', price: '699.00', category: 'Kids Girls', img: 'https://th.bing.com/th/id/OIP.3-tqI0-66MC4j0rur7g7awHaHa?pid=ImgDet&w=474&h=474&rs=1' },

];

const categories = ['All', 'Sneakers', 'Boots', 'Kids Boys', 'Kids Girls'];

function ShopAll() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showModal, setShowModal] = useState(false); // State for controlling modal visibility
    const [selectedSize, setSelectedSize] = useState(''); // State for selected size
    const [productToAdd, setProductToAdd] = useState(null); // State to store the product for adding to cart
    const { cartItems, addToCart } = useContext(CartContext); // Access addToCart from CartContext
    const navigate = useNavigate();

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const handleAddToCart = (product) => {
        setProductToAdd(product); // Store the product to be added
        setShowModal(true); // Show the size selection modal
    };

    const handleAddToCartWithSize = () => {
        if (selectedSize) {
            // Add the product with the selected size to the cart
            addToCart({ ...productToAdd, size: selectedSize });
            alert(`${productToAdd.name} (${selectedSize}) added to the cart!`);
            setShowModal(false); // Close the modal after adding to cart
            setSelectedSize(''); // Reset size selection
        } else {
            alert('Please select a size!');
        }
    };

    const handleViewProduct = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
    };

    return (
        <div className="shop-all-container">
            <aside className="sidebar">
                <h3 className="sidebar-title">Categories</h3>
                <ul>
                    {categories.map(category => (
                        <li
                            key={category}
                            className={selectedCategory === category ? 'active-category' : ''}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </aside>
            <div className="products-section">
                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            {product.tag && <span className="product-tag">{product.tag}</span>}
                            <img src={product.img} alt={product.name} className="product-image" />
                            <p className="product-name">{product.name}</p>
                            <p className="product-category">{product.category}</p>
                            <p className="product-price">{product.price} PHP</p>
                            <div className="product-actions">
                                <button
                                    className="view-product-btn"
                                    onClick={() => handleViewProduct(product)}
                                >
                                    View
                                </button>
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => handleAddToCart(product)} // Add to cart with size selection
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for size selection */}
            {showModal && (
                <div className="size-selection-modal">
                    <div className="modal-content">
                        <h3>Select Size for {productToAdd?.name}</h3>
                        <div className="size-options">
                            {/* Size buttons range from 35 to 42 */}
                            {Array.from({ length: 8 }, (_, index) => 35 + index).map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={selectedSize === size ? 'active' : ''}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <button className="add-to-cart-confirm-btn" onClick={handleAddToCartWithSize}>
                            Add to Cart
                        </button>
                        <button className="close-modal-btn" onClick={() => setShowModal(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShopAll;
