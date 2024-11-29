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
              
              <Link to={'/'} className='header-links header-underline' onClick={() => { window.scrollTo(0, 0);}}>Home</Link>
              <Link to={"/about-us"}  className='header-links header-underline'onClick={() => { window.scrollTo(0, 0); }}>About Us</Link>
              <div className="drop-down">
          <a href='#' onClick={toggleDropdown} className='header-links services'> 
            Services  <span className={`arrow ${dropdownOpen ? 'rotate' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg></span>
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
              <div><svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg></div>
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
              <div><svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg></div>
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
              <div><svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg></div>
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
              <div><svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg></div>
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
              <Link to={'/contact-us'} className= "header-top-contact dark header-links" onClick={() => { window.scrollTo(0, 0); }}>Contact Us</Link>
             
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
                        <div><Link to={'/'} onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>Home</Link></div>
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
            
             <Link to={'/'} onClick={() => { window.scrollTo(0, 0); }}><img className="header-logo logo" src={logo}/></Link>
              
              <div className="header-bottom-links">
                  <Link className='header-bottom-underline' to={'/individuals-blogs'} onClick={() => { window.scrollTo(0, 0); }}>Individuals</Link>
                  <Link  className='header-bottom-underline' to={'/couples-blogs'} onClick={() => { window.scrollTo(0, 0);  }}>Couples & Relationships</Link>
                  <Link  className='header-bottom-underline' to={'/children-blogs'}onClick={() => { window.scrollTo(0, 0);  }}>Children & Adolescents</Link>
                  <Link  className='header-bottom-underline' to={'/corporation-blogs'} onClick={() => { window.scrollTo(0, 0);  }}>Corporate & Educational Clients</Link>
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