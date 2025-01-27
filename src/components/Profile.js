import React from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const profileData = {
    name: 'John Doe',
    sleep: '7 hours',
    activity: '5000 steps',
    weight: '75kg',
    calories: '2000 kcal',
    heartRate: '72 bpm',
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Profile</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3">Name: {profileData.name}</h4>
            <ul className="list-group">
              {Object.entries(profileData).map(([key, value]) => (
                <li className="list-group-item" key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
