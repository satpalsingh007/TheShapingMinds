import logo from '../images/logo.png'
import React, { useEffect, useState } from 'react';
import About from './About';
import { Link } from "react-router-dom";

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.getElementById('checkbox').checked = !menuOpen; // Sync checkbox with menu state
};

 
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDropdownClick = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  const handleScroll = () => {
      if (window.scrollY > 50) {
          setIsLightMode(true);
      } else {
          setIsLightMode(false);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className={`header ${isLightMode ? 'light' : 'dark'}`}>
          <div className="header-top">
              
              <Link to={'/home'} className='header-links' onClick={() => window.scrollTo(0, 0)}>Home</Link>
              <Link to={"/about-us"}  className='header-links' onClick={() => window.scrollTo(0, 0)}>About Us</Link>
              <div className="drop-down">
          <a href='#' onClick={toggleDropdown} className='header-links'> 
            Services ▾
          </a>
          <div
            className={`drop-down-list ${dropdownOpen ? "visible" : "hidden"}`}
          >
            <div
              className={`drop-down-list-item ${
                activeDropdown === 1 ? "active" : ""
              }`}
              onClick={() => handleDropdownClick(1)}
            >
              <a href="#">Individuals
              </a>
              <div>{"→"}</div>
            </div>
            {activeDropdown === 1 && (
              <div className="sub-drop-down-list-item">
                <Link to={'/depression'}  className="sub-links" onClick={ toggleDropdown}>
                Depression
                </Link>
                <Link to={'/anxiety'} className="sub-links" onClick={ toggleDropdown}>
                Anxiety
                </Link>
                <Link to={'/stress'} className="sub-links" onClick={ toggleDropdown}>
                Stress
                </Link>
                <Link to={'/trauma'} className="sub-links" onClick={ toggleDropdown}>
                Trauma
                </Link>
                <Link to={'/personal-growth'} className="sub-links" onClick={ toggleDropdown}>
                Personal growth
                </Link>
               
              </div>
            )}
            <div
              className={`drop-down-list-item ${
                activeDropdown === 2 ? "active" : ""
              }`}
              onClick={() => handleDropdownClick(2)}
            >
              <a href="#">Couple & Relationships</a>
              <div>{"→"}</div>
            </div>
            {activeDropdown === 2 && (
              <div className="sub-drop-down-list-item">
                <Link  to={'/premarital-counselling'} className="sub-links" onClick={ toggleDropdown}>
                Premarital Counselling
                </Link>
                <Link to={'/relationship-concerns'} className="sub-links" onClick={ toggleDropdown}>
                Relationships Concerns
                </Link>
                <Link to={'/marital-discords'} className="sub-links" onClick={ toggleDropdown}>
                Marital Discords 
                </Link>
                
              </div>
            )}
            <div
              className={`drop-down-list-item ${
                activeDropdown === 3 ? "active" : ""
              }`}
              onClick={() => handleDropdownClick(3)}
            >
              <a href="#"> ⁠⁠Children & Adolescents</a>
              <div>{"→"}</div>
            </div>
            {activeDropdown === 3 && (
              <div className="sub-drop-down-list-item">
                <Link  to={'/emotional-concern'} className="sub-links" onClick={ toggleDropdown}>
                Emotional & Developmental Concerns
                </Link>
                <Link  to={'/learning-disabilities'} className="sub-links" onClick={ toggleDropdown}>
                Learning Disabilities
                </Link>
                <Link  to={'/autism'} className="sub-links" onClick={ toggleDropdown}>
                 Autism
                </Link>
                <Link  to={'/adhd'} className="sub-links" onClick={ toggleDropdown}>
                 ADHD
                </Link>
                
              </div>
            )}
            <div
              className={`drop-down-list-item ${
                activeDropdown === 4 ? "active" : ""
              }`}
              onClick={() => handleDropdownClick(4)}
            >
              <a href="#"> ⁠⁠Corporate and Educational Clients</a>
              <div>{"→"}</div>
            </div>
            {activeDropdown === 4 && (
              <div className="sub-drop-down-list-item">
                <Link to={'/workplace-counselling'} className="sub-links" onClick={ toggleDropdown}>
                Workplace Counsellings
                </Link>
                <Link  to={'/mental-wellness'} className="sub-links" onClick={ toggleDropdown}>
                Mental Wellness Programs
                </Link>
                <Link  to={'/employee-assistance-program'} className="sub-links" onClick={ toggleDropdown}>
                EAPs Employee Assistance Program
                </Link>
                <Link  to={'/executive-coaching'} className="sub-links" onClick={ toggleDropdown}>
                Executive Coaching
                </Link>
              </div>
            )}
            
            
          </div>
        </div>
              <Link to={'/contact-us'} className= "header-top-contact dark header-links" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
             
              <div className="header-social">
                <ul className="social-list">
        
     
        
        <li className="social-list-item">
          <a className="social-link" href=
          "https://www.facebook.com/TheShapingMind" target=
          "_blank" aria-label="Facebook"> <i className="fa fa-facebook-square icon" ></i></a>
        </li>
        <li className="social-list-item">
          <a className="social-link" href=
          "https://www.linkedin.com/company/aakrititheshapingmind/" target=
          "_blank" aria-label="linkedin"> <i className="fa fa-linkedin-square icon" ></i></a>
        </li>
      </ul>

    </div>
          </div>
            {/* Full-Screen Menu */}
            {menuOpen && (
                <div className="full-screen-menu">
                    <div className="menu-links">
                        <div><Link to={'/home'} onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>Home</Link></div>
                        <div><Link to={'/about-us'} onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>About Us</Link></div>
                        <div ><Link to={'/individuals-blogs'} onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>Individuals</Link></div>
                        <div > <Link to={'/couples-blogs'} onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>Couples & Relationships</Link></div>
                        <div > <Link to={'/children-blogs'} onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>Children & Adolescents</Link></div>
                        <div ><Link to={'/corporation-blogs'} onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>Corporate & Educational Clients</Link></div>

                        <div><Link to={'/contact-us'} onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>Contact Us  </Link></div>
                    </div>
                </div>
            )}
          <div className="header-bottom">
            
             
              <img className="header-logo logo" src={logo}/>
              <div className="header-links">
                  <Link to={'/individuals-blogs'} onClick={() => window.scrollTo(0, 0)}>Individuals</Link>
                  <Link to={'/couples-blogs'} onClick={() => window.scrollTo(0, 0)}>Couples & Relationships</Link>
                  <Link to={'/children-blogs'} onClick={() => window.scrollTo(0, 0)}>Children & Adolescents</Link>
                  <Link to={'/corporation-blogs'} onClick={() => window.scrollTo(0, 0)}>Corporate & Educational Clients</Link>
              </div>
               {/* Menu Button */}
             <input type="checkbox" id="checkbox" className="menu-checkbox" onChange={toggleMenu} />
                <label htmlFor="checkbox" className="toggle">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>
              
          </div>
      </div>
  );
};

export default Header;