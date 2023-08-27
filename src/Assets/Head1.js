import React, { useState } from 'react';
import './Head1.css';

const Head1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToInfo = () => {
    const infoSection = document.querySelector('.InfoContainer');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('.About');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToService = () => {
    const serviceSection = document.querySelector('.Service');
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGifts = () => {
    const GiftSection = document.querySelector('.ai-Form');
    if (GiftSection) {
      GiftSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

 




  return (
    <header className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-left" onClick={scrollToInfo}>
        <img
          src="https://logo.com/image-cdn/images/kts928pd/production/d1c8c0c9c8e054684c37d30f029f5309c4e3ee7f-731x731.png?w=1080&q=72"
          className="logo"
          alt="Logo"
        />
      </div>
      <button className={`menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
      <div className="navbar-item" onClick={scrollToInfo}>Info</div>
      <div className="navbar-item" onClick={scrollToAbout}>About</div>
      <div className="navbar-item" onClick={scrollToService}>Service</div>
        <div className="navbar-item" onClick={scrollToGifts}>Gifts</div>
        <button className="navbar-button" onClick={scrollToGifts}>Found Gifts</button>
      </div>
    </header>
  );
};

export default Head1;
