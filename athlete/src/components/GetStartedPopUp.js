import React, { useState } from 'react';
import '../components/PopUp.css';
import firestore from '../firebase'; // Import the Firestore instance

function GetStartedPopUp({ onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    sport: '',
    servicesInterest: '',
    time: '', // Add time field to formData state
    discountCode: ''
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
      await firestore.collection('getStarted').add(formData); // Send form data to Firestore
      console.log('Form submitted:', formData);
      onClose(); // Close the popup
      alert('Get Started form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting Get Started form. Please try again later.');
    }
  };

  return (
    <div className='popup'>
      <div className='popup_Content'>
        <form onSubmit={handleSubmit}>
          <h4>Get Started Form</h4>
          <label>
            <input
              type='text'
              placeholder='E-mail:'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <input
              type='text'
              placeholder='Athletes Full Name:'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <input
              type='number'
              placeholder='Athletes Age:'
              name='age'
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <input
              type='text'
              placeholder='Athletes Sport:'
              name='sport'
              value={formData.sport}
              onChange={handleChange}
              required
            />
          </label>
          <label>
          <select
            name='servicesInterest'
            value={formData.servicesInterest}
            onChange={handleChange}
            required
          >
            <option value=''>Select Services</option>
            <option value='mental coaching'>Mental Coaching</option>
            <option value='nutrition'>Nutrition</option>
            <option value='both'>Both</option>
          </select>
        </label>
          <label>
            <input
              type='text'
              placeholder='List 3 available times for an online session:'
              name='time'
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <input
              type='text'
              placeholder='Discount Code (optional):'
              name='discountCode'
              value={formData.discountCode}
              onChange={handleChange}
            />
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default GetStartedPopUp;
