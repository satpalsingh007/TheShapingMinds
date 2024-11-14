import React from 'react';
import logo from '../images/logo-light.png'
import footerend from '../images/footer-end.gif'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
         
                <img className="footer-logo" src={logo} alt="logo" />
      
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-left-section">
                        <h3 className="footer-left-heading">Quick Links </h3>
                        <div className="footer-links">
                            <Link to={"/about-us"} href="#meet-team" className="footer-link" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
                            <a href="#our-story" className="footer-link">Our Story</a>
                          
                        </div>
                    </div>
                    <div className="footer-left-section">
                        <h3 className="footer-left-heading">Socials</h3>
                        <div className="footer-links">
                            <a className="footer-link" href="https://www.linkedin.com/company/aakrititheshapingmind/" target="_blank">Linkedin</a>
                            <a href="https://www.facebook.com/TheShapingMind" target="_blank" className="footer-link">Facebook</a>
                          
                        </div>
                    </div>
                    <div className="footer-left-section">
                        <h3  className="footer-left-heading">Get in Touch</h3>
                        <div className="footer-links">
                            <Link to={"contact-us"} className="footer-link" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
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
