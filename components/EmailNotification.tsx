import React from "react";
import "../styles/EmailNotification.css";

const EmailNotification: React.FC = () => {
  return (
    <div className="email-wrapper">
      <div className="email-card">
        {/* Header */}
        <h1 className="email-title">Lock Leaks</h1>
        <h2 className="email-subtitle">Welcome Email</h2>

        {/* Body */}
        <p className="email-text">
          Hi <span>[User First Name]</span>,
        </p>
        <p className="email-text-light">
          Welcome to Lock Leaks! We’re thrilled to have you onboard. Your journey
          to securing your valuable content begins today.
        </p>

        <p className="email-text">Here’s what you can do now:</p>
        <ul className="email-list">
          <li>
            <span>Run Your First Scan:</span> Detect leaks across platforms like
            Google, Instagram, TikTok, and more.
          </li>
          <li>
            <span>Explore Your Dashboard:</span> Track takedowns and monitor your
            content’s safety in real-time.
          </li>
          <li>
            <span>Upgrade for Enhanced Features:</span> Unlock advanced
            protection, including AI-driven monitoring and deepfake removal.
          </li>
        </ul>

        {/* CTA Button */}
        <div className="email-btn-wrapper">
          <button className="email-btn">Get Started Now</button>
        </div>

        {/* Footer */}
        <p className="email-footer-text">
          If you have any questions, our team is here to help 24/7. Your protection
          is our priority.
        </p>
        <p className="email-footer-text">
          Thank you for trusting <span className="font-semibold">Lock Leaks</span>{" "}
          to safeguard your work.
          <br />
          Best regards,
          <br />
          <span className="font-semibold">The Lock Leaks Team</span>
        </p>
      </div>
    </div>
  );
};

export default EmailNotification;
