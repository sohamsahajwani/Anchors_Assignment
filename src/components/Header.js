import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = ({ totalScore, userVariable, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className='header'>
      <p>{userVariable}</p>
        <h3>Total Score: {totalScore}</h3>
      <div onClick={() => onLogout()}>
        
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
