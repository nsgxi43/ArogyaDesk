import React, { useState } from 'react';
import './AIDiagnosis.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AIDiagnosis = () => {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState(null);

  const handleDiagnosis = () => {
    // Example mock diagnosis
    setDiagnosis({
      disease: 'Flu',
      medications: 'Paracetamol, Rest, Hydration',
    });
  };

  return (
    <div className="diagnosis-container p-5">
      <h2 className="text-center mb-4">AI Diagnosis</h2>
      <div className="form-group">
        <label>Enter Symptoms:</label>
        <textarea
          className="form-control"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe your symptoms"
          rows="4"
        />
      </div>
      <button className="btn btn-success w-100 mt-3" onClick={handleDiagnosis}>
        Get Diagnosis
      </button>

      {diagnosis && (
        <div className="result mt-4">
          <h3 className="text-success">Predicted Disease: {diagnosis.disease}</h3>
          <p>Recommended Medications: {diagnosis.medications}</p>
        </div>
      )}
    </div>
  );
};

export default AIDiagnosis;
