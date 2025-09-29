import React from 'react';
import '../styles/SettingsLock.css';

const SettingsLock: React.FC = () => {
  return (
    <div className="container settings-container">
      <h2 className="settings-title">Settings</h2>

      {/* Email Address Section */}
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="emailAddress">Email Address</label>
          <input type="email" id="emailAddress" className="form-control custom-input-1" value="your@email.com" />
        </div>
        <div className="col-md-6">
          <label htmlFor="newEmailAddress">New Email Address</label>
          <div className="input-group">
            <input type="email" id="newEmailAddress" className="form-control custom-input-1" value="your@email.com" />
            <button className="btn-save custom-btn-1">Save</button>
          </div>
        </div>
      </div>

      {/* Password Section */}
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" className="form-control custom-input-1" value="*******" />
        </div>
        
        <div className="col-md-6">
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <div className="input-group">
            <input type="password" id="confirmPassword" className="form-control custom-input-1" value="*******" />
            <button className="btn-save custom-btn-1">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLock;
