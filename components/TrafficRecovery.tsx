'use client';
import React from 'react';
import '../styles/TrafficRecoverySection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TrafficRecoverySection() {
  const sites = [
    { name: 'leakzone.com', status: 'Blocked', reason: 'Piracy', y: '25%' },
    { name: 'linkedin.com', y: '50%' },
    { name: 'gamezone.com', y: '88%' },
    { name: 'sportbet360.com', status: 'Blocked', reason: 'Gambling', y: '60%' },
    { name: 'reddit.com', y: '20%' },
    { name: 'musicplus.com', y: '30%' },
    { name: 'filestreams.cc', status: 'Blocked', reason: 'Copyright', y: '50%' },
    { name: 'dailymail.com', y: '70%' },
    { name: 'xvidtube.net', status: 'Blocked', reason: 'Adult Content', y: '35%' },
    { name: 'quora.com', y: '60%' }
  ];

  return (
    <section className="traffic-recovery-section">
      <div className="text-center mb-5">
        <h2 className="traffic-title">Traffic Recovery</h2>
        <p className="traffic-subtitle">Recover Lost Traffic – Boost Your Earnings</p>
        <p className="traffic-desc">Turn leaked views into paying subscribers.</p>
      </div>

      <div className="grid-background position-relative mx-auto">
        <div className="circle-3k circle-1"></div>
        <div className="circle-3k circle-2"></div>
        <div className="circle-3k circle-3"></div>

        <div className="scrolling-sites">
          {[...sites, ...sites].map((site, idx) => (
            <div
              key={idx}
              className={`site-box ${site.status ? 'highlighted' : ''} ${site.name === 'reddit.com' ? 'blurred-box' : ''}`}
              style={{ top: site.y }}
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
      </div>
    </section>
  );
}
