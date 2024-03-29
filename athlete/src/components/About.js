import React from 'react'
import "../components/About.css"

function About() {
  return (
    <div className='about'>
        <h2>ABOUT US</h2>
        <div className='about_Content'>
            <div className='about_Image'>
            <img src='/images/mockup.png' alt='Alice Ferlito' />
            </div>
            <div className='about_Text'>
                <h2>PHILOSOPHY:</h2>
                <p>The only thing that all athletes have in common is that they are all different. Every single athlete has different needs, goals, motivations… We treat each athlete as unique, adapting our approach to provide exactly what they need.</p>
                <button>
                    Sign up
                </button>
            </div>

        </div>      
    </div>
  )
}

export default About
