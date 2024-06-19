import React from 'react';
import "../components/Application.css";

function SingleButtonComponent() {
  // Link to the Google Form
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSchkoH17qTzbaQ-t_rHl6ATJ38C95i9eMBBUNn9pRvGW6FSGw/viewform";

  return (
    <div className='application'>
      <div className='application_Content'>
        <h1>UNLEASH YOUR POTENTIAL, <br />BECOME AN ATHLETE ZERO</h1>
        <div className='application_Buttons'>
          {/* Link added to the button */}
          <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
            <button className='apply_Button'>Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleButtonComponent;
