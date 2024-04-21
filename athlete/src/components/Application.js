import React, { useState } from 'react';
import "../components/Application.css";
import PopUp from '../components/PopUp';

function Application() {


  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='application'>
      <div className='application_Content'>
        <h1>Become an Ambassador, Apply Today</h1>
        <div className='application_Buttons'>
          <a href='/info'>
            <button className='learn_More_Button'>Learn more</button>
          </a>
          <button className='apply_Button' onClick={openPopup}>Apply</button>
        </div>
      </div>
      {/* Render popup if showPopup is true */}
      {showPopup && <PopUp onClose={closePopup} />}
    </div>
  );
}

export default Application;
