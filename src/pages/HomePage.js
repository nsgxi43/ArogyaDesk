import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Arogya Desk</h2>
      <p>This is your one-stop solution for health monitoring, AI-powered diagnosis, and remote doctor consultations.</p>
      <div className="features">
        <div className="feature-card">
          <h3>AI Diagnosis</h3>
          <p>Get a quick diagnosis by entering your symptoms.</p>
        </div>
        <div className="feature-card">
          <h3>Tele Doctor</h3>
          <p>Connect with a doctor via video conference.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
