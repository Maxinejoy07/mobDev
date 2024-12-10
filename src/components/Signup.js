import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle navigation after signup
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        password: '',
        termsAccepted: false
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for success popup
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            termsAccepted: e.target.checked
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.termsAccepted) {
            setError('You must agree to the terms and conditions.');
            return;
        }

        // Simulate user registration
        console.log('User registered:', formData);
        setSuccessMessage('You have successfully signed up! Welcome to Shoepatos.');
        setTimeout(() => {
            setSuccessMessage('');
            navigate('/'); // Navigate to the home page after signup
        }, 3000); // Popup will disappear after 3 seconds
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                {error && <div className="error-message">{error}</div>}
                {successMessage && (
                    <div className="success-message">
                        <p>{successMessage}</p>
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Enter your full name"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="terms">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.termsAccepted}
                        onChange={handleCheckboxChange}
                        required
                    />
                    <label htmlFor="terms">
                        I have read and agree to the
                        <a href="/terms-and-conditions"> Terms & Conditions</a>
                    </label>
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
                <button
                    type="button"
                    className="signin-button"
                    onClick={() => navigate('/signin')} // Navigate to sign-in page
                >
                    Already have an account?
                </button>
            </form>
        </div>
    );
};

export default Signup;
