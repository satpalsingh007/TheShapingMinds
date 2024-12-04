import React from 'react';
import logo from '../images/logo-light.png'
import footerend from '../images/footer-end.gif'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
              <Link to={'/'} className='footer-logo-container' onClick={() => { window.scrollTo(0, 0); }}> <img className="footer-logo" src={logo} alt="logo" /></Link>
         
               
      
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-left-section">
                        <h3 className="footer-left-heading">Quick Links </h3>
                        <div className="footer-links">
                            <Link to={"/about-us"} href="#meet-team" className="footer-link" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
                            <Link to={"contact-us"} className="footer-link" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
                           
                            <div
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="footer-link"
    role="button"  // added for accessibility
    tabIndex="0"  // added for keyboard navigation
    aria-label="Back to top"  // for screen readers
>
    Back to top
</div>

                          
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
                            <a className='footer-link' href='tel:7987290286'><i className="fa fa-phone" ></i> +91 7987290286</a>
                            <a className='footer-link' href='mailto:theshapingmind@gmail.com'><i className="fa fa-envelope" ></i> theshapingmind@gmail.com</a>
                            <a className='footer-link' href=' https://wa.me/7987290286'><i className="fa fa-whatsapp" ></i> WhatsApp</a>
                        </div>
                        
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-address">
                        <h3 className="footer-right-heading">Our Address</h3>
                        <p className="footer-right-content">110/1/A, Raksha Enclave<br/> Clement Town,Dehradun-248002</p>
                        
                        <hr/>
                    </div>
                    
                        <img alt='the-end-with-flowers' className="footer-end" src={footerend}/>
                       
                 
                </div>
            </div>
        </footer>
    );
};

export default Footer;
