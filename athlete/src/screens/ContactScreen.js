import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PopUp from '../components/PopUp'

function ContactScreen() {
  return (
    <div className='contact'>
        <Nav/>
        <div className='contact_Content'>
        <PopUp/>
        <Footer/>
        </div>
    </div>
  )
}

export default ContactScreen
