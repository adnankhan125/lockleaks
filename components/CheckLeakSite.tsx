import React from "react";
import "../styles/CheckLeakSite.css";

const CheckLeakSite: React.FC = () => {
  return (
    <div className="container py-5 leak-container">
      <div className="leak-wrapper">

        {/* 🔹 Header Section */}
        <div className="leak-header-first mb-4">
          <h2 className="mb-2 leak-title">Medium</h2>
          <p className="leak-subtitle">
            High-risk leak site distributing stolen premium content for profit.
          </p>
          <div className="leak-tags">
            <span className="leak-tag-badge">writing</span>
            <span className="leak-tag-badge">stories</span>
            <span className="leak-tag-badge">insights</span>
            <span className="leak-tag-badge">knowledge</span>
            <span className="leak-tag-badge">membership</span>
            <span className="leak-tag-badge special">seo (6185)</span>
          </div>
        </div>


       <div className="leak-content">
        <div className="row">
          {/* Details */}
          <div className="col-md-4 mb-3">
            <div className="leak-card-details">
              <div className="leak-header">
                <img src="/images/Mground.svg" alt="Medium Logo" className="leak-icon-img" />
                <div className="leak-title-badges">
                  <h5 className="leak-title">Medium</h5>
                  <div className="leak-badges">
                    <span className="leak-badge">DR 94</span>
                    <span className="leak-badge-sec">22,709,504 traffic</span>
                     <p className="leak-info">Stolen OnlyFans Content / Media Leak Platform</p>

                  </div>
                </div>
              </div>

              {/* 🔹 Content */}
              <p><strong>Website:</strong> medium.com</p>
              <p><strong>Traffic:</strong> 22,709,504</p>
            </div>

          </div>

            <div className="col-md-4 mb-3">
              <div className="leak-card-risk">
                <h6>Risk Score</h6>
                <p className="leak-risk-score">85/100</p>
                <p className="leak-info">This is an estimated starting price. Actual prices may vary.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="leak-card-dmca">
                <h6>DMCA Status</h6>
                <p className="leak-dmca-status">Removable</p>
                <p className="leak-info">This is an estimated starting price. Actual prices may vary.</p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="row d-flex align-items-stretch">
            <div className="col-md-4 mb-3">
              <div className="leak-card">
                <h6>What We Can Do</h6>
                <div className="row">
                  <div className="col-6"><span className="leak-btn-tag leak-btn-purple w-100 text-center">Redirect Traffic</span></div>
                  <div className="col-6"><span className="leak-btn-tag leak-btn-yellow w-100 text-center">Monitor Leaks</span></div>
                  <div className="col-6"><span className="leak-btn-tag leak-btn-green w-100 text-center">Remove Content</span></div>
                  <div className="col-6"><span className="leak-btn-tag leak-btn-blue w-100 text-center">Track Mirrors</span></div>
                  <div className="col-6"><span className="leak-btn-tag leak-btn-pink w-100 text-center">Recover Revenue</span></div>
                  <div className="col-6"><span className="leak-btn-tag leak-btn-purple w-100 text-center">Legal Actions</span></div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="leak-card">
                <h6>Infrastructure & Hosting</h6>
                <p><strong>Main IP:</strong> 185.231.xxx.xxx</p>
                <p><strong>Hosting Provider:</strong> Cloudflare / Offshore VPS</p>
                <p><strong>CDN / Proxy:</strong> Cloudflare</p>
                <p><strong>Hosted In:</strong> Russia</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="leak-card">
                <h6>Risk & Exposure Overview</h6>
                <p><strong>Leaked Content:</strong> Photos, Videos, ZIP files</p>
                <p><strong>Main Source:</strong> OnlyFans, Patreon</p>
                <p><strong>Revenue Estimate:</strong> $3,000 – $20,000/month</p>
                <p><strong>Primary Target:</strong> OF Creators, Models</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckLeakSite;
