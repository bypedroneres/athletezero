import React from 'react';
import "../components/Application.css";

function Application() {
  return (
    <div className='application'>
      <div className='application_Content'>
        <h1>Become an Ambassador, Apply Today</h1>
        <div className='application_Buttons'>
          <a href='/info'>
          <button className='learn_More_Button'>
            Learn more
            </button>
            </a>
            <a href='/info'>
          <button className='apply_Button'>Apply</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Application;
