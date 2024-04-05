import React, { useState } from 'react';
import '../components/PopUp.css';

function PopUp({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    highschool: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log('Form submitted:', formData);
    onClose(); // Close the popup after form submission
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
              placeholder='High School:'
              name='highschool'
              value={formData.highschool}
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
