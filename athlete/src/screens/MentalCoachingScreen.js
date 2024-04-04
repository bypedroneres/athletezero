import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Footer from '../components/Footer.js'
import '../screens/Mental.css'

function MentalCoachingScreen() {
  return (
    <div className='mental'>
        <Nav/>
        <Banner/>
        <div className='mental_Content'>
        <h3>Have you ever had the following <spam className='underline'>thoughts?</spam></h3>
        <div className='mental_Cards'>
          <div className='mental_Card_Dark'>
            <p>“I perform much better during practice than in matches.”</p>
          </div>
          <div className='mental_Card_Green'>
            <p>“I cannot stay focused the whole match.”</p>
          </div>
          <div className='mental_Card_Dark'>
            <p>“If I just had the right mindset… no one would beat me.”</p>
          </div>
          <div className='mental_Card_Green'>
            <p>“My nerves are killing me, I feel paralyzed.”</p>
          </div>
        </div>
        <p>You have trained hard, you want it. You have the talent, you know it. Yet, when you step onto the field, your mind deceives you. It’s time to control it; let’s transform this obstacle into a force that brings out your best self.</p>
        <h3>What is <span className='underline'>Mental Performance?</span></h3>
        <p>Our mental coaching sessions are tailored to enhance your performance through the power that your mind unveils. We equip our athletes with a mental toolkit that includes:</p>
        <div className='performance_Cards'>
          <div className='performance_Card'>
          <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 6H24.1429L7 24H25" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29 15H41L29 29H41" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 32H24.0476L15 42H25" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <p>A pre-game routine to prepare you for the game.</p>
          </div>
          <div className='performance_Card'>
          <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 6H24.1429L7 24H25" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29 15H41L29 29H41" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 32H24.0476L15 42H25" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <p>A pre-game routine to prepare you for the game.</p>
          </div>
          <div className='performance_Card'>
          <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 6H24.1429L7 24H25" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29 15H41L29 29H41" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 32H24.0476L15 42H25" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <p>A pre-game routine to prepare you for the game.</p>
          </div>
          <div className='performance_Card'>
          <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 6H24.1429L7 24H25" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29 15H41L29 29H41" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 32H24.0476L15 42H25" stroke="#C4F969" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <p>A pre-game routine to prepare you for the game.</p>
          </div>
        </div>
        </div>
        <Footer/>
        
      
    </div>
  )
}

export default MentalCoachingScreen
