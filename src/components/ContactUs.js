import React, { useState } from 'react';


const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        comment: '',
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
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
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
