import React from 'react';
import logo from '../images/logo-light.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="sm">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="links">
                <div className="uh">
                    <div className="about-us">
                        <a href="#about" className="l">About Us</a>
                        <div className="about-details">
                            <a href="#meet-team" className="link">Meet Our Team</a>
                            <a href="#our-story" className="link">Our Story</a>
                            <a href="#advisory-council" className="link">Advisory Council</a>
                        </div>
                    </div>
                    <div className="resources">
                        <a href="#resources" className="l">Resources</a>
                        <div className="about-details">
                            <a href="#meditation" className="link">Meditation</a>
                            <a href="#newsletter" className="link">Newsletter</a>
                        </div>
                    </div>
                    <div className="contact">
                        <a href="#contact" className="l">Get in Touch</a>
                        <div className="about-details">
                            <a href="#contact-us" className="link">Contact Us</a>
                        </div>
                        {/* <div className="image">
                            <img className="ima" src="pinterest.png" alt="Pinterest" />
                            <img className="imb" src="instagram.png" alt="Instagram" />
                            <img className="imc" src="twitter.png" alt="Twitter" />
                            <img className="imd" src="youtube.png" alt="YouTube" />
                        </div> */}
                    </div>
                </div>
                <div className="he">
                    <div className="help">
                        <a href="#" className="hlp">Join Our Newsletter</a>
                        <p className="para">Mental health and wellness tips, our latest guides, resources and more</p>
                        <div className="inp">
                            <input 
                                style={{ width: '48%', background: '#516864', height: '0.6rem', padding: '1.2rem', borderRadius: '1.2rem', border: 'none' }}
                                name='input_1' 
                                id='input_11_1' 
                                type='email' 
                                placeholder='Email Address' 
                                aria-invalid="false" 
                            />
                            <button className="sign" type="button" onClick={() => alert('Button clicked!')}>Sign Up</button>
                        </div>
                    </div>
                    <div className="hepl">
                        <a href="#" className="hlp">Mental Health Helpline</a>
                        <p className="para">Our team is here to help you, or someone you know who is suffering from anxiety/depression</p>
                        <button className="get" type="button" onClick={() => alert('Button clicked!')}>Get Help</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
