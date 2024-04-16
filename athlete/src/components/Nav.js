import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
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
        {/* Logo as a Link to home screen */}
        <Link to="/" className='nav_Logo'>
          <img src='/images/logo.png' alt='Logo' />
        </Link>

        {/* Desktop Menu */}
        <div className='nav_Items'>
          <Link to="/mental">MENTAL COACHING</Link>
          <Link to="/nutrition">NUTRITION</Link>
          <Link to="/ambassadors">AMBASSADORS</Link>
          <Link to="/contact">CONTACT US</Link>
        </div>
        
        {/* Mobile Menu */}
        <div className='nav_Button'>
          <button onClick={toggleMenu}>
          <p>&#9776;</p>
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <div className='nav_MobileItems'>
            <Link to="/mental">MENTAL COACHING</Link>
            <Link to="/nutrition">NUTRITION</Link>
            <Link to="/ambassadors">AMBASSADORS</Link>
            <Link to="/contact">CONTACT US</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
