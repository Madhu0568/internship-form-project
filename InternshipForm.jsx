import React, { useState } from 'react';
import axios from 'axios';

function InternshipForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    domain: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/apply', formData);
      setMessage(response.data.message);
      setFormData({ name: '', email: '', college: '', domain: '' });
    } catch (error) {
      setMessage('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="college" placeholder="College" value={formData.college} onChange={handleChange} required />
      <input type="text" name="domain" placeholder="Domain" value={formData.domain} onChange={handleChange} required />
      <button type="submit">Apply</button>
      <p>{message}</p>
    </form>
  );
}

export default InternshipForm;
