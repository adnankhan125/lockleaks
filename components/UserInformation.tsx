import React, { useState } from "react";
import "../styles/UserInformation.css";
import UserName from "./UserName";  // Import the UserName component

const UserInformation: React.FC = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState("");

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
      <div className="section-header">ID: 1</div>

      {/* Editable Fields */}
      {["usernames", "stageNames", "email", "name", "phone", "contact", "subscription", "expire", "agency", "keywords", "specialKeywords", "pdf", "payments", "photoAssign", "infoSubscription"].map((field, idx) => (
        <div key={idx} className="editable-row">
          <p><strong>{field.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> Sample Data</p>
          <button className="edit-btn" onClick={() => openEditModal(field)}>EDIT</button>
        </div>
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
