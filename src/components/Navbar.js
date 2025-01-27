import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>ArogyaDesk</h1>
      <ul>
        
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/ai-diagnosis">AI Diagnosis</Link></li>
        <li><Link to="/tele-doctor">Tele Doctor</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/health-history">Health History</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
