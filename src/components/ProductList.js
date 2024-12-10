import React from 'react';
import './ProductList.css';

function ProductList() {
    const products = [
        { name: 'Active JR', price: '₱64.00', img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07306fdf-7366-46e3-a992-08dd13cfd88f/air-jordan-xxxvi-low-luka-basketball-shoes-zNLHjc.png', tag: 'Best Seller' },
        { name: 'Bio Original', price: '₱119.00', img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/11da0526-2657-4e9d-8bfe-efe59661a6f9/go-flyease-easy-on-off-shoes-3svRCL.png', tag: 'Best Seller' },
        { name: 'Bio Perform', price: '₱99.00', img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c4ed9ae-7a74-4cd0-a6ae-36f89c5ecec6/phantom-gt2-academy-tf-football-shoe-nGfq8s.png', tag: 'Best Seller' },
        { name: 'Limited DL', price: '₱129.00', img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8ae66e9-92bf-41bc-ab98-b33828503caa/NIKE+V2K+RUN.png', tag: 'Best Seller' },
    ];

    return (
        <section className="product-list">
            <h2>Our Best Sellers</h2>
            <div className="products">
                {products.map((product) => (
                    <div key={product.name} className="product-card">
                        <span className="product-badge">{product.tag}</span>
                        <img src={product.img} alt={product.name} />
                        <p className="name">{product.name}</p>
                        <p className="price">{product.price}</p>

                        {/* Add to Cart Button */}
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductList;
