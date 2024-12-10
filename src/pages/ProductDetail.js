import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail({ onAddToCart }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state;

    const [selectedTab, setSelectedTab] = useState('Description');
    const [mainImage, setMainImage] = useState(product.img);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleTabClick = (tab) => setSelectedTab(tab);
    const handleThumbnailClick = (image) => setMainImage(image);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to the cart!');
            return;
        }

        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            size: selectedSize,
            quantity,
            img: product.img,
        };

        onAddToCart(cartItem);
        alert('Added to Cart!');
    };

    return (
        <div className="product-detail">
            <div className="product-detail-container">
                {/* Breadcrumb Navigation */}
                <nav className="breadcrumb">
                    <span onClick={() => navigate('/')}>Home</span> &gt;
                    <span onClick={() => navigate(-1)}>Back</span>
                </nav>

                <div>
                    <img src={mainImage} alt={product.name} className="main-image" />
                    <div className="thumbnail-images">
                        {[product.img, product.img, product.img].map((img, index) => (
                            <img
                                key={`${img}-${index}`}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="thumbnail-image"
                                onClick={() => handleThumbnailClick(img)}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-info">
                    <h1 className="product-name">{product.name}</h1>
                    <div className="price-section">
                        {product.discountedPrice && (
                            <span className="original-price">{product.originalPrice} PHP</span>
                        )}
                        <span className="product-price">{product.price} PHP</span>
                    </div>

                    {/* Stock Availability */}
                    <p className="stock-status">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>



                    {/* Tab Section */}
                    <div className="tab-section">
                        <button
                            className={`tab-button ${selectedTab === 'Description' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Description')}
                        >
                            Description
                        </button>
                        <button
                            className={`tab-button ${selectedTab === 'Specification' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Specification')}
                        >
                            Specification
                        </button>
                    </div>

                    <div className="tab-content">
                        {selectedTab === 'Description' ? (
                            <div>
                                <h2>Description</h2>
                                <p>Elevate your urban style with {product.name}. Designed with high-performance materials and a sleek, versatile look.</p>
                                <ul>
                                    <li>Sleek and versatile design</li>
                                    <li>High-performance materials for durability</li>
                                    <li>Ideal for both casual and active wear</li>
                                </ul>
                            </div>
                        ) : (
                            <div>
                                <h2>Specification</h2>
                                <ul>
                                    <li>Material: Premium Fabric</li>
                                    <li>Outsole: Rubber</li>
                                    <li>Color: Green</li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
