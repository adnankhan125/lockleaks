import React from 'react';
import '../styles/Method.css';

const Method: React.FC = () => {
  return (
    <div className="method-container">
      <div className="method-section">
        <h3>Method</h3>
        
        <div className="row first-row">
          <div className="col-md-6">
            <div className="form-row">
              <label htmlFor="background">Background Method</label>
              <input type="text" id="background" className="form-control" placeholder="Enter background URL" />
              <button className="save-btn mt-2">Save</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-row">
              <label htmlFor="contact">Contact(s)</label>
              <input type="text" id="contact" className="form-control" placeholder="Enter contact URL" />
              <button className="save-btn mt-2">Save</button>
            </div>
          </div>
        </div>

        <div className="row second-row">
          <div className="col-md-12">
            <div className="form-row">
              <label htmlFor="test">Test Link(s)</label>
              <input type="text" id="test" className="form-control" placeholder="Enter test link" />
              <button className="save-btn mt-2">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Method;
