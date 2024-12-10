import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link for navigation
import './SearchResults.css'; // Add your CSS styling here

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

function SearchResults() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query'); // Extract search query from URL

    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search-results-container">
            <h1>Search Results for "{query}"</h1>

            {/* Navigation buttons */}
            <div className="search-navigation">
                <Link to="/" className="home-btn">Home</Link>
                <Link to="/shop-all" className="back-to-products-btn">Back to Products</Link>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            {product.tag && <span className="product-tag">{product.tag}</span>}
                            <img src={product.img} alt={product.name} className="product-image" />
                            <p className="product-name">{product.name}</p>
                            <p className="product-category">{product.category}</p>
                            <p className="product-price">{product.price} PHP</p>
                            <button className="add-to-cart-btn">Add to Cart</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found for your search query.</p>
            )}
        </div>
    );
}

export default SearchResults;
