import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Footer from '../components/Footer.js'
import '../screens/Mental.css'
import CTA from '../components/CTA.js'

function MentalCoachingScreen() {
  return (
    <div className='mental'>
        <Nav/>
        <Banner/>
        <div className='mental_Content'>
          <div className='mental_Folder'>
            <p>“The <spam className='underline'>greatest athletes</spam> are characterized by their ability to <spam className='underline'>control their minds</spam>.
                Learning how to deal with pressure, reduce anxiety, and flow in the present is key to any <spam className='underline'>athlete’s success</spam>.”</p>
          </div>
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
        <div className='performance_Text'>
        <p>Our mental coaching sessions are tailored to enhance your performance through the power that your mind unveils. We equip our athletes with a mental toolkit that includes:</p>
        <div className='performance_Cards'>
          <div className='performance_Card'>
          <img src='/images/mental/svgs/icon4.png' alt='first card' />
            <p>A pre-game routine to prepare you for the game.</p>
          </div>
          <div className='performance_Card'>
          <img src='/images/mental/svgs/icon3.png' alt='first card' />
            <p>Guidance on performing visualizations by yourself.</p>
          </div>
          <div className='performance_Card'>
          <img src='/images/mental/svgs/icon1.png' alt='first card' />
            <p>Learning to stay present through mindfulness.</p>
          </div>
          <div className='performance_Card'>
          <img src='/images/mental/svgs/icon6.png' alt='first card' />
            <p>Simulation of stress situations to be prepared for when they come.</p>
          </div>
          <div className='performance_Card'>
          <img src='/images/mental/svgs/icon2.png' alt='first card' />
            <p>Understanding the impact of self-talk and learning how to use it.</p>
          </div>
          <div className='performance_Card'>
          <img src='/images/mental/svgs/icon5.png' alt='first card' />
            <p>Creating emotional anchors to induce a desired emotional state.</p>
          </div>
          </div>
          </div>
          </div>
        <CTA/>
        <Footer/>
        
      
    </div>
  )
}

export default MentalCoachingScreen
