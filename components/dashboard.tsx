import React, { useState } from "react";
import "../styles/Daschboard.css";
import PricingSection from "../components/PricingSection";
import Link from "next/link";
import TakedownReport from "../components/TakedownReport"; 
import "../styles/AdminDashboard.css";
import Post from '@/components/post';
import WebsiteCards from '@/components/WebsiteCards';
import Tutorials from '@/components/Tutorials';
import CheckLeakSite from "./CheckLeakSite";
import ReviewForm from "./ReviewForm";
import AgenciesForm from "./Agenciesform";


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
              className={`lockdash-nav-button ${activeTab === "Dashboard" ? "lockdash-active" : ""}`}
              onClick={() => handleTabClick("Dashboard")}
            >
              <i className="fab fa-google"></i> Dashboard
            </a>

            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === "My Profile" ? "lockdash-active" : ""}`}
              onClick={() => handleTabClick("My Profile")}
            >
              <i className="fa fa-user"></i> My Profile
            </a>

            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === "Support" ? "lockdash-active" : ""}`}
              onClick={() => handleTabClick("Support")}
            >
              <i className="fa fa-comment-dots"></i> Support
            </a>


            {/* NEW: Check a Leak Site */}
            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === "Check a Leak Site" ? "lockdash-active" : ""}`}
              onClick={() => handleTabClick("Check a Leak Site")}
            >
              <i className="fa fa-shield-alt"></i> Check a Leak Site
            </a>

            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === "Subscriptions" ? "lockdash-active" : ""}`}
              onClick={() => handleTabClick("Subscriptions")}
            >
              <i className="fa fa-star"></i> Subscriptions
            </a>

            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === "Settings" ? "lockdash-active" : ""}`}
              onClick={() => handleTabClick("Settings")}
            >
              <i className="fa fa-cog"></i> Settings
            </a>
             {/* NEW: Help & Resources */}
            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === "Help & Resources" ? "lockdash-active" : ""}`}
              onClick={() => handleTabClick("Help & Resources")}
            >
              <i className="fa fa-book"></i> Help & Resources
            </a>

           <a
              href="#"
              className={`lockdash-nav-button ${activeTab === "Tutorials" ? "lockdash-active" : ""}`}
              onClick={() => handleTabClick("Tutorials")}
            >
              <i className="fa fa-pencil-alt"></i> Tutorials
            </a>
            <a
              href="#"
              className={`lockdash-nav-button ${activeTab === "Post" ? "lockdash-active" : ""}`}
              onClick={() => handleTabClick("Post")}
            >
              <i className="fa fa-paper-plane"></i> Post
            </a>
           <a
              href="#"
              className={`lockdash-nav-button ${activeTab === "Website" ? "lockdash-active" : ""}`}
              onClick={() => handleTabClick("Website")}
            >
              <i className="fa fa-globe"></i>Website
            </a>
          <a
            href="#"
            className={`lockdash-nav-button ${activeTab === "Post Tutorials" ? "lockdash-active" : ""}`}
            onClick={() => handleTabClick("Post Tutorials")}
          >
            <i className="fa fa-book"></i> Post Tutorials
          </a>
           <a
            href="#"
            className={`lockdash-nav-button ${activeTab === "Reviews" ? "lockdash-active" : ""}`}
            onClick={() => handleTabClick("Reviews")}
          >
            <i className="fa fa-quote-left"></i> Reviews
          </a>
            <a
            href="#"
            className={`lockdash-nav-button ${activeTab === "Agencies" ? "lockdash-active" : ""}`}
            onClick={() => handleTabClick("Agencies")}
          >
            <i className="fa fa-quote-left"></i> Agencies
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

            {/* Tabs */}
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
                <img src="/icons/sent-icon.svg" alt="Sent Icon" className="send-pdf-value-svg"/>
              </div>
            </div>
          </div>
                <TakedownReport />
              </>
        )}

        {activeTab === "My Profile" && <h4>My Profile Content</h4>}

            {activeTab === "Support" && <h4>Support Content Here</h4>}

            {activeTab === "Help & Resources" && (
            <>
            <h4 className="mb-3">Help & Resources</h4>
            <div className="help-resources-buttons">
              <button className="help-button">DMCA Badges</button>
              <button className="help-button">Tutorials</button>
            </div>  
          </>
        )}
                   {activeTab === "Tutorials" && (
            <>
            <h4 className="mb-3">Tutorials</h4>
    
            <div className="help-resources-buttons">
              <button className="help-button">Back</button>
              <button className="help-button">Post</button>
            </div>  

          </>
        )}

            {/* NEW: Check a Leak Site Content */}
            {activeTab === "Check a Leak Site" && (
              <>
                <h4 className="mb-3">Check a Leak Site</h4>
               
              </>
            )}
             {activeTab === "Post" && (
              <>
                <h4 className="mb-3">Post</h4>
                     <Post/>

              </>
            )}

             {activeTab === "Website" && (
              <>
                <h4 className="mb-3">Website</h4>
              <WebsiteCards/>

              </>
            )}
            
            {activeTab === "Post Tutorials" && (
              <>
                <h4 className="mb-3">Post Tutorials</h4>
               <Tutorials/>

              </>
            )}

            {activeTab === "Subscriptions" && (
              <>
                <h4>Subscriptions</h4>
                <PricingSection hideStartFree={true} />
              </>
            )}
              {activeTab === "Check a Leak Site" && (
              <>
                <CheckLeakSite/>
              </>
            )}

          
              {activeTab === "Reviews" && (
              <>
              <h4>Reviews</h4>
             <ReviewForm/>
              </>
            )}
            {activeTab === "Agencies" && (
              <>
              <h4>Agencies</h4>
             <AgenciesForm/>
              </>
            )}

            
              {activeTab === "Settings" && (
                <>
                  <div className="help-resources-buttons">
                    <button
                      className="help-button"
                      onClick={() => setActiveTab("Agencies")}
                    >
                      Agencies
                    </button>
                    <button
                      className="help-button"
                      onClick={() => setActiveTab("Reviews")}
                    >
                      Reviews
                    </button>
                  </div>
                </>
              )}



         



          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
