import React, { useState } from 'react';
import '../styles/form.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <form>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={updateInput}
          value={formData.name || ''}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={updateInput}
          value={formData.email || ''}
        />
        <textarea
          type='text'
          name='message'
          placeholder='Message'
          onChange={updateInput}
          value={formData.message || ''}
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
