import React, { useState } from 'react';
import '../styles/ReportALeak.css';
import "../styles/AdminDashboard.css";

interface LeakReport {
  id: number;
  type: string;
  link: string;
  status: string;
  date: string;
}

const ReportALeak = () => {
  // Sample data for the table, replace with your data or API call
  const [reports, setReports] = useState<LeakReport[]>([
    { id: 1, type: 'Impersonator', link: 'https://example.com/1 +2', status: 'Pending', date: '19.03.2025' },
    { id: 2, type: 'Impersonator', link: 'https://example.com/2 +2', status: 'Pending', date: '19.03.2025' },
    // Add more reports as needed
  ]);

  const handleSelect = (report: LeakReport) => {
    // Implement the action when the user selects a row
    console.log('Selected report:', report);
  };

  return (
    <div className="container report-leak-section">
      <div className="row">
        {/* Left Side Form */}
        <div className="col-md-6">
          <div className="report-leak-form">
            <h4>Report a Leak</h4>
            <div className="mb-3">
              <label className="form-label">Type of Leak</label>
              <input type="text" className="form-control" placeholder="https://example.com..." />
            </div>
            <div className="mb-3">
              <label className="form-label">Link(s) to content</label>
              <textarea rows={8} className="form-control" placeholder="https://example.com..." />
            </div>
            <div className="mb-3">
              <label className="form-label">Additional details (optional)</label>
              <textarea rows={3} className="form-control" placeholder="Provide any additional information here..." />
            </div>
            <button className="report-leak-submit">Submit Report</button>
          </div>
        </div>

        {/* Right Side Table */}
        <div className="col-md-6">
          <div className="report-leak-right">
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="send-pdf-card send-pdf-card-row">
                  <h6>Scanned:</h6>
                  <span className="send-pdf-value">983</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="send-pdf-card send-pdf-card-row">
                  <h6>Leaks Found:</h6>
                  <span className="send-pdf-value">542</span>
                </div>
              </div>
            </div>
             {/* Search Input with Icon */}
                <div className="send-pdf-search mb-3 position-relative">
                  <input
                    type="text"
                    className="form-control ps-3 pe-5"
                    placeholder="Search PDF..."
                  />
                  <img
                    src="/icons/search-icon-place.svg"
                    alt="search"
                    className="search-icon"
                  />
                </div>

            {/* Table */}
            <div className="table-responsive">
              
              <table className="table table-dark text-center">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Link(s)</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id}>
                      <td>{report.type}</td>
                      <td>{report.link}</td>
                      <td>{report.status}</td>
                      <td>{report.date}</td>
                      <td>
                        <button
                          className="table-dark-bt"
                          onClick={() => handleSelect(report)}
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center">
              <nav>
                <ul className="pagination pagination-sm">
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">10</a></li>
                  <li className="page-item"><a className="page-link" href="#">15</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportALeak;
