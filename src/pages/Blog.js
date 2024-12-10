import React from 'react';
import './Blog.css'; // Import the CSS file for styling

const Blog = () => {
    return (
        <div className="blog-page">
            <h1 className="blog-title">Discover Your Perfect Pair</h1>
            <p className="blog-description">From everyday comfort to statement-making designs, find shoes that fit your lifestyle.</p>

            {/* Shoe Collection Section */}
            <section className="shoe-collection">
                <h2>Featured Collections</h2>
                <p>Explore our curated collections that offer a wide range of shoes to suit every occasion and style. Whether you're looking for casual sneakers, sturdy boots, or formal shoes, we have something for you.</p>
                <div className="collection-container">
                    <img src="https://th.bing.com/th/id/OIP.YZk0gU8BcgPW_8sNJB_-tQHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Sneakers" className="collection-item" />
                    <img src="https://cdn.sanity.io/images/c1chvb1i/production/50c4e05ec83f24de7c103c46c94b89b4b4058ce1-1100x735.jpg" alt="Boots" className="collection-item" />
                    <img src="https://th.bing.com/th/id/OIP.l7ZIBvW2RJibGHAI-mOx2gHaEy?w=282&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Formal Shoes" className="collection-item" />
                </div>
            </section>

            {/* How-To Guide Section */}
            <section className="how-to-guide">
                <h2>How to Choose the Right Pair</h2>
                <p>Finding the perfect shoes is all about understanding your needs and preferences. Here’s a quick guide to help you make the right choice:</p>
                <ul className="how-to-list">
                    <li>Consider the occasion: Casual or formal? Sneakers for everyday, formal shoes for special events.</li>
                    <li>Focus on comfort: Make sure your shoes offer proper support and cushioning for your feet.</li>
                    <li>Match with your wardrobe: Choose shoes that complement your personal style and existing clothes.</li>
                </ul>
            </section>

            {/* Shoe Care Tips Section */}
            <section className="shoe-care-tips">
                <h2>Shoe Care Essentials</h2>
                <p>Keep your shoes looking their best with these simple care tips:</p>
                <ul className="care-tips-list">
                    <li>Regularly clean your shoes to remove dirt and maintain their appearance.</li>
                    <li>Store your shoes properly to keep their shape and prevent damage.</li>
                    <li>Polish leather shoes to restore shine and protect them from wear.</li>
                    <li>Alternate between pairs to extend the life of your shoes.</li>
                </ul>
            </section>

            {/* Call to Action Section */}
            <section className="call-to-action">
                <h2>Ready to Step Into Style?</h2>
                <p>Your next favorite pair is just a click away. Explore our full collection today and start walking in style and comfort!</p>
                <button className="cta-button">Shop Now</button>
            </section>
        </div>
    );
}

export default Blog;
