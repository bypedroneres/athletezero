import React from 'react';
import "../components/About.css";

function About() {
  // Link to the Google Form
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSchkoH17qTzbaQ-t_rHl6ATJ38C95i9eMBBUNn9pRvGW6FSGw/viewform";

  return (
    <div className='about'>
        <div className='about_Content'>
            <div className='about_Image'>
            <img src='/images/phone-1.png' alt='Phone' />
            </div>
            <div className='about_Text'>
                <h2>PHILOSOPHY:</h2>
                <p>The only thing that all athletes have in common is that they are all different. Every single athlete has different needs, goals, motivations… We treat each athlete as unique, adapting our approach to provide exactly what they need.</p>
                <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
                    <button>
                        Get Started
                    </button>
                </a>
            </div>
        </div>      
    </div>
  );
}

export default About;
