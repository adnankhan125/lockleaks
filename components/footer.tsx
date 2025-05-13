'use client';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/footer.css';  // Import the CSS file
import logo from '../public/images/lockleaks.png';
import xIcon from '../public/icons/x.png';
import instagramIcon from '../public/icons/instagram.png';
import tiktokIcon from '../public/icons/tiktok.png';
import redditIcon from '../public/icons/reddit.png';
import facebookIcon from '../public/icons/facebook.png';

export default function Footer() {
  return (
    <footer className="custom-footer text-white pt-5 pb-3">
      <div className="footer container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Logo and Social Icons */}
          <div className="text-center text-md-start mb-3 mb-md-0">
            <Link href="/">
              <Image src={logo} alt="Logo" width={185} height={50} />
            </Link>
            <div className="d-flex align-items-center mt-3">
              {/* <Image src={sparkle} alt="Sparkle" width={16} className="me-2" /> */}
              {/* <div className="d-flex gap-2">
                <Image src={xIcon} alt="X" width={16} />
                <Image src={instagramIcon} alt="Instagram" width={16} />
                <Image src={tiktokIcon} alt="TikTok" width={16} />
                <Image src={redditIcon} alt="Reddit" width={16} />
                <Image src={facebookIcon} alt="Facebook" width={16} />
              </div> */}
              <div className="d-flex gap-2">
                {[xIcon, instagramIcon, tiktokIcon, redditIcon, facebookIcon].map((icon, index) => (
                  <div
                    key={index}
                    className="bg-white d-flex align-items-center justify-content-center"
                    style={{ width: '32px', height: '32px', borderRadius: '4px' }}
                  >
                    <Image src={icon} alt="icon" width={16} height={16} />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Menu Links */}
          <div className="text-center mb-3 mb-md-0">
            <ul className="list-unstyled d-flex gap-4 mb-0">
              <li><Link href="/services" className="text-white text-decoration-none">Services</Link></li>
              <li><Link href="/pricing" className="text-white text-decoration-none">Pricing</Link></li>
              <li><Link href="/agencies" className="text-white text-decoration-none">Agencies</Link></li>
              <li><Link href="/blog" className="text-white text-decoration-none">Blog</Link></li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="text-center text-md-end">
            <Link href="/start" className="btn btn-start-free px-4">
              Start Free
            </Link>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom Row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
          <p className="mb-2 mb-md-0">Copyright: © 2025 Lock Leaks. All Right Reserved.</p>
          <div className="d-flex gap-3">
            <Link href="/terms" className="text-white text-decoration-none">Terms Of Service</Link>
            <Link href="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
