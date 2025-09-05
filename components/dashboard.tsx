<<<<<<< HEAD
import React, { useState } from "react";
import "../styles/Daschboard.css";
import PricingSection from "./PricingSection";
import Link from "next/link";
import TakedownReport from "./TakedownReport"; 
import "../styles/AdminDashboard.css";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
=======
"use client";
import React, { useState } from "react";
import "../styles/AdminDashboard.css";
import "../styles/UserInfoModal.css";
import Link from "next/link";

interface User {
  id: number;
  username: string;
  sendMode: string;
  previousSent: string;
  currentSent: string;
  status: string;
  subscription: string;
  expire: string;
}
>>>>>>> 6a9a07406c009de369ab72eecb5b3591c78a8fd6

interface PdfData {
  totalLinks: string;
  viewImages: string;
  removedUrls: string;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Search Engines");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editField, setEditField] = useState<keyof User | null>(null);
  const [formData, setFormData] = useState<User | null>(null);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfData, setPdfData] = useState<PdfData>({
    totalLinks: "",
    viewImages: "",
    removedUrls: "",
  });
  const [pdfEditField, setPdfEditField] = useState<keyof PdfData | null>(null);

  const handleTabClick = (tab: string) => setActiveTab(tab);

  const handleSelect = (user: User) => {
    setSelectedUser(user);
    setFormData(user);
    setEditField(null);
  };

  const handleSaveUserField = (field: keyof User) => {
    if (selectedUser && formData) {
      setSelectedUser({ ...selectedUser, [field]: formData[field] });
      setEditField(null);
    }
  };

  const users: User[] = [
    {
      id: 1,
      username: "@usman4u",
      sendMode: "Auto",
      previousSent: "19.03.2025",
      currentSent: "In 2 Days",
      status: "Sent",
      subscription: "Active",
      expire: "26.04.2025",
    },
    {
      id: 2,
      username: "@banditaa",
      sendMode: "Manual",
      previousSent: "19.03.2025",
      currentSent: "In 2 Days",
      status: "Inactive",
      subscription: "Inactive",
      expire: "Expired",
    },
  ];

  const pdfFields: { label: string; key: keyof PdfData }[] = [
    { label: "Total Reported Links", key: "totalLinks" },
    { label: "View Images", key: "viewImages" },
    { label: "Removed URLs", key: "removedUrls" },
  ];

  return (
    <div className="admin-dashboard-body">
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
<<<<<<< HEAD
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
=======
          <div className="col-md-4 col-lg-2 admin-dashboard-sidebar">
            <div className="admin-dashboard-logo">
              <Link href="/">
                <img src="/images/lockleaks.svg" alt="Admin Logo" />
              </Link>
            </div>

            {/* Sidebar Nav Buttons */}
            {[
              { name: "Search Engines", icon: "fa-search" },
              { name: "Leak Sites", icon: "fa-exclamation-triangle" },
              { name: "Scraping", icon: "fa-robot" },
              { name: "Users", icon: "fa-users" },
              { name: "Keywords", icon: "fa-key" },
              { name: "Send PDF", icon: "fa-file-pdf" },
              { name: "Whitelist", icon: "fa-check-circle" },
            ].map((tab) => (
              <a
                key={tab.name}
                href="#"
                className={`admin-dashboard-nav-button ${
                  activeTab === tab.name ? "admin-dashboard-active" : ""
                }`}
                onClick={() => handleTabClick(tab.name)}
              >
                <i className={`fa ${tab.icon}`}></i> {tab.name}
              </a>
            ))}
          </div>

          {/* Main Content */}
          <div className="col-md-8 col-lg-10">
            <div className="admin-dashboard-top-bar">
              <div className="admin-dashboard-user-info">
>>>>>>> 6a9a07406c009de369ab72eecb5b3591c78a8fd6
                <img src="icons/X_AE_A-13b.svg" alt="Avatar" />
                <span className="admin-dashboard-text-gradient">
                  X_AE_A-13b
                </span>
              </div>
              <i className="fa fa-sign-out-alt admin-dashboard-logout-icon"></i>
            </div>

<<<<<<< HEAD
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
=======
            {/* SEND PDF TAB */}
            {activeTab === "Send PDF" && (
              <div className="send-pdf-tab">
                {/* Top Stats Boxes */}
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="send-pdf-card send-pdf-card-row">
                      <h6>Manual Pending:</h6>
                      <span className="send-pdf-value">982</span>
>>>>>>> 6a9a07406c009de369ab72eecb5b3591c78a8fd6
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="send-pdf-card send-pdf-card-row">
<<<<<<< HEAD
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
=======
                      <h6>Auto Pending:</h6>
                      <span className="send-pdf-value">542</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="send-pdf-card send-pdf-card-row">
                      <h6>Sent:</h6>
                      <span className="send-pdf-value">1300</span>
                    </div>
                  </div>
                </div>

                {/* Search Input with Icon */}
                <div className="send-pdf-search mb-3 position-relative">
                  <input
                    type="text"
                    className="form-control ps-3 pe-5"
                    placeholder="Search PDF..."
                  />
                  <img
                    src="/icons/search-icon-place.svg"
                    alt="search"
                    className="search-icon"
                  />
                </div>

                {/* Table */}
                <div className="table-responsive">
                  <table className="table table-dark text-center">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Send Mode</th>
                        <th>Previous Sent</th>
                        <th>Current Send</th>
                        <th>Status</th>
                        <th>Subscription</th>
                        <th>Expire</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u) => (
                        <tr key={u.id}>
                          <td>{u.id}</td>
                          <td>{u.username}</td>
                          <td>{u.sendMode}</td>
                          <td>{u.previousSent}</td>
                          <td>{u.currentSent}</td>
                          <td>{u.status}</td>
                          <td>{u.subscription}</td>
                          <td>{u.expire}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => handleSelect(u)}
                            >
                              Select
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
>>>>>>> 6a9a07406c009de369ab72eecb5b3591c78a8fd6
          </div>
        </div>
      </div>

      {/* User Info Modal */}
      {selectedUser && formData && (
        <div className="user-info-modal">
          <div className="user-info-content">
            <div className="user-info-header">
              <h5>User Information</h5>
              <button
                className="close-btn"
                onClick={() => setSelectedUser(null)}
              >
                ×
              </button>
            </div>
            <div className="user-info-body">
              {Object.keys(selectedUser).map((field) => {
                const key = field as keyof User;
                return (
                  <div className="user-info-row" key={key}>
                    {editField === key ? (
                      <>
                        <input
                          type="text"
                          value={formData[key]}
                          onChange={(e) =>
                            setFormData({ ...formData, [key]: e.target.value })
                          }
                          className="edit-input"
                        />
                        <button
                          className="edit-btn"
                          onClick={() => handleSaveUserField(key)}
                        >
                          Save
                        </button>
                      </>
                    ) : (
                      <>
                        <span>
                          {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                          {formData[key]}
                        </span>
                        <button
                          className="edit-btn"
                          onClick={() => setEditField(key)}
                        >
                          EDIT
                        </button>
                      </>
                    )}
                  </div>
                );
              })}

              <div className="user-info-row">
                <span>PDF Info</span>
                <button
                  className="edit-btn"
                  onClick={() => setShowPdfModal(true)}
                >
                  EDIT
                </button>
              </div>
            </div>

            <div className="user-info-footer">
              <button className="send-btn">Send</button>
            </div>
          </div>
        </div>
      )}

      {/* Nested PDF Edit Modal */}
      {showPdfModal && (
        <div className="user-info-modal">
          <div className="user-info-content">
            <div className="user-info-header">
              <h5>Edit PDF Info</h5>
              <button
                className="close-btn"
                onClick={() => setShowPdfModal(false)}
              >
                ×
              </button>
            </div>
            <div className="user-info-body">
              {pdfFields.map((field) => (
                <div className="user-info-row" key={field.key}>
                  {pdfEditField === field.key ? (
                    <>
                      <input
                        type="text"
                        value={pdfData[field.key]}
                        onChange={(e) =>
                          setPdfData({
                            ...pdfData,
                            [field.key]: e.target.value,
                          })
                        }
                        className="edit-input"
                      />
                      <button
                        className="edit-btn"
                        onClick={() => setPdfEditField(null)}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <span>
                        {field.label}: {pdfData[field.key]}
                      </span>
                      <button
                        className="edit-btn"
                        onClick={() => setPdfEditField(field.key)}
                      >
                        ADD
                      </button>
                    </>
                  )}
                </div>
              ))}
              <div className="user-info-footer">
                <button className="send-btn">Done</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default Dashboard;
 
=======
export default AdminDashboard;
>>>>>>> 6a9a07406c009de369ab72eecb5b3591c78a8fd6
