import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import "./Login.css";
var b="";


const Login = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setOtpSent(true);
    updateUser(email, 0); 
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      navigate('/profile');
      b=email;
    } else {
      alert('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div className='a1'>
      {!otpSent ? (
        <form onSubmit={handleEmailSubmit}>
          <label>Email ID:</label>
          <input
            type="email"
            value={email}
            placeholder='Enter Your Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit}>
          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
export {b};
