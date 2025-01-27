import React from 'react';
import TeleDoctorPool from '../components/TeleDoctorPool';
import './TeleDoctorPage.css';

const TeleDoctorPage = () => {
  return (
    <div className="tele-doctor-page-container">
      <h1>Welcome to Telemedicine</h1>
      <p>
        Our telemedicine services allow you to connect with qualified doctors from the comfort of your home.
        Whether you have minor ailments or need specialist advice, we are here to help.
      </p>
      <p>
        To get started, browse our pool of doctors below and click "Connect" to schedule a consultation.
      </p>
      
      <TeleDoctorPool />
    </div>
  );
};

export default TeleDoctorPage;
