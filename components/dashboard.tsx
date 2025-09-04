import React, { useState } from "react";
import "../styles/Daschboard.css";
import PricingSection from "./PricingSection";
import Link from "next/link";
import TakedownReport from "./TakedownReport"; 
import "../styles/AdminDashboard.css";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="lockdash-body">
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4 col-lg-2 lockdash-sidebar">
            <div className="lockdash-logo">
              <Link href="/">
                <img src="/images/lockleaks.svg" alt="Lock Leaks Logo" />
              </Link>
            </div>

            <a
              href="#"
              className={`lockdash-nav-button ${
                activeTab === "Dashboard" ? "lockdash-active" : ""
              }`}
              onClick={() => handleTabClick("Dashboard")}
            >
              <i className="fab fa-google"></i> Dashboard
            </a>
            <a
              href="#"
              className={`lockdash-nav-button ${
                activeTab === "My Profile" ? "lockdash-active" : ""
              }`}
              onClick={() => handleTabClick("My Profile")}
            >
              <i className="fa fa-user"></i> My Profile
            </a>
            <a
              href="#"
              className={`lockdash-nav-button ${
                activeTab === "Support" ? "lockdash-active" : ""
              }`}
              onClick={() => handleTabClick("Support")}
            >
              <i className="fa fa-comment-dots"></i> Support
            </a>
            <a
              href="#"
              className={`lockdash-nav-button ${
                activeTab === "Subscriptions" ? "lockdash-active" : ""
              }`}
              onClick={() => handleTabClick("Subscriptions")}
            >
              <i className="fa fa-star"></i> Subscriptions
            </a>
            <a
              href="#"
              className={`lockdash-nav-button ${
                activeTab === "Settings" ? "lockdash-active" : ""
              }`}
              onClick={() => handleTabClick("Settings")}
            >
              <i className="fa fa-cog"></i> Settings
            </a>

            <h6 className="mt-4 lockdash-text-gradient">Link</h6>
            <button className="lockdash-upgrade-btn">
              <i className="fa fa-star"></i> Upgrade
            </button>
          </div>

          {/* Main Content */}
          <div className="col-md-8 col-lg-10 p-4">
            {/* Top Bar */}
            <div className="lockdash-top-bar">
              <div className="lockdash-user-info">
                <img src="icons/X_AE_A-13b.svg" alt="Avatar" />
                <span className="lockdash-text-gradient">X_AE_A-13b</span>
              </div>
              <i className="fa fa-sign-out-alt lockdash-logout-icon"></i>
            </div>

            {/* Conditional Rendering for Tabs */}
            {activeTab === "Dashboard" && (
              <>
                <h4 className="mb-4">Dashboard</h4>

                {/* 📊 Top Stats Boxes */}
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="send-pdf-card send-pdf-card-row">
                      <h6>Scanned:</h6>
                      <span className="send-pdf-value">983</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="send-pdf-card send-pdf-card-row">
                      <h6>Leaks Found:</h6>
                      <span className="send-pdf-value">542</span>
                    </div>
                  </div>
                <div className="col-md-4">
                  <div className="send-pdf-card send-pdf-card-row">
                    <h6>Sent:</h6>
                    {/* Replace number with SVG */}
                    <img
                      src="/icons/sent-icon.svg" // ✅ your SVG path here
                      alt="Sent Icon"
                      className="send-pdf-value-svg"
                    />
                  </div>
                </div>

                </div>

          
                <TakedownReport /> {/* ✅ Added here */}
              </>
            )}

            {activeTab === "My Profile" && <h4>My Profile Content</h4>}

            {activeTab === "Support" && <h4>Support Content Here</h4>}

            {activeTab === "Subscriptions" && (
              <>
                <h4>Subscriptions</h4>
                <PricingSection hideStartFree={true} />
              </>
            )}

            {activeTab === "Settings" && <h4>Settings Content Here</h4>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
