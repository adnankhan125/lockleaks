import React, { useState } from 'react';
import "../styles/ContentLeaksLock.css";

const ContentLeaksLock: React.FC = () => {
  const [profilePic, setProfilePic] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfilePic(e.target.files[0]);
    }
  };

  return (
    <div className="container my-5">
      <div className="content-leaks-lock">
        <form>
          <div className="form-container">
            {/* Left Section */}
            <div className="form-left">
              <div className="form-row">
                <label htmlFor="contentLockLeaks">Content Lock Leaks:</label>
                <input type="text" id="contentLockLeaks" placeholder="Enter content lock leaks" />
              </div>

              <div className="form-row">
                <label htmlFor="contentAgency1">Content Agency:</label>
                <input type="text" id="contentAgency1" placeholder="Enter content agency" />
              </div>

              <div className="form-row">
                <label htmlFor="contentAgency2">Content Agency:</label>
                <input type="text" id="contentAgency2" placeholder="Enter content agency" />
              </div>

              <div className="form-row">
                <label htmlFor="contentLockLeaks2">Content Lock Leaks:</label>
                <input type="text" id="contentLockLeaks2" placeholder="Enter content lock leaks" />
              </div>
            </div>

            {/* Right Section */}
            <div className="form-right">
              <div className="form-row">
                <label htmlFor="profilePic">Profile Pic:</label>
                <input 
                  type="file" 
                  id="profilePic" 
                  onChange={handleFileChange} 
                />
                {profilePic && <p>Selected file: {profilePic.name}</p>}
              </div>

              <div className="form-row">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value="Alexos" />
              </div>

              <div className="form-row">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value="Creator" />
              </div>
            </div>
          </div>

          {/* Submit Button Row */}
          <div className="form-row button-row">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContentLeaksLock;
