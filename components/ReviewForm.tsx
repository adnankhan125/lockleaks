import React, { useState } from "react";
import "../styles/ReviewForm.css"; // CSS import


const ReviewForm: React.FC = () => {
  const [content, setContent] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [name, setName] = useState("Alexos");
  const [title, setTitle] = useState("Creator");
  const [link, setLink] = useState("https://x.com/twitter");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ content, profilePic, name, title, link });
  };

  return (
    <div className="review-container">

      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-columns">
          {/* Left Column */}
          <div className="left-col">
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>
              <textarea
                className="form-control"
                id="content"
                rows={11}
                placeholder="Write your review..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="right-col">
            <div className="mb-3">
              <label htmlFor="profilePic" className="form-label">Profile Pic</label>
              <input
                type="file"
                className="form-control"
                id="profilePic"
                onChange={(e) => setProfilePic(e.target.files ? e.target.files[0] : null)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="link" className="form-label">Link</label>
              <input
                type="url"
                className="form-control"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-pink">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
