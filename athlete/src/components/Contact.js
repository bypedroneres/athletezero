import React from 'react';
import '../components/Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div className='contact_Content'>
        <h1>Contact Us</h1>
        <form>
          <div className='form_Group'>
            <input type='text' placeholder='First Name' id='firstName' name='firstName' required />
          </div>
          <div className='form_Group'>
            <input type='text' placeholder='Last Name' id='lastName' name='lastName' required />
          </div>
          <div className='form_Group'>
            <input type='email' placeholder='E-mail Name' id='email' name='email' required />
          </div>
          <div className='form_Group'>
            <input type='tel' placeholder='First Name' id='phone' name='phone' />
          </div>
          <div className='form_Group'>
            <textarea id='message' placeholder='Type your message here ...' name='message' required></textarea>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
