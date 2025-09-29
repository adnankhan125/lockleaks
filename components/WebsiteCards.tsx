import React from 'react';
import { FaGlobe } from 'react-icons/fa'; // Import the globe icon from react-icons
import '../styles/WebsiteCards.css'; // Import the CSS file for styling
import '../styles/ReportALeak.css';

const WebsiteCards: React.FC = () => {
  return (
    <div className="container py-4 custom-container">
      <div className="row">
        {/* Search Field Section */}
                  <div className= "heading-filter">Search</div>

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

        <div className="col-md-4">
          <div className= "heading-filter">Filters</div>
          <button className="btn btn-primary-ok-black">Removable</button>
          <button className="btn btn-primary-ok-black">Monitoring</button><br />
          <button className="btn btn-primary-ok-black">seo (6185)</button>
          <button className="btn btn-primary-ok-black">seo (6185)</button>
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
    
  );
};

export default WebsiteCards;
