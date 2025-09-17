import React from 'react';
import "../styles/FormSection.css";

const FormSection: React.FC = () => {
  return (
    <div className="form-section">
      {/* Monetization Section */}
      <div className="mb-3">
        {/* <label className="form-label">Background</label> */}
        <input type="url" className="form-control" placeholder="https://example.com..." />
      </div>
      <div className="mb-3">
        {/* <label className="form-label">Background</label> */}
        <input type="url" className="form-control" placeholder="https://example.com..." />
      </div>
      <div className="mb-3">
        {/* <label className="form-label">Background</label> */}
        <input type="url" className="form-control" placeholder="https://example.com..." />
      </div>
      <div className="mb-3">
        {/* <label className="form-label">Background</label> */}
        <input type="url" className="form-control" placeholder="https://example.com..." />
      </div>

      {/* History Section */}
      <h5 className="mt-4">History & Background</h5>
      <div className="mb-3">
        {/* <label className="form-label">Background</label> */}
        <textarea className="form-control" rows={5} placeholder="https://example.com..."></textarea>
      </div>

      {/* Button */}
      <button className="btn btn-post">Post</button>
    </div>
  );
};

export default FormSection;
