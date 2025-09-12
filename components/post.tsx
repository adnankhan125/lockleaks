import React from "react";
import '../styles/post.css';

const Post: React.FC = () => {
  return (
    <div className="post">
      <div className="post-title-field">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" placeholder="Enter title" />
      </div>

      <div className="post-time-upload-row">
        <div className="post-time-field">
          <label htmlFor="time">Time</label>
          <input type="text" id="time" name="time" placeholder="Enter time" />
        </div>

        <div className="post-upload-video-field">
          <label htmlFor="upload-video">Upload Video</label>
          <input type="file" id="upload-video" name="upload-video" />
        </div>
      </div>
    </div>
  );
};

export default Post;
