// src/components/ProductLists.js
import React, { useState } from 'react';
import './ProductLists.css';
import ProductModal from './ProductModal';

const products = [
    { id: 1, name: 'Rogue Rhythm', price: 210.00, category: 'Oxford', img: 'https://cdn.prod.website-files.com/65a6294a580c5ed45b48f81a/65f00b78071e059bd3c75642_7555-p-500.webp', tag: 'Sale' },
    { id: 2, name: 'Serene Sole', price: 95.00, category: 'Loafers', img: 'https://via.placeholder.com/250x250', tag: 'Sale' },
    { id: 3, name: 'SprintWave', price: 95.00, category: 'Loafers', img: 'https://via.placeholder.com/250x250', tag: 'Sale' },
    // Add more products as needed
];

function ProductLists() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleViewProduct = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="products-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    {product.tag && <span className="product-tag">{product.tag}</span>}
                    <img src={product.img} alt={product.name} />
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">${product.price.toFixed(2)} USD</p>
                    <button onClick={() => handleViewProduct(product)} className="view-button">
                        View Product
                    </button>
                </div>
            ))}

            {/* Render ProductModal if a product is selected */}
            {selectedProduct && (
                <ProductModal product={selectedProduct} closeModal={closeModal} />
            )}
        </div>
    );
}

export default ProductLists;
