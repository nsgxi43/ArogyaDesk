import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AIDiagnosisPage from './pages/AIDiagnosisPage';
import TeleDoctorPage from './pages/TeleDoctorPage';
import Profile from './components/Profile';
import HealthHistory from './components/HealthHistory';

const Main = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ai-diagnosis" element={<AIDiagnosisPage />} />
        <Route path="/tele-doctor" element={<TeleDoctorPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/health-history" element={<HealthHistory />} />
      </Routes>
    </div>
  );
};

export default Main;