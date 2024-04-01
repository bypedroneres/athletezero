import React, { useState, useEffect } from 'react';
import '../components/Nav.css';

function Nav() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`nav ${scrolling ? 'scrolled' : ''}`}>
      <div className='nav_Content'>
        <div className='nav_Logo'>
          <img src='/images/logo.png' alt='Logo' />
        </div>

        {/* Desktop Menu */}
        <div className='nav_Items'>
          <p>ABOUT US</p>
          <p>MENTAL COACHING</p>
          <p>NUTRITION</p>
          <p>CONTACT US</p>
        </div>
        
        {/* Mobile Menu */}
        <div className='nav_Button'>
          <button onClick={toggleMenu}>
            Menu
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <div className='nav_MobileItems'>
            <p>ABOUT US</p>
            <p>MENTAL COACHING</p>
            <p>NUTRITION</p>
            <p>CONTACT US</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
