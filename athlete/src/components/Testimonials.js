import React from 'react'
import "../components/Testimonials.css"

function Testimonials() {
  return (
    <div className='testimonials'>
        <div className='testimonials_Content'>
            <h2>TESTIMONIALS</h2>
            <div className='testimonials_Cards'>
                <div className='testimonials_Card'>
                    <div className='testimonials_Header'>
                        <div className='testimonials_Pic'>
                        <img src='/images/testimonials/alice.png' alt='Alice Ferlito' />
                        </div>
                        <div className='testimonials_Name'>
                        <h3>Alice Ferlito</h3>
                        <p>Princeton University</p>
                        </div>
                    </div>
                    <div className='tetimonials_Text'>
                        <p>"Discovering Athlete Zero has been a game-changer for me. I couldn't imagine that nutrition would have such a big impact in how I feel and perform."</p>
                    </div>
                </div>
                <div className='testimonials_Card'>
                    <div className='testimonials_Header'>
                        <div className='testimonials_Pic'>
                        <img src='/images/testimonials/alice.png' alt='Alice Ferlito' />
                        </div>
                        <div className='testimonials_Name'>
                        <h3>Alice Ferlito</h3>
                        <p>Princeton University</p>
                        </div>
                    </div>
                    <div className='tetimonials_Text'>
                        <p>”Athlete Zero has been a game-changer for me. Their mental coaching sessions helped me overcome my performance anxiety, and now I'm able to compete with confidence.”</p>
                    </div>
                </div>
                <div className='testimonials_Card'>
                    <div className='testimonials_Header'>
                        <div className='testimonials_Pic'>
                        <img src='/images/testimonials/alice.png' alt='Alice Ferlito' />
                        </div>
                        <div className='testimonials_Name'>
                        <h3>Alice Ferlito</h3>
                        <p>Princeton University</p>
                        </div>
                    </div>
                    <div className='tetimonials_Text'>
                        <p>”Athlete Zero has been a game-changer for me. Their mental coaching sessions helped me overcome my performance anxiety, and now I'm able to compete with confidence.”</p>
                    </div>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Testimonials
