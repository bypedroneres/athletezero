import React from 'react';
import "../components/Application.css";

function SingleButtonComponent() {
  return (
    <div className='application'>
      <div className='application_Content'>
        <h1>UNLEASH YOUR POTENTIAL, <br></br>BECOME AN ATHLETE ZERO</h1>
        <div className='application_Buttons'>
          <a href='/info'>
            <button className='apply_Button'>Apply</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleButtonComponent;
