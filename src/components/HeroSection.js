import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HeroSection.css';

function HeroSection() {
    const navigate = useNavigate(); // Initialize useNavigate

    // Handler to navigate to the "Shop All" page
    const handleShopNowClick = () => {
        navigate('/shop-all'); // Replace '/shop-all' with the actual path to your "Shop All" page
    };

    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Walking Distance with Purpose.</h1>
                <p>Premium Sneakers crafted for your lifestyle.</p>
                <button className="shop-now-btn" onClick={handleShopNowClick}>SHOP NOW</button>
            </div>
        </section>
    );
}

export default HeroSection;
