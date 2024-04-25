import React, { useState } from 'react';
import '../components/About.css';
import GetStartedPopUp from '../components/GetStartedPopUp'; // Import the GetStartedPopUp component

function About() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='about'>
      <div className='about_Content'>
        <div className='about_Image'>
          <img src='/images/phone-1.png' alt='Phone' />
        </div>
        <div className='about_Text'>
          <h2>PHILOSOPHY:</h2>
          <p>The only thing that all athletes have in common is that they are all different. Every single athlete has different needs, goals, motivations… We treat each athlete as unique, adapting our approach to provide exactly what they need.</p>
          <button onClick={openPopup}>Get Started</button>
        </div>
      </div>
      {showPopup && <GetStartedPopUp onClose={closePopup} />}
    </div>
  );
}

export default About;
