import React from 'react';
import "../components/Application.css";

function Application() {
  return (
    <div className='application'>
      <div className='application_Content'>
        <h1>Become an Ambassador, Apply Today</h1>
        <div className='application_Buttons'>
          <button className='learn_More_Button'>Learn more</button>
          <button className='apply_Button'>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default Application;
