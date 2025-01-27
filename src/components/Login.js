import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFingerprint } from 'react-icons/fa'; // Importing a fingerprint icon

const Login = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (aadhaar.length === 12 && /^\d+$/.test(aadhaar)) {
      // Simple Aadhaar validation, ensures it's a 12-digit number
      navigate('/home');
    } else {
      setError('Please enter a valid 12-digit Aadhaar number');
    }
  };

  return (
    
    
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 shadow-lg">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="aadhaar">Enter Aadhaar Number:</label>
            <input
              type="text"
              className="form-control"
              id="aadhaar"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
              placeholder="Enter 12-digit Aadhaar"
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Login
          </button>
          <div className="text-center mt-4">
            <FaFingerprint size={50} className="fingerprint-icon" />
            <p>Or login with fingerprint</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
