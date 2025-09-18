import React from "react";
import "../styles/UserName.css";

interface UserNameProps {
  onClose: () => void; // Prop to handle the close functionality
}

const UserName: React.FC<UserNameProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="userlist-wrap">
          {/* Header */}
          <div className="userlist-header">
            <span className="userlist-dot" />
            <div className="userlist-title">Usernames</div>
            <button
              className="userlist-close"
              aria-label="Close"
              onClick={onClose} // Call the onClose prop when the button is clicked
            >
              &times;
            </button>
          </div>

          {/* Search + Add */}
          <div className="userlist-toolbar">
            <div className="d-flex align-items-center gap-2">
              <div className="userlist-search flex-grow-1">
                <span className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M21 21l-4.2-4.2M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                      stroke="#cbb5e6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <input
                  className="form-control form-control-sm py-2"
                  type="text"
                  placeholder="Search @username..."
                  aria-label="Search username"
                />
              </div>
              <button className="btn userlist-add" type="button">ADD</button>
            </div>
          </div>

          {/* Body / List */}
          <div className="userlist-body">
            {/* item 1 */}
            <div className="userlist-item d-flex align-items-center justify-content-between">
              <div>
                <div className="name">@banditaa</div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button className="action" type="button">EDIT</button>
              </div>
            </div>

            {/* item 2 */}
            <div className="userlist-item d-flex align-items-center justify-content-between">
              <div>
                <div className="name">@banditaa_edited</div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button className="action" type="button">APPLY</button>
              </div>
            </div>

            {/* Repeat .userlist-item as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserName;
