import React from 'react'
import Nav from '../components/Nav'
import "../screens/FounderScreen.css"
import Footer from '../components/Footer'

function FounderScreen() {
  return (
    <div className='founder_Screen'>
        <Nav/>
        <div className='founder_Banner'>
            <div className='founder_Banner_Content'>
            <h3>Story</h3>
            <div className='founder_Photo'>
              
            </div>
            <p>Our founder Luis was one of the best tennis players in Spain when he was young. He won tournaments with Carlos Alcaraz, won the National Championship, and proudly represented the Spanish National Team. Unfortunately, as he grew up, due to a set of circumstances, his dream of becoming the world's number-one tennis player faded away. Many see it as a failure, however, in hindsight, Luis knows it was part of a much bigger plan that destiny had for him. Today, Luis has decided to use the lessons learned from all the mistakes he made to empower a new generation of athletes to reach the pinnacle of their respective sports.</p>
            </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default FounderScreen
