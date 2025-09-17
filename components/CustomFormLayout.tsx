import React from 'react';
import "../styles/CustomFormLayout.css";

const CustomFormLayout: React.FC = () => {
  return (
    <div className="container">
      <div className="form-section">
        <form>
          <div className="row">
            {/* Left side with 5 fields stacked vertically */}
            <div className="col-md-6 left-side">
              <div className="mb-3">
                <label htmlFor="website" className="form-label">Website</label>
                <input type="url" id="website" className="form-control" placeholder="https://example.com..." />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" id="description" className="form-control" placeholder="Description..." />
              </div>
              <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="text" id="tags" className="form-control" placeholder="Tags..." />
              </div>
              <div className="mb-3">
                <label htmlFor="riskScore" className="form-label">Risk Score</label>
                <input type="text" id="riskScore" className="form-control" placeholder="Risk Score..." />
              </div>
              <div className="mb-3">
                <label htmlFor="subtitle" className="form-label">Subtitle</label>
                <input type="text" id="subtitle" className="form-control" placeholder="Subtitle..." />
              </div>
            </div>

            {/* Right side with fields aligned with the left side */}
            <div className="col-md-6 right-side">
              <div className="mb-3">
                <label htmlFor="dmcaStatus" className="form-label">DMCA Status</label>
                <input type="text" id="dmcaStatus" className="form-control" placeholder="DMCA Status..." />
              </div>
              <div className="mb-3">
                <label htmlFor="whatWeCanDo" className="form-label">What We Can Do</label>
                <input type="text" id="whatWeCanDo" className="form-control" placeholder="What We Can Do..." />
              </div>
            </div>
          </div>

          <button type="button" className="back-btn mt-3">Back</button>
        </form>
      </div>
    </div>
  );
}

export default CustomFormLayout;
