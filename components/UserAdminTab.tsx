"use client";
import React from "react";
import "../styles/useradmintab.css";

interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  phone: string;
  contact: string;
  subscription: string;
  expire: string;
  agency: string;
  status: string;
}

const users: User[] = [
  {
    id: 1,
    username: "@banditaa",
    email: "pssilviu...@",
    name: "Estrela",
    phone: "+40586...",
    contact: "icon",
    subscription: "Inactive",
    expire: ".................",
    agency: "No",
    status: "SELECT",
  },
  {
    id: 2,
    username: "@usman4u",
    email: "usman@example.com",
    name: "Usman",
    phone: "+92345...",
    contact: "icon",
    subscription: "Active",
    expire: "26.04.2025",
    agency: "Yes",
    status: "SELECT",
  },
];

const UserAdminTab: React.FC = () => {
  return (

        <div className="user-admin-tab">
                          <h4>Users</h4>

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



      <div className="user-admin-table-wrapper">
        <table className="user-admin-table text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>@username</th>
              <th>Email</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Contact</th>
              <th>Subscription</th>
              <th>Expire</th>
              <th>Agency?</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.name}</td>
                <td>{u.phone}</td>
               <td>
                  <div className="user-admin-icons">
                    <img src="icons/masVector.svg" alt="icon" width="18" height="18" />
                    <img src="icons/qwertVector.svg" alt="icon" width="18" height="18" />
                    <img src="icons/Group 1000005240.svg" alt="icon" width="18" height="18" />
                  </div>
                </td>

                <td>
                  <span
                    className={`user-admin-badge ${
                      u.subscription === "Active" ? "active" : "inactive"
                    }`}
                  >
                    {u.subscription}
                  </span>
                </td>
                <td>{u.expire}</td>
                <td>{u.agency}</td>
                <td>
                  <button className="user-admin-select-btn">{u.status}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAdminTab;
