import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Services from '../components/Services';
import Mission from '../components/Mission.js';
import Testimonials from '../components/Testimonials.js';
import Founder from '../components/Founder.js';
import FAQ from '../components/FAQ.js';
import Footer from '../components/Footer.js';
import Story from '../components/Story.js';
import About from '../components/About.js';
import './HomeScreen.css'; // Import your CSS file for animations

function HomeScreen() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home'>
      <Nav />
      <Hero />
      <Mission />
      <Services />
      <Partners />
      <About />
      <Testimonials />
      <Story />
      <Founder />
      <FAQ />
      <Footer />
    </div>
  );
}

export default HomeScreen;
