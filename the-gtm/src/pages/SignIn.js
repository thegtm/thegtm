import React, { useState } from 'react';
import './SignIn.css'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container">
      
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />


        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        
        <button type="submit">Submit</button>
        <div class="links-container">
            <a href="/register" class="link">Don't have an account?</a>
            <a href="/reset-password" class="link">Reset Password</a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;