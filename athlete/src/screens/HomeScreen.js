import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Services from '../components/Services'
import Mission from '../components/Mission.js'

function HomeScreen() {
  return (
    <div className='home'>
        <Nav/>
        <Hero/>
        <Services/>
        <Partners/>
        <Mission/>
    </div>
  )
}

export default HomeScreen
