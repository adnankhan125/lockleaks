'use client';

import React from 'react';
import '../styles/PlatformSection.css'; // Create this CSS file in same folder

const PlatformSection: React.FC = () => {
  return (
    <section className="platform-section text-center">
      <div className="container">
        <h2 className="platform-heading">Our Platform Solutions</h2>
        <p className="platform-subtext">
          Protect your content across the platforms that matter most.
        </p>

        <div className="row g-4 justify-content-center">
          {/* Box 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="platform-card">
              <div className="platform-top">
                <div className="platform-icon">
                  {/* Replace with real SVG */}
                  <svg width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" />
                  </svg>
                </div>
                <h5 className="platform-title">TikTok</h5>
              </div>
              <p className="platform-description">Complete Protection for OnlyFans Creators</p>
              <a href="#" className="platform-btn">Protect My Account →</a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="platform-card">
              <div className="platform-top">
                <div className="platform-icon">
                  {/* Replace with real SVG */}
                  <svg width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" />
                  </svg>
                </div>
                <h5 className="platform-title">TikTok</h5>
              </div>
              <p className="platform-description">Complete Protection for OnlyFans Creators</p>
              <a href="#" className="platform-btn">Protect My Account →</a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="platform-card">
              <div className="platform-top">
                <div className="platform-icon">
                  {/* Replace with real SVG */}
                  <svg width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" />
                  </svg>
                </div>
                <h5 className="platform-title">TikTok</h5>
              </div>
              <p className="platform-description">Complete Protection for OnlyFans Creators</p>
              <a href="#" className="platform-btn">Protect My Account →</a>
            </div>
          </div>


          <div className="col-md-6 col-lg-4">
            <div className="platform-card">
              <div className="platform-top">
                <div className="platform-icon">
                  {/* Replace with real SVG */}
                  <svg width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" />
                  </svg>
                </div>
                <h5 className="platform-title">TikTok</h5>
              </div>
              <p className="platform-description">Complete Protection for OnlyFans Creators</p>
              <a href="#" className="platform-btn">Protect My Account →</a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="platform-card">
              <div className="platform-top">
                <div className="platform-icon">
                  {/* Replace with real SVG */}
                  <svg width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" />
                  </svg>
                </div>
                <h5 className="platform-title">TikTok</h5>
              </div>
              <p className="platform-description">Complete Protection for OnlyFans Creators</p>
              <a href="#" className="platform-btn">Protect My Account →</a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="platform-card">
              <div className="platform-top">
                <div className="platform-icon">
                  {/* Replace with real SVG */}
                  <svg width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" />
                  </svg>
                </div>
                <h5 className="platform-title">TikTok</h5>
              </div>
              <p className="platform-description">Complete Protection for OnlyFans Creators</p>
              <a href="#" className="platform-btn">Protect My Account →</a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="platform-card">
              <div className="platform-top">
                <div className="platform-icon">
                  {/* Replace with real SVG */}
                  <svg width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" />
                  </svg>
                </div>
                <h5 className="platform-title">TikTok</h5>
              </div>
              <p className="platform-description">Complete Protection for OnlyFans Creators</p>
              <a href="#" className="platform-btn">Protect My Account →</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="platform-card">
              <div className="platform-top">
                <div className="platform-icon">
                  {/* Replace with real SVG */}
                  <svg width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" />
                  </svg>
                </div>
                <h5 className="platform-title">TikTok</h5>
              </div>
              <p className="platform-description">Complete Protection for OnlyFans Creators</p>
              <a href="#" className="platform-btn">Protect My Account →</a>
            </div>
          </div>

          {/* Duplicate above block for other platforms */}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
