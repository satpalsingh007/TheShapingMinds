import logo from '../images/logo.png'
import React, { useEffect, useState } from 'react';
const Header = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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
              
              <a href='\' className='header-links'>Home</a>
              <a href='#' className='header-links'>About Us</a>
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
                <a href="#" className="sub-links">
                Depression
                </a>
                <a href="#" className="sub-links">
                Anxiety
                </a>
                <a href="#" className="sub-links">
                Stress
                </a>
                <a href="#" className="sub-links">
                Trauma
                </a>
                <a href="#" className="sub-links">
                Personal growth
                </a>
               
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
                <a href="#" className="sub-links">
                Premarital Counselling
                </a>
                <a href="#" className="sub-links">
                Relationships Concerns
                </a>
                <a href="#" className="sub-links">
                Marital Discords 
                </a>
                
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
                <a href="#" className="sub-links">
                Emotional & Developmental Concerns
                </a>
                <a href="#" className="sub-links">
                Learning Disabilities
                </a>
                <a href="#" className="sub-links">
                 Autism
                </a>
                <a href="#" className="sub-links">
                 ADHD
                </a>
                
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
                <a href="#" className="sub-links">
                Workplace Counsellings
                </a>
                <a href="#" className="sub-links">
                Mental Wellness Programs
                </a>
                <a href="#" className="sub-links">
                EAPs Employee Assistance Program
                </a>
                <a href="#" className="sub-links">
                Executive Coaching
                </a>
              </div>
            )}
            
            
          </div>
        </div>
              <a href='#' className= "header-top-contact dark header-links">Contact Us</a>
             
              <div className="header-social">
                <ul className="social-list">
        <li className="social-list-item">
          <a className="social-link" href=
          "https://www.pinterest.com/helpguide/" target="_blank"
          aria-label="Pinterest"><svg className="icon" width="24"
          height="24" viewbox="0 0 24 24" fill="none" xmlns=
          "http://www.w3.org/2000/svg">
          <path d=
          "M11.99 2C6.472 2 2 6.47725 2 11.9995C2 16.2355 4.633 19.857 8.35 21.3143C8.262 20.5236 8.184 19.3064 8.384 18.4436C8.566 17.6629 9.556 13.4729 9.556 13.4729C9.556 13.4729 9.257 12.8733 9.257 11.9875C9.257 10.5982 10.062 9.56018 11.065 9.56018C11.918 9.56018 12.329 10.2008 12.329 10.9685C12.329 11.8273 11.783 13.1096 11.502 14.2987C11.267 15.2936 12.001 16.1054 12.981 16.1054C14.756 16.1054 16.122 14.2316 16.122 11.526C16.122 9.13177 14.403 7.45818 11.949 7.45818C9.106 7.45818 7.437 9.59221 7.437 11.7973C7.437 12.6561 7.768 13.578 8.181 14.0795C8.2161 14.1172 8.24088 14.1634 8.25297 14.2136C8.26505 14.2637 8.26403 14.3161 8.25 14.3657C8.174 14.681 8.005 15.3607 7.973 15.4998C7.929 15.683 7.828 15.722 7.638 15.6339C6.391 15.0524 5.611 13.2267 5.611 11.7593C5.611 8.60527 7.9 5.70852 12.212 5.70852C15.678 5.70852 18.371 8.17987 18.371 11.484C18.371 14.9313 16.2 17.7029 13.187 17.7029C12.174 17.7029 11.223 17.1774 10.897 16.5558L10.274 18.9321C10.049 19.8009 9.44 20.8899 9.033 21.5546C9.99111 21.8507 10.9883 22.0008 11.991 22C17.508 22 21.981 17.5227 21.981 12.0005C21.981 6.47825 17.507 2 11.99 2Z"
          ></path></svg></a>
        </li>
        <li className="social-list-item">
          <a className="social-link" href= 
          "https://www.instagram.com/helpguideorg/" target=
          "_blank" aria-label="Instagram"><svg className="icon"
          width="24" height="24" viewbox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d=
          "M20.9471 8.30496C20.937 7.54758 20.7952 6.79773 20.5281 6.08896C20.2964 5.49111 19.9426 4.94816 19.4892 4.49479C19.0359 4.04142 18.4929 3.68761 17.8951 3.45596C17.1954 3.19331 16.4562 3.0513 15.7091 3.03596C14.7471 2.99296 14.4421 2.98096 12.0001 2.98096C9.55807 2.98096 9.24507 2.98096 8.29007 3.03596C7.54323 3.05141 6.80442 3.19343 6.10507 3.45596C5.50713 3.68745 4.96409 4.0412 4.5107 4.49459C4.05732 4.94798 3.70356 5.49102 3.47207 6.08896C3.2089 6.78809 3.06719 7.52707 3.05307 8.27396C3.01007 9.23696 2.99707 9.54196 2.99707 11.984C2.99707 14.426 2.99707 14.738 3.05307 15.694C3.06807 16.442 3.20907 17.18 3.47207 17.881C3.70395 18.4787 4.05797 19.0215 4.51151 19.4747C4.96505 19.9279 5.50813 20.2815 6.10607 20.513C6.8035 20.7862 7.54244 20.9383 8.29107 20.963C9.25407 21.006 9.55907 21.019 12.0011 21.019C14.4431 21.019 14.7561 21.019 15.7111 20.963C16.4582 20.9482 17.1974 20.8066 17.8971 20.544C18.4948 20.312 19.0376 19.9581 19.4909 19.5048C19.9442 19.0515 20.2982 18.5086 20.5301 17.911C20.7931 17.211 20.9341 16.473 20.9491 15.724C20.9921 14.762 21.0051 14.457 21.0051 12.014C21.0031 9.57196 21.0031 9.26196 20.9471 8.30496V8.30496ZM11.9941 16.602C9.44007 16.602 7.37107 14.533 7.37107 11.979C7.37107 9.42496 9.44007 7.35596 11.9941 7.35596C13.2202 7.35596 14.396 7.84302 15.263 8.71C16.13 9.57698 16.6171 10.7529 16.6171 11.979C16.6171 13.2051 16.13 14.3809 15.263 15.2479C14.396 16.1149 13.2202 16.602 11.9941 16.602V16.602ZM16.8011 8.26296C16.6595 8.26309 16.5192 8.2353 16.3884 8.18117C16.2575 8.12704 16.1386 8.04764 16.0385 7.94751C15.9384 7.84738 15.859 7.72849 15.8049 7.59765C15.7507 7.4668 15.7229 7.32656 15.7231 7.18496C15.7231 7.04346 15.7509 6.90334 15.8051 6.77262C15.8592 6.64189 15.9386 6.5231 16.0387 6.42305C16.1387 6.32299 16.2575 6.24363 16.3882 6.18948C16.519 6.13533 16.6591 6.10746 16.8006 6.10746C16.9421 6.10746 17.0822 6.13533 17.2129 6.18948C17.3436 6.24363 17.4624 6.32299 17.5625 6.42305C17.6625 6.5231 17.7419 6.64189 17.7961 6.77262C17.8502 6.90334 17.8781 7.04346 17.8781 7.18496C17.8781 7.78096 17.3961 8.26296 16.8011 8.26296Z"
          ></path>
          <path d=
          "M11.994 14.9821C13.6525 14.9821 14.997 13.6376 14.997 11.9791C14.997 10.3206 13.6525 8.97607 11.994 8.97607C10.3355 8.97607 8.99097 10.3206 8.99097 11.9791C8.99097 13.6376 10.3355 14.9821 11.994 14.9821Z"
          ></path></svg></a>
        </li>
        <li className="social-list-item">
          <a className="social-link" href=
          "https://x.com/helpguideorg" target="_blank"
          aria-label="Twitter"><svg className="icon" width="24"
          height="24" viewbox="0 0 24 24" fill="none" xmlns=
          "http://www.w3.org/2000/svg">
          <path d=
          "M15.9724 17.7572L9.38817 7.93905H8.26234L14.8519 17.7572H15.9724Z"
          ></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d=
          "M12 22.8481C17.5228 22.8481 22 18.371 22 12.8481C22 7.3253 17.5228 2.84814 12 2.84814C6.47715 2.84814 2 7.3253 2 12.8481C2 18.371 6.47715 22.8481 12 22.8481ZM13.3072 11.8543L18 18.8481H14.2917L11.2461 14.3089L7.41396 18.8481H6L10.6207 13.3772L6.24011 6.84814H9.94842L12.6856 10.9281L16.1325 6.84814H17.5465L13.3153 11.8609L13.3072 11.8543Z"
          ></path></svg></a>
        </li>
        <li className="social-list-item">
          <a className="social-link" href=
          "https://www.facebook.com/helpguideorg/" target=
          "_blank" aria-label="Facebook"><svg className="icon" width=
          "24" height="24" viewbox="0 0 24 24" fill="none" xmlns=
          "http://www.w3.org/2000/svg">
          <path d=
          "M2 12.0601C2.00056 14.4561 2.85047 16.7733 4.39696 18.5953C5.94345 20.4173 8.08511 21.6245 10.437 22V14.9679H7.9V12.0601H10.44V9.84651C10.3839 9.32842 10.4419 8.80427 10.6098 8.31127C10.7777 7.81827 11.0515 7.36852 11.4116 6.99396C11.7718 6.6194 12.2095 6.32923 12.6936 6.14404C13.1778 5.95886 13.6965 5.8832 14.213 5.92246C14.963 5.93453 15.713 6.00195 16.453 6.12369V8.59786H15.189C14.9742 8.56955 14.7558 8.59017 14.5499 8.65821C14.3441 8.72624 14.1561 8.83995 13.9998 8.99093C13.8435 9.14191 13.7229 9.3263 13.647 9.53047C13.571 9.73464 13.5416 9.95337 13.561 10.1705V12.0601H16.332L15.889 14.9689H13.561V22C15.4486 21.6998 17.2112 20.8618 18.6402 19.585C20.0691 18.3082 21.1045 16.6461 21.6238 14.7957C22.143 12.9452 22.1244 10.9837 21.5702 9.14354C21.0159 7.30335 19.9492 5.66149 18.4964 4.41235C17.0435 3.1632 15.2653 2.35909 13.3724 2.09521C11.4794 1.83132 9.55092 2.11872 7.81525 2.92338C6.07958 3.72804 4.60942 5.01625 3.5788 6.63551C2.54819 8.25476 2.0003 10.1372 2 12.0601V12.0601Z"
          ></path></svg></a>
        </li>
        <li className="social-list-item">
          <a className="social-link" href=
          "https://www.youtube.com/@helpguide5002" target=
          "_blank" aria-label="Youtube"><svg className="icon" width=
          "24" height="24" viewbox="0 0 24 24" fill="none" xmlns=
          "http://www.w3.org/2000/svg">
          <path d=
          "M12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 6.4775 17.5225 2 12 2ZM15.7008 16.0767C13.9492 16.1967 10.0475 16.1967 8.29833 16.0767C6.40167 15.9467 6.18083 15.0183 6.16667 12C6.18083 8.97583 6.40417 8.05333 8.29833 7.92333C10.0475 7.80333 13.95 7.80333 15.7008 7.92333C17.5983 8.05333 17.8183 8.98167 17.8333 12C17.8183 15.0242 17.5958 15.9467 15.7008 16.0767ZM10.3333 10.0483L14.4308 11.9967L10.3333 13.9517V10.0483V10.0483Z"
          ></path></svg></a>
        </li>
      </ul>

    </div>
          </div>
            {/* Full-Screen Menu */}
            {menuOpen && (
                <div className="full-screen-menu">
                    <div className="menu-links">
                        <div>Home</div>
                        <div>About Us</div>
                        <div>Individuals</div>
                        <div>Contact Us</div>
                    </div>
                </div>
            )}
          <div className="header-bottom">
            
             
              <img className="header-logo logo" src={logo}/>
              <div className="header-links">
                  <div>Individuals</div>
                  <div>Couples & Relationships</div>
                  <div>Children & Adolescents</div>
                  <div>Corporate & Educational Clients</div>
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





