'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import gIcon from '../public/images/googleeee.svg';
import brokenHeartIcon from '../public/images/brokenheart.svg';
import heartIcon from '../public/images/heart.svg';
import triangleIcon from '../public/images/alert.svg';
import bIcon from '../public/images/Component 6.svg';
import icon from '../public/images/your-icon.png';
import checkIcon from '../public/images/check-icon.png';
import '../styles/animated.css';
import '../styles/protectWithVisual.css';

export default function ProtectionSection() {
  const [count, setCount] = useState(100000);
  const [hovering, setHovering] = useState(false);

  // Mouse move par icons move hote hain
  useEffect(() => {
    const icons = document.querySelectorAll('.positioned-img');
    const container = document.querySelector('.image-stack');
    
    if (!container) return;
    
    container.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      icons.forEach((icon, index) => {
        const moveX = (x - 0.5) * (index + 1) * 10;
        const moveY = (y - 0.5) * (index + 1) * 10;
        icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  }, []);

  // Hover animation counter
  useEffect(() => {
    let interval;
    if (hovering && count < 135000) {
      interval = setInterval(() => {
        setCount((prev) => {
          if (prev < 135000) return prev + 1000;
          clearInterval(interval);
          return prev;
        });
      }, 80);
    }
    return () => clearInterval(interval);
  }, [hovering, count]);

  return (
    <section className="ai-anonymity-section py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">

          {/* Left Content */}
          <div className="col-lg-7">
            <div className="ai-text">
              <h2 className="ai-heading d-flex align-items-start position-relative">
                <span className="arrow-icon-img me-2 position-relative">
                  <Image src={icon} alt="Icon" width={50} height={50} />
                </span>
                <span className="highlight">AI & Anonymity</span>
              </h2>

              <p className="subtitle ms-5">
                Advanced AI tools detect violations while ensuring your personal information remains private and secure.
              </p>

              <ul className="ai-features list-unstyled">
                <li>
                  <span className="check-icon-img">
                    <Image src={checkIcon} alt="Check" width={35} height={35} />
                  </span>
                  Facial Recognition & OCR: AI identifies infringing content with precision, even in challenging scenarios.
                </li>
                <li>
                  <span className="check-icon-img">
                    <Image src={checkIcon} alt="Check" width={35} height={35} />
                  </span>
                  Anonymity Guaranteed: We use our company details for DMCA notices, keeping your real name private.
                </li>
                <li>
                  <span className="check-icon-img">
                    <Image src={checkIcon} alt="Check" width={35} height={35} />
                  </span>
                  Lumen Database Privacy: Avoid exposure in public databases, safeguarding your identity.
                </li>
                <li>
                  <span className="check-icon-img">
                    <Image src={checkIcon} alt="Check" width={35} height={35} />
                  </span>
                  Round-the-Clock Scanning: Our systems work 24/7 to detect and protect your content proactively.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Animated Visual */}
          <div className="col-lg-5 d-flex justify-content-center mt-4 mt-lg-0">
            <div className="right-image-stack position-relative" style={{ width: '400px', height: '400px' }}>
              <Image src={gIcon} alt="G Icon" className="right-positioned-img animation-left" width={100} height={100} />
              <Image src={brokenHeartIcon} alt="Broken Heart" className="right-positioned-img animation-center" width={80} height={80} />
              <Image src={heartIcon} alt="Heart" className="right-positioned-img animation-right" width={100} height={100} />
              <Image src={triangleIcon} alt="Triangle" className="right-positioned-img animation-right2" width={70} height={70} />
              <Image src={bIcon} alt="B Icon" className="right-positioned-img animation-right3" width={90} height={90} />

              {/* Detected Leaks and count */}
              <div
                className="detected-leaks-count"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => {
                  setHovering(false);
                  setCount(100000); // Reset
                }}
              >
                <span className="detected-leaks-text">Detected Leaks</span><br />
                <span className="count">{Math.floor(count / 1000)}K</span>
                <span className="percentage">+3.4%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
