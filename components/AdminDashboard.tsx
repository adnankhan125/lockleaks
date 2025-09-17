"use client";
import React, { useState } from "react";
import "../styles/AdminDashboard.css";
import "../styles/UserInfoModal.css";
import Link from "next/link";
import ReportALeak from '@/components/ReportALeak';
import LeakSiteSec from "./LeakSiteSec";

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
              { name: "Report a Leak", icon: "fa-flag" },
              { name: "Check a Leak Site", icon: "fa-file" }

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
                <img src="icons/X_AE_A-13b.svg" alt="Avatar" />
                <span className="admin-dashboard-text-gradient">
                  X_AE_A-13b
                </span>
              </div>
              <i className="fa fa-sign-out-alt admin-dashboard-logout-icon"></i>
            </div>

            {/* "Report a Leak" Tab */}
            {activeTab === "Report a Leak" && (
              <div className="report-leak-tab">
                {/* Render ReportALeak Component */}
                <ReportALeak />
              </div>
            )}

             {/* "Check a Leak Site */}
            {activeTab === "Check a Leak Site" && (
              <div className="report-leak-tab">
              <h4>Check a Leak Site</h4>
                <LeakSiteSec/>
              </div>
            )}

            {/* SEND PDF TAB */}
            {activeTab === "Send PDF" && (
              <div className="send-pdf-tab">
                {/* Top Stats Boxes */}
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="send-pdf-card send-pdf-card-row">
                      <h6>Manual Pending:</h6>
                      <span className="send-pdf-value">982</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="send-pdf-card send-pdf-card-row">
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

export default AdminDashboard;
