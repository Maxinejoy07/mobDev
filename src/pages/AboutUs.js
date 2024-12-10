import React from 'react';
import './AboutUs.css';
function AboutUs() {
    return (
        <div className="blog-page">
            <h1 className="blog-title">Step into Style</h1>
            <p className="blog-description">Discover our collection of shoes designed for comfort, style, and durability.</p>

            {/* About Us Section */}
            <section className="about-us">
                <h2>Our Mission</h2>
                <p>At Step into Style, we aim to provide high-quality, comfortable shoes that keep you moving in style. Whether you're looking for something casual or formal, we've got you covered with our diverse collection.</p>
            </section>

            <section className="about-us">
                <h2>Our Values</h2>
                <ul className="values-list">
                    <li>Comfort: We prioritize foot health, ensuring our shoes are comfortable for long hours of wear.</li>
                    <li>Quality: Our shoes are made with premium materials that ensure durability and style.</li>
                    <li>Fashion: Stay trendy with our collection of shoes that combine modern design and classic comfort.</li>
                    <li>Customer Satisfaction: We believe in providing the best shopping experience with exceptional customer service.</li>
                </ul>
            </section>

            {/* Shoe Collection Section */}
            <section className="shoe-collection">
                <h2>Our Shoe Collection</h2>
                <p>Explore our range of shoes for every occasion. From sneakers to formal wear, our collection ensures that you'll find something perfect for you.</p>
                <div className="collection-container">
                    <img src="https://th.bing.com/th/id/OIP.OzB_MFoT894fRtE9kLvsfwHaFj?w=1024&h=768&rs=1&pid=ImgDetMain" alt="Sneakers" className="collection-item" />
                    <img src="https://th.bing.com/th/id/OIP.5fuaJAi0Ln5XUAYMJnZh-wHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Boots" className="collection-item" />
                    <img src="https://media.cnn.com/api/v1/images/stellar/prod/211103100705-nike.jpg?q=w_1110,c_fill" alt="Formal Shoes" className="collection-item" />
                </div>
            </section>

            {/* Shoe Care Tips Section */}
            <section className="shoe-care-tips">
                <h2>Shoe Care Tips</h2>
                <ul className="care-tips-list">
                    <li>Keep your shoes clean and dry to avoid damage.</li>
                    <li>Store your shoes in a cool, dry place to preserve their shape.</li>
                    <li>Use shoe polish to maintain the shine of leather shoes.</li>
                    <li>Alternate between different pairs of shoes to extend their lifespan.</li>
                </ul>
            </section>

            {/* Call to Action Section */}
            <section className="call-to-action">
                <h2>Join the Step into Style Movement!</h2>
                <p>Looking for the perfect pair of shoes? Shop with us today and experience comfort like never before!</p>
                <button className="cta-button">Shop Now</button>
            </section>
        </div>
    );
}

export default AboutUs;
