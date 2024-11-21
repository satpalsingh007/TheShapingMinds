import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        comment: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);  // State to handle form submission status
    const [responseMessage, setResponseMessage] = useState('');  // For feedback to the user

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage(''); // Clear any previous response message

        try {
            // Send the form data to the backend API using Axios
            const response = await axios.post('http://localhost:5000/send-email', formData);

            if (response.status === 200) {
                setResponseMessage('Thank you for your message! We will get back to you soon.');
            }
        } catch (error) {
            setResponseMessage('Sorry, there was an issue sending your message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p className="para">
                Your well-being is our priority, and we encourage you to reach out. Our compassionate team is ready to assist you and ensure that you feel heard and supported. Please fill out the contact form below, and we will get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="name-container">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="name-input"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="name-input"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="email-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="location-input"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="comment"
                    placeholder="Your Comment"
                    className="comment-input"
                    rows="5"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
    );
};

export default ContactUs;
 