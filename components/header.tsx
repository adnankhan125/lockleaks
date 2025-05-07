'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/lockleaks.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-custom">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-6 col-md-4">
            <Link href="/">
              <Image src={logo} alt="Logo" width={185} height={50} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="menu-wrapper d-none d-md-flex col-md-4 justify-content-center">
            <Link href="/services" className="nav-link-custom">Services</Link>
            <Link href="/pricing" className="nav-link-custom">Pricing</Link>
            <Link href="/agencies" className="nav-link-custom">Agencies</Link>
            <Link href="/blog" className="nav-link-custom">Blog</Link>
          </div>

          {/* Buttons + Hamburger */}
          <div className="col-6 col-md-4 d-flex justify-content-end align-items-center gap-2">
            <div className="d-none d-md-flex gap-2">
              <button className="btn-login">Log in</button>
              <button className="btn-start">Start Free</button>
            </div>
            <div className="d-md-none">
              <button
                className="hamburger-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="mobile-nav d-flex flex-column align-items-end pe-3 mt-2">
            <Link href="/services" className="nav-link-custom mb-1">Services</Link>
            <Link href="/pricing" className="nav-link-custom mb-1">Pricing</Link>
            <Link href="/agencies" className="nav-link-custom mb-1">Agencies</Link>
            <Link href="/blog" className="nav-link-custom">Blog</Link>
          </div>
        )}
      </div>
    </header>
  );
}
