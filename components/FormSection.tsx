import React from 'react';
import "../styles/FormSection.css";

const FormSection: React.FC = () => {
  return (
    <div className="form-section">
      {/* Monetization Section */}
      <h5 className="mt-4 hidng">Monetization & Web Links</h5>
      <div className="mb-3">
        <input type="url" className="form-control cntrl-12" placeholder="https://example.com..." />
      </div>
      <div className="mb-3">
        <input type="url" className="form-control cntrl-12" placeholder="https://example.com..." />
      </div>
      <div className="mb-3">
        <input type="url" className="form-control cntrl-12" placeholder="https://example.com..." />
      </div>
      <div className="mb-3">
        <input type="url" className="form-control cntrl-12" placeholder="https://example.com..." />
      </div>

      <h5 className="mt-4 hidng">History & Background</h5>
      <div className="mb-3">
        <textarea className="form-control cntrl-12" rows={5} placeholder="https://example.com..."></textarea>
      </div>

      {/* Button */}
      <button className="btn btn-post">Post</button>
    </div>
  );
};

export default FormSection;
