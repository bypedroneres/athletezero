// Contact.js
import React from 'react';
import '../components/Contact.css';
import firestore from '../firebase';

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    try {
      await firestore.collection('contacts').add({
        firstName,
        lastName,
        email,
        phone,
        message
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className='contact_Form'>
      <div className='contact_Form_Content'>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
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
            <input type='tel' placeholder='Phone' id='phone' name='phone' />
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
