import React, { useState, useEffect } from 'react';
import '../components/Nav.css';

function Nav() {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`nav ${scrolling ? 'scrolled' : ''}`}>
      <div className='nav_Content'>
        <div className='nav_Logo'>
          <img src='/images/logo.png' alt='Logo' />
        </div>

        {/* Mobile Menu Button */}
        <div className='mobile_Menu_Button' onClick={toggleMobileMenu}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='mobile_Menu'>
            <p>ABOUT US</p>
            <p>MENTAL COACHING</p>
            <p>NUTRITION</p>
            <p>CONTACT US</p>
          </div>
        )}

        {/* Desktop Menu */}
        <div className='nav_Items'>
          <p>ABOUT US</p>
          <p>MENTAL COACHING</p>
          <p>NUTRITION</p>
          <p>CONTACT US</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
