import React, { useState } from 'react';
import '../components/CTA.css';
import GetStartedPopUp from '../components/GetStartedPopUp'; // Import the GetStartedPopUp component

function CTA() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='cta'>
      <div className='cta_Content'>
        <div className='cta_Image'>
          <img src='/images/phone-3.png' alt='Phone' />
        </div>
        <div className='cta_Text'>
          <h1>UNLEASH YOUR POTENTIAL,<br />BECOME AN ATHLETE ZERO</h1>
          <button onClick={openPopup}>Get Started</button>
        </div>
      </div>
      {showPopup && <GetStartedPopUp onClose={closePopup} />}
    </div>
  );
}

export default CTA;
