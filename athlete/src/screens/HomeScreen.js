import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Services from '../components/Services'
import Mission from '../components/Mission.js'
import Testimonials from '../components/Testimonials.js'
import Founder from '../components/Founder.js'
import FAQ from '../components/FAQ.js'
import Footer from '../components/Footer.js'
import Story from '../components/Story.js'
import About from '../components/About.js'


function HomeScreen() {
  return (
    <div className='home'>
        <Nav/>
        <Hero/>
        <Mission/>
        <Services/>
        <Partners/>
        <About/>
        <Testimonials/>
        <Story/>
        <Founder/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default HomeScreen
