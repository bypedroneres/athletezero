import React from 'react';
import '../components/CTA.css';

function CTA() {
  // Link to the Google Form
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSchkoH17qTzbaQ-t_rHl6ATJ38C95i9eMBBUNn9pRvGW6FSGw/viewform";

  return (
    <div className='cta'>
      <div className='cta_Content'>
        <div className='cta_Image'>
          <img src='/images/phone-3.png' alt='Phone' />
        </div>
        <div className='cta_Text'>
          <h1>UNLEASH YOUR POTENTIAL,<br />BECOME AN ATHLETE ZERO</h1>
          {/* Link added to the button */}
          <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
            <button>Get Started</button>
          </a>
        </div>
      </div> 
    </div>
  );
}

export default CTA;
