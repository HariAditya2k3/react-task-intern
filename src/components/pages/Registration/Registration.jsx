// Registration.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';
import Email_icon from '../Assets/Email.png';
import Password_icon from '../Assets/Password.png';
import Person_icon from '../Assets/Person.png';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="registration-container">
          <div className='registration'>
              <div className='register'>
              <h2>Registration</h2>
          </div>
        
        <form className="registration-form" onSubmit={handleRegister}>
          <div className="input-container">
          <img src={Email_icon} alt='' />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
          <img src={Person_icon} alt='' />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <img src={Password_icon} alt='' />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
