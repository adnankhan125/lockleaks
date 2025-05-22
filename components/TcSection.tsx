import React from 'react';
import '../styles/TcSection.css';
import { Play } from 'lucide-react';

const features = [
  {
    title: 'Content Removal',
    description: 'We detect and remove unauthorized videos and images from piracy-based platforms through advanced AI and legal takedowns.',
    icon: '/images/removal-icon.svg',
  },
  {
    title: 'Traffic Recovery',
    description: 'We intercept traffic from leak sites and redirect it to verified profiles, transforming piracy exposure into organic growth.',
    icon: '/images/traffic-icon.svg',
  },
  {
    title: 'Leak Monitoring',
    description: '24/7 surveillance of high-risk platforms ensures rapid detection of new leaks and immediate enforcement action.',
    icon: '/images/monitoring-icon.svg',
  },
];

export default function TcSection() {
  return (
    <section className="tc-section terms-wrapper">
      {/* 🔵 New Decorative Circles */}
      <div className="service-circle-left" />
      <div className="service-circle-right" />

      <h2>Protect Your Online Persona</h2>
      <p className="subtitle">Protect Your Content, Stop Copycats, Stay in Control with Lock Leaks</p>
      <p className="desc">Stop leaks, shut down impersonators, and secure your earnings.</p>
      <button className="start-btn">Start Free</button>

      <div className="video-box">
        <button>
          <Play size={16} />
          Play Video
        </button>
      </div>

      <div className="features">
        {features.map((item, idx) => (
          <div key={idx} className="feature-box">
            <div className="icon-title">
              <img src={item.icon} alt="Icon" className="feature-icon" />
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
