import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Person_icon from '../Assets/Person.png';
import Password_icon from '../Assets/Password.png';
import './Login.css';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();

    
    if (!email || !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    
    setMessage('Instructions to reset your password have been sent to your email.');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    
    if (username === 'hari' && password === 'password') {
      handleLogin();
      navigate('/dashboard'); 
      setLoginSuccess(true); 
    } else {
      
      if (username !== 'hari') {
        setUsernameError('Invalid username');
      }
      if (password !== 'password') {
        setPasswordError('Invalid password');
      }
    }
  };

  const validateEmail = (email) => {
    
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <div className='Login-Container'>
      <div >
      <div className='centered'>
        <div className='mainbox'>
          <div className='image'>
            <h1>Login</h1>
          </div>
        {showForgotPassword ? (
            <div className='forgot-password-container'>
              <h2>Forgot Password</h2>
              {message && <div className='success-message'>{message}</div>}
              <form onSubmit={handleForgotPasswordSubmit}>
                <div className='input'>
                  <img src={Person_icon} alt='' />
                  <input type="text" value={email} placeholder='Email' onChange={handleEmailChange} />
                  {emailError && <div className='error-message'>{emailError}</div>}
                </div>
                <div className='submit'>
                  <button className="button">Reset Password</button>
                </div>
              </form>
              <div className='back-to-login' onClick={() => setShowForgotPassword(false)}>Back to Login</div>
            </div>
          ) : (
            <div>
              <div className='inputs'>
                <div className='input'>
                  <img src={Person_icon} alt='' />
                  <input type="text" id="username" value={username} placeholder='Username' onChange={handleUsernameChange} />
                  {usernameError && <div className='error-message'>{usernameError}</div>}
                </div>

                <div className='input'>
                  <img src={Password_icon} alt='' />
                  <input type="password" id="password" value={password} placeholder='Password' onChange={handlePasswordChange} />
                  {passwordError && <div className='error-message'>{passwordError}</div>}
                </div>
                
                <div className="remember-me">
                  <label>
                    <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
                    Remember Me
                  </label>
                </div>
              </div>

              <div className='submit-container'>
                <form onSubmit={handleLoginSubmit}>
                  <div className='submit'>
                    <button className="button">Login</button>
                  </div>
                </form>
              </div>

              <div className='forgot-password' onClick={handleForgotPassword}> Forgot password? </div>
            </div>
          )}

        
        </div>
      </div>
    </div>
    </div>
  );
}
export default Login;
