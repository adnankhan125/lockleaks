"use client";
import React, { useState } from "react";
import "../styles/AdminDashboard.css";
import "../styles/UserInfoModal.css";
import LeaksBoxes from '@/components/LeaksBoxes';
import LeaksLinks from '@/components/LeaksLinks';

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

          {[
            { name: "Search Engines", icon: "fa-search" },
            { name: "Leak Sites", icon: "fa-exclamation-triangle" },
            { name: "Scraping", icon: "fa-robot" },
            { name: "Users", icon: "fa-users" },
            { name: "Keywords", icon: "fa-key" },
            { name: "Send PDF", icon: "fa-file-pdf" },
            { name: "Whitelist", icon: "fa-check-circle" },
            { name: "Tasks", icon: "fa-tasks" },

            // Added tabs
            { name: "Links", icon: "fa-link" },
            { name: "Blogs", icon: "fa-blog" },
            { name: "Security", icon: "fa-shield-alt" },
            { name: "Reviews", icon: "fa-star" },
            { name: "ID Check", icon: "fa-id-card" },
            { name: "Subscriptions", icon: "fa-sync-alt" },
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


      {/* Whitelist TAB */}
            {activeTab === "Whitelist" && (
              <div className="whitelist-tab">
                <h6 className="text-center-search">Whitelist</h6>
              {/* Top Stats Boxes */}
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <div className="send-pdf-card send-pdf-card-row">
                        <h6>LEAKS :</h6>
                        <span className="send-pdf-value">120</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="send-pdf-card send-pdf-card-row">
                        <h6>MANUAL :</h6>
                        <span className="send-pdf-value">85</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="send-pdf-card send-pdf-card-row">
                        <h6>WHITELIST :</h6>
                        <span className="send-pdf-value">300</span>
                      </div>
                    </div>
                  </div>
                      <LeaksBoxes /> 
                  </div>
            )}

       {/* LINKS TAB */}
{activeTab === "Links" && (
  <div className="links-tab">
    <h6 className="text-center-search">Links</h6>
    {/* Top Stats Boxes */}
    <div className="row mb-4">
      <div className="col-md-12 d-flex justify-content-center">
        <div className="send-pdf-card send-pdf-card-row-rt">
          <h6>Total Links:</h6>
          <span className="send-pdf-value">120</span>
        </div>
      </div>
    </div>

    <LeaksLinks />
  </div>
)}




{/* SEARCH ENGINES TAB */}
{activeTab === "Search Engines" && (
  <div className="search-engines-tab">
    <h6 className="text-center-search">Search Engines</h6>

    {/* Top Stats Boxes */}
    <div className="row mb-4">
      <div className="col-md-4">
        <div className="send-pdf-card send-pdf-card-row">
          <h6>Manual Pending:</h6>
          <span className="send-pdf-value">120</span>
        </div>
      </div>
      <div className="col-md-4">
        <div className="send-pdf-card send-pdf-card-row">
          <h6>Auto Pending:</h6>
          <span className="send-pdf-value">85</span>
        </div>
      </div>
      <div className="col-md-4">
        <div className="send-pdf-card send-pdf-card-row">
          <h6>Sent:</h6>
          <span className="send-pdf-value">300</span>
        </div>
      </div>
    </div>

    {/* === New Section from Image === */}
   <div className="row">
  {/* === LEFT: Select Users === */}
    <div className="col-md-5">
      <div className="engine-card">
        <div className="row">
    </div>

    {/* Row with User List (left) and Results (right) */}
    <div className="row">
      {/* Left col - User List */}
      <div className="col-md-6">
         <h6 className="mb-2 select-users-title">Select Users</h6>
          <div className="position-relative">
            <input
                type="text"
                className="form-control custom-search ps-3 pe-5"
                placeholder="Search"
              />
               <i className="fa fa-search search-icon"></i>
       </div>
<div className="user-list">
  {["Model1", "Model2", "Model3", "Model4"].map((user, i) => (
    <label key={i} className="custom-checkbox">
      <input type="checkbox" />
      <span className="checkmark"></span>
      <span className="user-name">{user}</span>
    </label>
  ))}
</div>

     </div>

      {/* Right col - Results */}
      <div className="col-md-6">
          {/* Right col - Button */}
         <div className="col-md-6 d-flex justify-content-end align-items-start">
        <button className="btn start-btn-dash">START</button>
         </div>
          <h6 className="mb-2">Search Results</h6>
          <p className="result-item">
          <span><i className="fa fa-link"></i> Links:</span>
          <span>982</span>
          </p>

           <p className="result-item">
          <span><i className="fa fa-image"></i> Images:</span>
          <span>982</span>
        </p>

        <p className="result-item">
          <span><i className="fa fa-video"></i> Videos:</span>
          <span>982</span>
        </p>

      </div>
    </div>
  </div>
  
</div>
<div className="col-md-2">
  <div className="engine-card">
    <h6 className="mb-3 text-center">Search Engines</h6>
    <div className="row">
      {/* Left column (3 items) */}
      <div className="col-6">
        {[
          { name: "", img: "/icons/google.svg" },
          { name: "", img: "/icons/dashb.svg" },
          { name: "", img: "/icons/yahoo.svg" },
        ].map((engine, i) => (
          <label key={i} className="engine-result-box">
            <input type="checkbox" className="engine-checkbox" />
            <span className="custom-check"></span>
            <img src={engine.img} alt={engine.name} className="engine-logo" />
            <span className="engine-name">{engine.name}</span>
          </label>
        ))}
      </div>

      {/* Right column (2 items) */}
      <div className="col-6">
        {[
          { name: "", img: "/icons/yandex.svg" },
          { name: "", img: "/icons/DuckDuckGo.svg" },
        ].map((engine, i) => (
          <label key={i} className="engine-result-box">
            <input type="checkbox" className="engine-checkbox" />
            <span className="custom-check"></span>
            <img src={engine.img} alt={engine.name} className="engine-logo" />
            <span className="engine-name">{engine.name}</span>
          </label>
        ))}
      </div>
    </div>
  </div>
</div>


{/* === RIGHT: Engine Results === */}
<div className="col-md-5">
  <div className="engine-card">
    <h6 className="mb-3">Search Engines Results</h6>
    <div className="row">
      {/* Left column with first 3 */}
      <div className="col-6">
        {[
          { name: "Links", img: "/icons/google.svg", links: 982 },
          { name: "Links", img: "/icons/dashb.svg", links: 982 },
          { name: "Links", img: "/icons/yahoo.svg", links: 982 },
        ].map((engine, i) => (
          <div key={i} className="engine-result-box">
            <img src={engine.img} alt={engine.name} className="engine-logo" />
            <span className="engine-name">{engine.name}:</span>
            <span className="engine-count">{engine.links}</span>
          </div>
        ))}
      </div>

      {/* Right column with last 2 */}
      <div className="col-6">
        {[
          { name: "Links", img: "/icons/yandex.svg", links: 982 },
          { name: "Links", img: "/icons/DuckDuckGo.svg", links: 982 },
        ].map((engine, i) => (
          <div key={i} className="engine-result-box">
            <img src={engine.img} alt={engine.name} className="engine-logo" />
            <span className="engine-name">{engine.name}:</span>
            <span className="engine-count">{engine.links}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

</div>
{/* ==== Reports Table (paste BELOW your code) ==== */}
<div className="reports-wrap mt-4">
  <div className="reports-head">
    <div className="col id">ID</div>
    <div className="col order">Order</div>
    <div className="col model">Model</div>
    <div className="col engines">Search Engines</div>
    <div className="col date">Date</div>
    <div className="col action">Download</div>
  </div>

  {[
    {
      id: 1,
      order: 103,
      model: "BANDITAA",
      date: "10.05.2025",
      engines: ["/icons/dashb.svg", "/icons/google.svg", "/icons/yahoo.svg", "/icons/yandex.svg", "/icons/DuckDuckGo.svg"],
    },
    {
      id: 2,
      order: 103,
      model: "BANDITAA",
      date: "10.05.2025",
      engines: ["/icons/dashb.svg", "/icons/google.svg", "/icons/yahoo.svg", "/icons/yandex.svg", "/icons/DuckDuckGo.svg"],
    },
  ].map((row, i) => (
    <div key={i} className="report-row">
      <div className="col id">{row.id}</div>
      <div className="col order">{row.order}</div>
      <div className="col model">{row.model}</div>
      <div className="col engines">
        <div className="engine-icons">
          {row.engines.map((src, k) => (
            <img key={k} src={src} alt="se" />
          ))}
        </div>
      </div>
      <div className="col date">{row.date}</div>
      <div className="col action">
        <button className="btn-download">DOWNLOAD</button>
      </div>
    </div>
  ))}
</div>


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

           {/* LINKS TAB */}
                 

                  {/* BLOGS TAB */}
                  {activeTab === "Blogs" && (
                    <div className="blogs-tab">
                      <h3 className="mb-3">Blogs</h3>
                    </div>
                  )}

                  {/* SECURITY TAB */}
                  {activeTab === "Security" && (
                    <div className="security-tab">
                      <h3 className="mb-3">Security</h3>
                    </div>
                  )}

                  {/* REVIEWS TAB */}
                  {activeTab === "Reviews" && (
                    <div className="reviews-tab">
                      <h3 className="mb-3">Reviews</h3>
                    </div>
                  )}

                  {/* ID CHECK TAB */}
                  {activeTab === "ID Check" && (
                    <div className="idcheck-tab">
                      <h3 className="mb-3">ID Check</h3>
                    </div>
                  )}

                  {/* SUBSCRIPTIONS TAB */}
                  {activeTab === "Subscriptions" && (
                    <div className="subscriptions-tab">
                      <h3 className="mb-3">Subscriptions</h3>
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
