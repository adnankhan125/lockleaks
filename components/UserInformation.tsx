import React, { useState } from "react";
import "../styles/UserInformation.css";
import UserName from "./UserName";  // Import the UserName component

const UserInformation: React.FC = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState("");

  const userData = {
    id: 1,
    usernames: "@banditaa, @banditaa, @banditaa",
    stageNames: "Stage",
    email: "sivlidstefan@yahoo.com",
    name: "Nice Brother",
    phone: "+123042852394",
    contact: "Whatsapp",
    subscription: "Active",
    expire: "12.04.2025",
    agency: "Yes",
    keywords: "onlyfans leaks",
    specialKeywords: "banditaa site: facebook.com",
    pdf: "SENT [20.03.2025]",
    payments: "payment_id Stripe transaction",
    photoAssign: "2",
    infoSubscription: "Manual",
  };

  // Open the UserName component for editing
  const openEditModal = (fieldName: string) => {
    setCurrentField(fieldName);
    setIsEditModalOpen(true);
  };

  // Close the modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentField(""); // Reset the current field after closing
  };

  return (
    <div className="user-container">
      <div className="section-header">ID: {userData.id}</div>

      {/* Editable Fields */}
      {Object.keys(userData).map((field, idx) => (
        field !== 'id' && (
          <div key={idx} className="editable-row">
            <p><strong>{field.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> {userData[field as keyof typeof userData]}</p>
            <button className="edit-btn" onClick={() => openEditModal(field)}>EDIT</button>
          </div>
        )
      ))}

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="edit-btn">ATTACH</button>
        <button className="edit-btn">DOWNLOAD</button>
      </div>

      {/* Conditionally Render UserName Component */}
      {isEditModalOpen && (
        <UserName onClose={closeEditModal} />
      )}
    </div>
  );
};

export default UserInformation;
