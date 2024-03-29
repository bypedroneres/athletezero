import React from 'react'
import "../components/Services.css"

function Services() {
  return (
    <div className='services'>
        <div className='services_Content'>
            <h2>OUR SERVICES</h2>
            <div className='services_Cards'>
                <div className='services_Card-1'>
                <div className='services_Text'>
                    <h3>MENTAL COACHING</h3>
                    <p>The greatest athletes are characterized by their ability to control their minds. Learning how to deal with pressure, reduce anxiety, and flow in the present is key to any athlete's success.</p>
                </div>
                </div>
                <div className='services_Card-2'>
                    <div className='services_Text'>
                    <h3>NUTRITION</h3>
                    <p>Generic nutritional advice doesn’t set anyone apart; to be successful, you have to be different, you have to be the best, you have to create a plan and stick to it.</p>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Services
