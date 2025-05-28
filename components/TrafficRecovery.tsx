'use client';
import React from 'react';
import '../styles/TrafficRecoverySection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TrafficRecoverySection() {
  const sites = [
    { name: 'rutorentz.net', status: 'Blocked', reason: 'Piracy', x: '40%', y: '25%' },
    { name: 'linkedin.com', x: '10%', y: '50%' },
    { name: 'gamezone.com', x: '30%', y: '88%' },
    { name: 'sportbet360.com', status: 'Blocked', reason: 'Gambling', x: '55%', y: '60%' },
    { name: 'reddit.com', x: '85%', y: '20%' },
  ];

  return (
    <section className="traffic-recovery-section">
      <div className="text-center mb-5">
      <h2 className="traffic-title">Traffic Recovery</h2>
      <p className="traffic-subtitle">Recover Lost Traffic – Boost Your Earnings</p>
      <p className="traffic-desc">Turn leaked views into paying subscribers.</p>
    </div>


      <div className="grid-background position-relative mx-auto">
        {/* 3 Pink Blur Circles */}
        <div className="circle-3k circle-1"></div>
        <div className="circle-3k circle-2"></div>
        <div className="circle-3k circle-3"></div>

        {sites.map((site, idx) => (
          <div
            key={idx}
            className={`site-box ${site.status ? 'highlighted' : ''} ${site.name === 'reddit.com' ? 'blurred-box' : ''}`}
            style={{ left: site.x, top: site.y }}
          >
            <strong className="site-title">{site.name}</strong>
            {site.status && (
              <>
                <div className="status-label">
                  <span>Status</span>
                  <span className="text-pink">{site.status}</span>
                </div>
                <div className="status-reason">
                  <span>Condition</span>
                  <span>{site.reason}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
