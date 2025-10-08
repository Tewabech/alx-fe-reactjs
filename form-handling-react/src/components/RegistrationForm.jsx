// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

export default function RegistrationForm() {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const errs = {};
    if (!formValues.username) {
      errs.username = 'Username is required';
    }
    if (!formValues.email) {
      errs.email = 'Email is required';
    }
    if (!formValues.password) {
      errs.password = 'Password is required';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit logic — e.g. send data to server
      console.log('Form submitted:', formValues);
      // Optionally reset:
      setFormValues({ username: '', email: '', password: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          name="username"
          type="text"
          value={formValues.username}
          onChange={handleChange}
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}