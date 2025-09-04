"use client";

import React from "react";
import "../styles/TakedownReport.css";

const TakedownReport: React.FC = () => {
  return (
    <div className="text-center py-4">
      <p className="small-text">Showing Report 2 of 5</p>
      <div className="report-card">
        <h5>#1</h5>

        {/* Center-aligned header */}
        <div className="report-header">
          <h3>Takedown Report</h3>
          <p>March 12 – April 12, 2025</p>
        </div>

        {/* Stats */}
        <p>Search Engine: 2132</p>
        <p>AI: 313</p>
        <p>Adult Tubes: 3213</p>
        <p>Social Media: 3213</p>
        <p>Personal Agent: 3213</p>

        {/* Actions */}
        <div className="report-actions">
          <p>
            <i className="bi bi-link-45deg"></i> Total Reported Links: <b>302</b>
          </p>
          <p>
            <i className="bi bi-image"></i> View Reference Images: <b>201</b>
          </p>
          <p>
            <i className="bi bi-download"></i> Download List of Removed URLs:{" "}
            <b>302</b>
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button className="btn btn-custom">BACK</button>
        <button className="btn btn-custom">NEXT</button>
      </div>
    </div>
  );
};

export default TakedownReport;
