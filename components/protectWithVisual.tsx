'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Default icons
import gIcon from '../public/images/googleeee.svg';
import brokenHeartIcon from '../public/images/brokenheart.svg';
import heartIcon from '../public/images/heart.svg';
import triangleIcon from '../public/images/alert.svg';
import bIcon from '../public/images/Component 6.svg';

// Hover icons
import gIconHover from '../public/images/hover-google.svg';
import brokenHeartHover from '../public/images/hover-brokenheart.svg';
import heartHover from '../public/images/hover-heart.svg';
import triangleHover from '../public/images/hover-alert.svg';
import bHover from '../public/images/hover-b.svg';

import icon from '../public/images/your-icon.png';
import checkIcon from '../public/images/check-icon.png';
import '../styles/animated.css';
import '../styles/protectWithVisual.css';

export default function ProtectionSection() {
  const [count, setCount] = useState(100000);
  const [hovering, setHovering] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null); // Tracks which image is hovered

  // Mouse move par icons move hote hain
  useEffect(() => {
    const icons = document.querySelectorAll('.positioned-img');
    const container = document.querySelector('.image-stack');
    if (!container) return;

    const handler = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      icons.forEach((icon, index) => {
        const moveX = (x - 0.5) * (index + 1) * 10;
        const moveY = (y - 0.5) * (index + 1) * 10;
        icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    container.addEventListener('mousemove', handler);
    return () => container.removeEventListener('mousemove', handler);
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
                  <span className="highlight">Protection & Takedown</span>
                </h2>
                <p className="subtitle ms-5">
                  Automated daily scans and manual support ensure your content stays secure and protected.
                </p>
                <ul className="ai-features list-unstyled">
                  {[
                    'Daily Automation: Our system performs automated scans every 24 hours to detect and remove infringing content.',
                    'Proactive Takedowns: We issue takedown requests promptly, keeping your digital assets safe at all times.',
                    'Tailored Solutions: For unique cases, our dedicated agents handle manual takedowns with precision and care.',
                    'Seamless Integration: Our approach is designed to adapt to your specific content protection needs.',
                  ].map((text, i) => (
                    <li key={i}>
                      <span className="check-icon-img">
                        <Image src={checkIcon} alt="Check" width={35} height={35} />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>


          {/* Right Animated Visual */}
          <div className="col-lg-5 d-flex justify-content-center mt-4 mt-lg-0">
            <div className="right-image-stack position-relative image-stack" style={{ width: '400px', height: '400px' }}>

              {/* G Icon */}
              <Image
                src={hoveredIcon === 'g' ? gIconHover : gIcon}
                alt="G Icon"
                className="right-positioned-img animation-left"
                width={100}
                height={100}
                onMouseEnter={() => setHoveredIcon('g')}
                onMouseLeave={() => setHoveredIcon(null)}
              />

              {/* Broken Heart */}
              <Image
                src={hoveredIcon === 'bh' ? brokenHeartHover : brokenHeartIcon}
                alt="Broken Heart"
                className="right-positioned-img animation-center"
                width={80}
                height={80}
                onMouseEnter={() => setHoveredIcon('bh')}
                onMouseLeave={() => setHoveredIcon(null)}
              />

              {/* Heart */}
              <Image
                src={hoveredIcon === 'h' ? heartHover : heartIcon}
                alt="Heart"
                className="right-positioned-img animation-right"
                width={100}
                height={100}
                onMouseEnter={() => setHoveredIcon('h')}
                onMouseLeave={() => setHoveredIcon(null)}
              />

              {/* Triangle */}
              <Image
                src={hoveredIcon === 't' ? triangleHover : triangleIcon}
                alt="Triangle"
                className="right-positioned-img animation-right2"
                width={70}
                height={70}
                onMouseEnter={() => setHoveredIcon('t')}
                onMouseLeave={() => setHoveredIcon(null)}
              />

              {/* B Icon */}
              <Image
                src={hoveredIcon === 'b' ? bHover : bIcon}
                alt="B Icon"
                className="right-positioned-img animation-right3"
                width={90}
                height={90}
                onMouseEnter={() => setHoveredIcon('b')}
                onMouseLeave={() => setHoveredIcon(null)}
              />

              {/* Detected Leaks and Count */}
              <div
                className="detected-leaks-count"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => {
                  setHovering(false);
                  setCount(100000);
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
