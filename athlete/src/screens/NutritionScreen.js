import React from 'react'
import Nav from '../components/Nav'
import "../screens/Nutrition.css"
import Heading from '../components/Heading'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function NutritionScreen() {
  return (
    <div className='nutrition'>
        <Nav/>
        <Heading/>
        <div className='nutrition_Content'>
  <h3>Have you ever had the following <span className='underline'>thoughts?</span></h3>
  <div className='nutrition_Cards'>
    <div className='nutrition_Card_Dark'>
      <p>"DAMN! I wish I had more energy to win this game."</p>
    </div>
    <div className='nutrition_Card_Green'>
      <p>"Why do I still get injured despite doing all the prevention exercises my coach told me?"</p>
    </div>
    <div className='nutrition_Card_Dark'>
      <p>"How come my recovery periods are so much longer than my teammates’?"</p>
    </div>
  </div>
  <p>Imagine a type of training where you didn't have to get tired—a method that prepares you for competition without requiring a single drop of physical effort. Everyone would be doing it, right? Who would be foolish enough not to? Well, guess what? It exists. It's called nutrition.
</p>
  <h3>What is <span className='underline'>Nutrition</span>?</h3>
  <p>Our nutritional coaching sessions are tailored to enhance your performance through the power that your mind unveils. We equip our athletes with a nutritional toolkit that includes:</p>
  <div className='nutrition_Performance_Cards'>
  <div className='performance_Card'>
    <h3>PRIOR</h3>
    <p>to a game, adjusted according to the anticipated intensity of the upcoming match.</p>
  </div>
  <div className='performance_Card'>
    <h3>Throughout</h3>
    <p>a game, tailored to the dynamics of the ongoing match.</p>
  </div>
  <div className='performance_Card'>
    <h3>POST GAME</h3>
    <p>depending on the intensity of the match played.</p>
  </div>
  <div className='performance_Card'>
    <h3>Adjusted</h3>
    <p>On a regular day, adjusted based on the individual athlete's goals.</p>
  </div>
</div>

</div>
<CTA/>
<Footer/>

      
    </div>
  )
}

export default NutritionScreen
