"use client";

import React from "react";
import Image from "next/image";
import "../styles/TakedownReport.css";

const TakedownReport: React.FC = () => {
  return (
    <section className="takedown-section">
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
              Total Reported Links{" "}
              <Image
                src="/icons/TotalReportedLinks.svg"
                alt="Reported Links"
                width={20}
                height={20}
                style={{ marginRight: "6px" }}
              />
              <b>302</b>
            </p>
            <p>
              <i className="bi bi-image"></i> View Reference Images{" "}
              <Image
                src="/icons/ViewReference.svg"
                alt="Reference Images"
                width={20}
                height={20}
                style={{ marginRight: "6px" }}
              />{" "}
              <b>201</b>
            </p>
            <p>
              <i className="bi bi-download"></i> Download List of Removed URLs{" "}
              <Image
                src="/icons/DownloadListRemoved.svg"
                alt="Removed URLs"
                width={20}
                height={20}
                style={{ marginRight: "6px" }}
              />{" "}
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
    </section>
  );
};

export default TakedownReport;
