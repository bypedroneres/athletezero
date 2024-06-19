import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function ContactScreen() {
  return (
    <div className='contact'>
        <Nav/>
        <div className='contact_Content'>
          <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactScreen
