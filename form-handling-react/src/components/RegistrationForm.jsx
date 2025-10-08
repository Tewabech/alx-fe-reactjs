// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

export default function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!username) errs.username = 'Username required';
    if (!email) errs.email = 'Email required';
    if (!password) errs.password = 'Password required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      console.log('Form data:', { username, email, password });
      // reset if desired
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          name="username"
          type="text"
          value={username}              /* <-- here */
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={email}                 /* <-- and here */
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={password}              /* <-- and here */
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}