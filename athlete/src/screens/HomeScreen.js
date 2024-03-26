import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Partners from '../components/Partners'

function HomeScreen() {
  return (
    <div className='home'>
        <Nav/>
        <Hero/>
        <Partners/>
    </div>
  )
}

export default HomeScreen
