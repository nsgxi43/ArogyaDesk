import React from 'react';
import './HealthHistory.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HealthHistory = () => {
  const historyData = [
    { date: '2024-10-01', condition: 'Cold', prescription: 'Antibiotics' },
    { date: '2024-09-15', condition: 'Fever', prescription: 'Paracetamol' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Health History</h2>
      <div className="row">
        {historyData.map((entry, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card p-3 shadow-sm">
              <h5>Date: {entry.date}</h5>
              <p><strong>Condition:</strong> {entry.condition}</p>
              <p><strong>Prescription:</strong> {entry.prescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthHistory;
