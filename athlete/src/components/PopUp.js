import React, { useState } from 'react';
import '../components/PopUp.css';
import firestore from '../firebase'; // Import the Firestore instance

function PopUp({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    instagram: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('applications').add(formData); // Send form data to Firestore
      console.log('Form submitted:', formData);
      onClose(); // Close the popup
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting application. Please try again later.');
    }
  };

  return (
    <div className='popup'>
      <div className='popup_Content'>
        <form onSubmit={handleSubmit}>
          <h4>Application Form</h4>
          <label>
            <input
              type='text'
              placeholder='Full name:'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type='email'
              placeholder='Phone or E-mail:'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type='number'
              placeholder='Age:'
              name='age'
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type='text'
              placeholder='Instagram Account:'
              name='instagram'
              value={formData.instagram}
              onChange={handleChange}
            />
          </label>
          <label>
            <textarea
              placeholder='Message:'
              name='message'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <button type='submit'>Apply</button>
        </form>
      </div>
    </div>
  );
}

export default PopUp;
