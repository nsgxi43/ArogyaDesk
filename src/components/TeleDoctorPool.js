import React, { useState, useEffect } from 'react';
import './TeleDoctorPool.css';

const TeleDoctorPool = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulating API call to fetch doctors
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // Simulate a delay to mimic API call
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve([
            { id: 1, name: 'Dr. Aditi Sharma', specialization: 'General Practitioner' },
            { id: 2, name: 'Dr. Ravi Mehta', specialization: 'Pediatrician' },
            { id: 3, name: 'Dr. Priya Sethi', specialization: 'Dermatologist' },
          ]), 1000)
        );

        setDoctors(response);
      } catch (error) {
        setError('Failed to load doctors');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleConnect = (doctor) => {
    // Here, you can add functionality to connect with the doctor
    alert(`Connecting to ${doctor.name}...`);
  };

  return (
    <div className="tele-doctor-pool-container">
      <h2>Tele Doctor Pool</h2>

      {loading && <p>Loading doctors...</p>}
      {error && <p className="error-message">{error}</p>}
      
      {doctors.length > 0 ? (
        <div className="doctor-list">
          {doctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-name">{doctor.name}</div>
              <div className="doctor-specialization">{doctor.specialization}</div>
              <button className="button-connect" onClick={() => handleConnect(doctor)}>
                Connect
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-doctors-message">No doctors available at the moment.</p>
      )}
    </div>
  );
};

export default TeleDoctorPool;
