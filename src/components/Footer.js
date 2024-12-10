import React from 'react';
import './Footer.css';
// Importing social media icons from react-icons/fa
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <div>
                    <h3>Explore</h3>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h3>Customer Support</h3>
                    <p>FAQ</p>
                    <p>Contact Us</p>
                    <p>Returns & Exchanges</p>
                    <p>Shipping & Delivery</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Terms of Service</p>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} color="#003c56" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={30} color="#003c56" />
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FaTiktok size={30} color="#003c56" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="newsletter">
                <p>Subscribe for Updates</p>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </footer>
    );
}

export default Footer;
