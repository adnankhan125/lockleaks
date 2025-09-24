import React from "react";
import "../styles/LeakSiteSec.css"; // Import the custom CSS file

const LeakSiteSec: React.FC = () => {
  return (
    <div className="container py-5">
      {/* <h2 className="text-center mb-5">Check a Leak Site</h2> */}

      {/* Row of 3 Boxes */}
      <div className="row">
        <div className="col-md-4">
          <div className="leak-card">
            <div className="leak-card-header">Technical Findings</div>
            <div className="leak-card-body">
              Whois data hidden or fake
              <br />
              IP changes frequently (rotated or proxy use)
              <br />
              No real "About" or legal contact
              <br />
              Open directories or search-indexed leaks
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="leak-card">
            <div className="leak-card-header">Legal & Compliance Risks</div>
            <div className="leak-card-body">
              DMCA Policy: Missing or generic
              <br />
              Contact Information: Fake or missing
              <br />
              Violations: DMCA, GDPR, Copyright Infringement
              <br />
              Legal Exposure: High (for creators & hosting)
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="leak-card">
            <div className="leak-card-header">Monetization & Web Links</div>
            <div className="leak-card-body">
              Advertisements: Porn ads, crypto ads
              <br />
              Paid Access: VIP content via BTC
              <br />
              Affiliate Links: Redirects to other leak platforms
              <br />
              Network Presence: Often part of a group
            </div>
          </div>
        </div>
      </div>        
      <div className="history-header">History & Background</div>


      {/* History & Background Section */}
      <div className="history-section mt-3">
        {/* <div className="history-header">History & Background</div> */}
        <div className="history-item">
          <i className="icon">
            <img
              src="icons/Overlay.svg"
              alt="User Icon"
              width="30"
              height="30"
            />
          </i>
          3 contacts found for Medium
          <br />
          Get full access to verified contacts at Medium and outreach to them in
          minutes.
        </div>
        <div className="history-item-sec">
          {/* Icon and User Info Section */}
          <div className="d-flex align-items-center">
            <i className="icon">
              <img
                src="icons/Overlay1.svg"
                alt="User Icon"
                width="30"
                height="30"
              />
            </i>
            <div>
              <div>M**** T****</div>
              <div>t*****@medium.com</div>
            </div>
          </div>

          {/* Info Section with Status */}
          <div className="d-flex align-items-center">
            <span className="generic">generic</span>
            <span className="ai-finder">AI Finder</span>
            <span className="confidence">30% confidence</span>
          </div>
        </div>
        <div className="history-tr">Show all history</div>

      </div>
    </div>
  );
};

export default LeakSiteSec;
