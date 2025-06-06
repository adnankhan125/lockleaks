'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../public/images/your-logo.svg'; // replace with your actual logo path
import '../styles/AgencyProtectionSection.css';

export default function AgencyProtectionSection() {
  return (
    <section className="agency-protection-section text-center">
      <div className="inner-wrapper">
        <Image src={logo} alt="Logo" className="section-logo mb-4" width={100} height={100} />

        <h2 className="section-heading">
          Protect Your Creators. Protect Your Business.
        </h2>

        <p className="section-description">
          Advanced leak detection and content protection for agencies and studios.
        </p>

        <button className="secure-btn">Secure Your Agency</button>
      </div>
    </section>
  );
}
