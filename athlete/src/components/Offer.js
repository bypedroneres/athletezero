import React from 'react'
import "../components/Offer.css"

function Offer() {
  return (
    <div className='offer'>
        <div className='offer_Content'>
            <div className='offer_Text'>
                <h1>Join the BEST community of athletes in America.</h1>
                <p>Help us in empowering athletes to achieve their dreams! This is your chance to become part of the solution and spread awareness about the often overlooked non-sport-specific training.</p>
                <div className='offer_Icons'>
                  <div className='offer_Icon'>
                  <img src='/images/ambassadors/image-1.svg' alt='Offer' />
                  <p>PERSONALIZED <br></br>DISCOUNT CODE</p>
                  </div>
                  <div className='offer_Icon'>
                  <img src='/images/ambassadors/image-2.svg' alt='Offer' />
                  <p>PER ATHLETE <br></br>YOU BRING</p>
                  </div>
                  <div className='offer_Icon'>
                  <img src='/images/ambassadors/image-3.svg' alt='Offer' />
                  <p>RECEIVE 5% <br></br>COMMISION</p>
                  </div>
                </div>
            </div>
            <div className='offer_Image'>
            <img src='/images/ambassadors/offer.png' alt='Offer' />
            </div>
        </div>
      
    </div>
  )
}

export default Offer
