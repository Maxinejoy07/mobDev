import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Paper plane icon from react-icons
import './Testimonials.css';

function Testimonials() {
    const [userComment, setUserComment] = useState('');
    const [userName, setUserName] = useState('');
    const [userRating, setUserRating] = useState(0);
    const [submittedComments, setSubmittedComments] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);  // Loading state for submit

    // Simulating a logged-in user
    const loggedInUser = {
        name: 'John Doe',
        image: 'https://via.placeholder.com/50',  // Placeholder or user's image
    };

    // Automatically fill in the user's name if logged in
    const handleCommentChange = (e) => {
        setUserComment(e.target.value);
    };

    const handleRatingChange = (rating) => {
        setUserRating(rating);
    };

    const handleSubmit = () => {
        if (userComment && userRating) {
            setIsSubmitting(true);

            setTimeout(() => {
                const newComment = {
                    name: loggedInUser.name || userName, // Use logged-in user's name
                    comment: userComment,
                    rating: userRating,
                    image: loggedInUser.image, // Use logged-in user's image
                };
                setSubmittedComments([newComment, ...submittedComments]);

                // Reset the input fields
                setUserName('');
                setUserComment('');
                setUserRating(0);
                setIsSubmitting(false);
            }, 1000); // Simulate network delay
        } else {
            alert('Please fill in all fields and provide a rating.');
        }
    };

    return (
        <section className="testimonials">
            <h2>Share Your Thoughts with Us</h2>
            <div className="comment-section">
                <div className="comment-input">
                    {/* If logged in, skip name input and prefill with logged-in user's name */}
                    {!loggedInUser.name && (
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            aria-label="Your name"
                        />
                    )}
                    <textarea
                        placeholder="Add a comment..."
                        value={userComment}
                        onChange={handleCommentChange}
                        aria-label="Your comment"
                    />
                    <div className="star-rating">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span
                                key={i}
                                className={`star ${i < userRating ? 'filled' : ''}`}
                                onClick={() => handleRatingChange(i + 1)}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                    <div className="button-container">
                        <button onClick={handleSubmit} className="send-button" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <span className="spinner"></span>
                            ) : (
                                <FaPaperPlane size={20} />
                            )}
                            {isSubmitting ? 'Submitting...' : 'Send'}
                        </button>
                        {!isSubmitting && (
                            <button
                                onClick={() => {
                                    setUserName('');
                                    setUserComment('');
                                    setUserRating(0);
                                }}
                                className="clear-button"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Display submitted comments */}
            <div className="submitted-comments">
                {submittedComments.map((comment, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="testimonial-header">
                            <img
                                src={comment.image || 'https://via.placeholder.com/50'}
                                alt={comment.name}
                                className="testimonial-photo"
                            />
                            <div>
                                <p className="testimonial-name">{comment.name}</p>
                                <div className="testimonial-rating">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span
                                            key={i}
                                            className={`star ${i < comment.rating ? 'filled' : ''}`}
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <blockquote className="testimonial-quote">“{comment.comment}”</blockquote>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
