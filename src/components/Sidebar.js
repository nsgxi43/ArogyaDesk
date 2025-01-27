import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <nav className="sidebar bg-light p-3">
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <Link to="/health-history" className="nav-link">Health History</Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/ai-diagnosis" className="nav-link">AI Diagnosis</Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/tele-doctor-pool" className="nav-link">Tele Doctor Pool</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
