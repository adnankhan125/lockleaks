import React from 'react';
import '../styles/Method.css';

const Method: React.FC = () => {
  return (
    <div className="method-container">
      <div className="method-section">
        <div className="row first-row">
          <div className="col-md-6">
            <div className="form-row">
              <label htmlFor="background">Method</label>
              <textarea
                id="background"
                className="form-control cstm-frm"
                placeholder="Enter background URL"
              />
              <button className="save-btn">Save</button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-row">
              <label htmlFor="contact">Contact(s)</label>
              <textarea
                id="contact"
                className="form-control cstm-frm"
                placeholder="Enter contact URL"
              />
              <button className="save-btn">Save</button>
            </div>
          </div>
        </div>

        <div className="row second-row">
          <div className="col-md-12">
            <div className="form-row">
              <label htmlFor="test">Test Link(s)</label>
              <textarea
                id="test"
                className="form-control cstm-frm"
                placeholder="Enter test link"
              />
              <button className="save-btn">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Method;
