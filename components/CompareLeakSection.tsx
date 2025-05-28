'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CompareLeakSection.css';

export default function CompareLeakSection() {
  return (
    <section className="compare-leak-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>
            <span className="text-muted">Manual </span>
            <span className="text-pink">Leak Removal</span>
            <span className="vs-divider"> vs </span>
            <span className="text-white">Lock Leaks</span>
          </h2>
        </div>
        <div className="row gy-4 align-items-center justify-content-center">
          {/* LEFT SIDE */}
          <div className="col-md-5">
            <div className="circle-card">
              <div className="text-center text-pink fw-bold mb-2">YOU</div>
              <div className="text-center text-light mb-4">You Chase Leaks.</div>
              <div className="text-center">
                <img src="/images/pill.svg" alt="Wasting time" className="pill-image" />
              </div>
            </div>
          </div>

          {/* MIDDLE VS LINE IMAGE */}
          <div className="col-md-1 d-none d-md-flex justify-content-center">
            <img src="/images/vs-divider.svg" alt="VS Divider" className="vs-line-img" />
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6">
            <div className="tab-card dark">
              <div className="tab-header text-center text-white">LOCK LEAKS</div>
              <div className="tab-sub text-center">We Delete Them.</div>
              <div className="tab-body">
                <div className="pill highlight">⚡ Instant AI takedowns, fast real-time alerts.</div>
                <div className="pill highlight">👁️ Track every move, always in full control.</div>
                <div className="pill highlight">🛡️ We fight leaks hard — so you don’t have to.</div>
                <div className="pill highlight">🔐 Protect your content and secure your income.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
