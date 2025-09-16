import React from "react";
import "../styles/AgenciesForm.css";


const AgenciesForm: React.FC = () => {
  return (
    <div className="container agency-form">
      <h4 className="text-white">Agencies</h4>
      <a href="#" className="btn btn-outline-light agency-back-btn">Back</a>
      <form>
        <div className="row g-4">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Content Lock Leaks</label>
              <input type="text" className="form-control agency-input" placeholder="Enter..." />
            </div>
            <div className="mb-3">
              <label className="form-label">Content Agency</label>
              <input type="text" className="form-control agency-input" placeholder="Enter..." />
            </div>
            <div className="mb-3">
              <label className="form-label">Content Agency</label>
              <input type="text" className="form-control agency-input" placeholder="Enter..." />
            </div>
            <div className="mb-3">
              <label className="form-label">Content Lock Leaks</label>
              <input type="text" className="form-control agency-input" placeholder="Enter..." />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Profile Pic</label>
              <input type="file" className="form-control agency-input" />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control agency-input" placeholder="Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control agency-input" placeholder="Title" />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn agency-btn px-4">Post</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AgenciesForm;
