import React from 'react';
import logo from '../images/logo-light.png'
import footerend from '../images/footer-end.gif'

const Footer = () => {
    return (
        <footer className="footer">
         
                <img className="footer-logo" src={logo} alt="logo" />
      
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-left-section">
                        <h3 className="footer-left-heading">Quick Links </h3>
                        <div className="footer-links">
                            <a href="#meet-team" className="footer-link">Meet Our Team</a>
                            <a href="#our-story" className="footer-link">Our Story</a>
                            <a href="#advisory-council" className="footer-link">Other Links</a>
                        </div>
                    </div>
                    <div className="footer-left-section">
                        <h3 className="footer-left-heading">Socials</h3>
                        <div className="footer-links">
                            <a href="#meditation" className="footer-link">Instagram</a>
                            <a href="#newsletter" className="footer-link">Facebook</a>
                            <a href="#newsletter" className="footer-link">So On</a>
                        </div>
                    </div>
                    <div className="footer-left-section">
                        <h3  className="footer-left-heading">Get in Touch</h3>
                        <div className="footer-links">
                            <a href="#contact-us" className="footer-link">Contact Us</a>
                        </div>
                        
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-address">
                        <h3 className="footer-right-heading">Our Address</h3>
                        <p className="footer-right-content">Add1: Delhi, XYZ , Headquaters, India <br/>Add1: Delhi, XYZ , Headquaters, In</p>
                        
                        <hr/>
                    </div>
                    
                        <img className="footer-end" src={footerend}/>
                       
                 
                </div>
            </div>
        </footer>
    );
};

export default Footer;
