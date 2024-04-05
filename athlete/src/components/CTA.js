import React from 'react'
import '../components/CTA.css'

function CTA() {
  return (
    <div className='cta'>
        <div className='cta_Content'>
            <div className='cta_Image'>
            <img src='/images/mockup.png' alt='Phone' />
            </div>
            <div className='cta_Text'>
                <h1>UNLEASH YOUR POTENTIAL, BECOME AN ATHLETE ZERO</h1>
                <button>Apply</button>
            </div>
        </div> 
    </div>
  )
}

export default CTA
