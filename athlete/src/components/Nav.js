import React, { useState, useEffect } from 'react';
import '../components/Nav.css';

function Nav() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change 100 to the desired scroll threshold
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

  return (
    <div className={`nav ${scrolling ? 'scrolled' : ''}`}>
      <div className='nav_Content'>
        <div className='nav_Logo'>
          <img src='/images/logo.png' alt='Logo' />
        </div>

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
