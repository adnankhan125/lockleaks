import React, { useState } from 'react';
import '../styles/AdminDashboard.css';
import Link from 'next/link';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Search Engines');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="admin-dashboard-body">
      <div className="container-fluid">
        <div className="row">

          {/* Sidebar */}
          <div className="col-md-4 col-lg-2 admin-dashboard-sidebar">
            <div className="admin-dashboard-logo">
              <Link href="/">
                <img src="/images/lockleaks.svg" alt="Admin Logo" />
              </Link>
            </div>

            <a
              href="#"
              className={`admin-dashboard-nav-button ${activeTab === 'Search Engines' ? 'admin-dashboard-active' : ''}`}
              onClick={() => handleTabClick('Search Engines')}
            >
              <i className="fa fa-search"></i> Search Engines
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${activeTab === 'Leak Sites' ? 'admin-dashboard-active' : ''}`}
              onClick={() => handleTabClick('Leak Sites')}
            >
              <i className="fa fa-exclamation-triangle"></i> Leak Sites
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${activeTab === 'Scraping' ? 'admin-dashboard-active' : ''}`}
              onClick={() => handleTabClick('Scraping')}
            >
              <i className="fa fa-robot"></i> Scraping
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${activeTab === 'Users' ? 'admin-dashboard-active' : ''}`}
              onClick={() => handleTabClick('Users')}
            >
              <i className="fa fa-users"></i> Users
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${activeTab === 'Keywords' ? 'admin-dashboard-active' : ''}`}
              onClick={() => handleTabClick('Keywords')}
            >
              <i className="fa fa-key"></i> Keywords
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${activeTab === 'Send PDF' ? 'admin-dashboard-active' : ''}`}
              onClick={() => handleTabClick('Send PDF')}
            >
              <i className="fa fa-file-pdf"></i> Send PDF
            </a>
            <a
              href="#"
              className={`admin-dashboard-nav-button ${activeTab === 'Whitelist' ? 'admin-dashboard-active' : ''}`}
              onClick={() => handleTabClick('Whitelist')}
            >
              <i className="fa fa-check-circle"></i> Whitelist
            </a>

            {/* <h6 className="mt-4 admin-dashboard-text-gradient">Admin Panel</h6> */}
          </div>

          {/* Main Content */}
          <div className="col-md-8 col-lg-10 p-4">

            {/* Top Bar */}
            <div className="admin-dashboard-top-bar">
              <div className="admin-dashboard-user-info">
                <img src="icons/X_AE_A-13b.svg" alt="Avatar" />
                <span className="admin-dashboard-text-gradient">Admin</span>
              </div>
              <i className="fa fa-sign-out-alt admin-dashboard-logout-icon"></i>
            </div>

            {/* Conditional Rendering for Tabs */}
            {activeTab === 'Search Engines' && <h4>Search Engines Content</h4>}
            {activeTab === 'Leak Sites' && <h4>Leak Sites Content</h4>}
            {activeTab === 'Scraping' && <h4>Scraping Content</h4>}
            {activeTab === 'Users' && <h4>Users Content</h4>}
            {activeTab === 'Keywords' && <h4>Keywords Content</h4>}
            {activeTab === 'Send PDF' && <h4>Send PDF Content</h4>}
            {activeTab === 'Whitelist' && <h4>Whitelist Content</h4>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
