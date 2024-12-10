import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! We will get back to you soon.');
    };

    return (
        <div className="contact-page">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
                Have a question? Want to get in touch? Fill out the form below, or use our contact details to reach us.
            </p>

            <div className="contact-section">
                {/* Contact Information */}
                <section className="contact-info">
                    <h2>Our Contact Information</h2>
                    <ul>
                        <li><strong>Email:</strong> shoepatos@gmail.com</li>
                        <li><strong>Phone:</strong> +63-9912-456-789</li>
                        <li><strong>Address:</strong> 123 SHOEPATOS, Bambang, Nueva Vizcaya</li>
                    </ul>
                </section>

                {/* Contact Form */}
                <section className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Write your message here"
                            />
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </section>
            </div>

            {/* Social Media Section */}
            <div className="social-media">
                <h2>Follow Us</h2>
                <div className="social-icons">
                    <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-container">
                <h2>Find Us Here</h2>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244970.97792206344!2d120.96550835128413!3d16.39068662769369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33905af1f9db02e3%3A0x40de8994e9f76cbf!2sBambang%2C%20Nueva%20Vizcaya%2C%20Philippines!5e0!3m2!1sen!2sau!4v1733057808541!5m2!1sen!2sau"
                        width="600"
                        height="450"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
