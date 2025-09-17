import React from 'react';
import "../styles/DownloadSection.css";

const DownloadSection: React.FC = () => {
  return (
    <div className="download-section-container">
      <div className="row justify-content-center">
        {/* First Column */}
        <div className="col-md-3">
          <div className="download-section-card">
            <div className="download-section-badge-section">
              <span className="download-section-badge">ADD NEW USERNAME</span>
            </div>
            <div className="download-section-card-body">
              <div className="download-section-section-title">Usernames:</div>
              <p className="download-section-form-mail">https://onlyfans.com/@username</p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-md-3">
          <div className="download-section-card">
            <div className="download-section-badge-section">
              <span className="download-section-badge">ADD STAGE NAME</span>
            </div>
            <div className="download-section-card-body">
              <div className="download-section-section-title">Stage Names:</div>
              <p className="download-section-form-mail">Alexandra Nice</p>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="col-md-3">
          <div className="download-section-card">
            <div className="download-section-badge-section">
              <span className="download-section-badge">ADD WHITELIST</span>
            </div>
            <div className="download-section-card-body">
              <div className="download-section-section-title">Whitelist:</div>
              <p className="download-section-form-mail">www.strip.com</p>
            </div>
          </div>
        </div>

        {/* Fourth Column (Combined Download Section) */}
        <div className="col-md-3">
          <div className="download-section-card">
            {/* Lock Leaks Copyright Contract */}
            <div className="download-section-badge-section">
              <p className="download-section-form-mail">Lock Leaks Copyright Contract</p>
            </div>
            <div className="download-section-badge-section">
              <span className="download-section-badge">DOWNLOAD</span>
            </div>

            {/* Copyright Registration */}
            <div className="download-section-badge-section">
              <p className="download-section-form-mail">Copyright Registration</p>
            </div>
            <div className="download-section-badge-section">
              <span className="download-section-badge">DOWNLOAD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
