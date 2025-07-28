'use client';

import React from 'react';
import '../styles/PlatformSection.css';

const platforms = [
  { name: 'TikTok', description: 'Complete Protection for OnlyFans Creators', src: '/icons/TikTokblog.svg' },
  { name: 'Instagram', description: 'Secure your profile and content 24/7', src: '/icons/instagramblog.svg' },
  { name: 'Fansly', description: 'Protection for monetized content', src: '/icons/Fansly.svg' },
  { name: 'Twitter', description: 'Prevent unauthorized reposting', src: '/icons/Twitterlog.svg' },
  { name: 'Snapchat', description: 'AI monitoring for stolen content', src: '/icons/snapchatblog.svg' },
  { name: 'Reddit', description: 'Safeguard against leaks and misuse', src: '/icons/Redditblog.svg' },
  { name: 'Telegram', description: 'Shield your stories and snaps', src: '/icons/Telegramblog.svg' },
  { name: 'OnlyFans', description: 'Core protection with priority detection', src: '/images/only.svg' }
];

const PlatformSection: React.FC = () => {
  return (
    <section className="platform-section text-center">
      <div className="container">
        <h2 className="platform-heading">Our Platform Solutions</h2>
        <p className="platform-subtext">
          Protect your content across the platforms that matter most.
        </p>

        {/* First Row */}
        <div className="platform-row">
          {platforms.slice(0, 3).map((platform, index) => (
            <div className="platform-grid-item" key={index}>
              <div className="platform-card">
                <div className="platform-top">
                  <div className="platform-icon">
                    <img src={platform.src} alt={platform.name} className="platform-icon-img" />
                  </div>
                  <h5 className="platform-title">{platform.name}</h5>
                </div>
                <p className="platform-description">{platform.description}</p>
                <a href="#" className="platform-btn">Protect My Account →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="platform-row">
          {platforms.slice(3, 6).map((platform, index) => (
            <div className="platform-grid-item" key={index + 3}>
              <div className="platform-card">
                <div className="platform-top">
                  <div className="platform-icon">
                    <img src={platform.src} alt={platform.name} className="platform-icon-img" />
                  </div>
                  <h5 className="platform-title">{platform.name}</h5>
                </div>
                <p className="platform-description">{platform.description}</p>
                <a href="#" className="platform-btn">Protect My Account →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Third Row */}
        <div className="platform-row">
          {platforms.slice(6).map((platform, index) => (
            <div className="platform-grid-item" key={index + 6}>
              <div className="platform-card">
                <div className="platform-top">
                  <div className="platform-icon">
                    <img src={platform.src} alt={platform.name} className="platform-icon-img" />
                  </div>
                  <h5 className="platform-title">{platform.name}</h5>
                </div>
                <p className="platform-description">{platform.description}</p>
                <a href="#" className="platform-btn">Protect My Account →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
