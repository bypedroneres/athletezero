import React from 'react'
import "../screens/Info.css"
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function InfoScreen() {
  return (
    <div className='info'>
        <Nav/>
        <div className='info_Content'>
            <h2>About Our Program:</h2>
            <p>
              (No need to worry about long-term commitments or purchase requirements!)<br/><br/>

              As an ambassador, we ask that you post twice a month on your feed or stories. It can be as simple as reposting one of our posts. That's it.<br/><br/>

              You are allowed to share your code through any of your social media accounts! The more you post and share your code, the more people will be interested in purchasing through your code, which means you will earn more through your $50 + 5% commission!<br/><br/>

              <strong>How Does This Work?</strong><br/><br/>

              Let's say Jake wants to become an ambassador. The first step is to apply through the following link: <br/><br/>

              Once Jake is accepted to be an ambassador, he will receive a discount code and can inform all his friends through social media or any other means that they can get 10% off using his personal code "JAKE10".<br/><br/>

              Jake now earns $50 + 5% PASSIVELY every time one of his friends makes a purchase using his code!<br/><br/>

              <strong>FAQ:</strong><br/><br/>

              <em>How will I get my personal code?</em><br/>
              After applying to be an ambassador, you will receive an email confirming your acceptance into the ambassador program. In that email, you will receive your personal discount code, which you can then share with whomever you choose.<br/><br/>

              <em>How much discount do my followers get?</em><br/>
              Your followers will get 10% off using your unique code.<br/><br/>

              <em>What happens if no one buys from my code?</em><br/>
              Nothing. You will continue to be an ambassador for as long as you wish, as long as you maintain the commitment of posting twice a month about Athlete Zero on your social media.<br/>
            </p>
        </div>
        <Footer/>
    </div>
  )
}

export default InfoScreen
