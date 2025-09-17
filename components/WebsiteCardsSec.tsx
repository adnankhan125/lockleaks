import React from 'react';
import { FaGlobe } from 'react-icons/fa'; // Import the globe icon from react-icons
import '../styles/WebsiteCards.css'; // Import the CSS file for styling

const WebsiteCards: React.FC = () => {
  return (
    <div className="container py-4 custom-container">
      <div className="row">
        {/* Search Field Section */}
        <div className="col-md-12 mb-4">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search or enter a domain"
              className="search-input"
            />
            <button className="btn btn-primary-form">Search</button>
          </div>
        </div>
        {/* DD Section with text and buttons in one line */}
        <div className="col-md-12 mb-4">
          <div className="d-flex align-items-center">
            <h6 className="me-3">For example:</h6>
            <div className="row d-flex justify-content-start">
              {Array(8).fill(0).map((_, index) => (
                <div key={index} className="col-auto mb-2">
              <button className="btn btn-secondary dd-btn">
                <img src="/images/DD-BUTTON.svg" alt="Google Icon" className="me-2" width="16" height="16" />
                google.com
              </button>


                </div>
              ))}
            </div>
          </div>
        </div>

       <div className="col-md-4">
          <h6>Filters</h6>
          <button className="btn btn-primary-ok" style={{ color: 'white' }}>seo (6185)</button>
          <button className="btn btn-primary-ok">seo (6185)</button><br />
          <button className="btn btn-primary-ok">seo (6185)</button>
          <button className="btn btn-primary-ok">seo (6185)</button><br />
          <button className="btn btn-primary-ok">seo (6185)</button>
          <button className="btn btn-primary-ok">seo (6185)</button><br />
          <button className="btn btn-primary-ok">seo (6185)</button>
          <button className="btn btn-primary-ok">seo (6185)</button><br />
          <button className="btn btn-primary-ok">seo (6185)</button>
          <button className="btn btn-primary-ok">seo (6185)</button><br />
        </div>

        {/* Column 2: Website Cards (7 cards) */}
        <div className="col-md-4">
          {Array(7).fill(0).map((_, index) => (
            <div key={index} className="website-card">
              <div>
                <div className="tags">
                  <img src="icons/favicons.svg" alt="favicon icon" className="me-2" />
                  <h6>fapello</h6>
                  <span className="tag status">Monitoring</span>
                  <span className="tag traffic">10,224,920 traffic</span>
                  <span className="tag removable">Removable</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Column 3: Website Cards (7 cards) */}
        <div className="col-md-4">
          {Array(7).fill(0).map((_, index) => (
            <div key={index} className="website-card">
              <div>
                <div className="tags">
                  <img src="icons/favicons.svg" alt="favicon icon" className="me-2" />
                  <h6>fapello</h6>
                  <span className="tag status">Monitoring</span>
                  <span className="tag traffic">10,224,920 traffic</span>
                  <span className="tag removable">Removable</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteCards;
