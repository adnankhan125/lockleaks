'use client';
import Image from 'next/image';
import face from '../public/images/Face.png';
import phone from '../public/images/Mobile.png';
import hand from '../public/images/hand.png';
import icon from '../public/images/your-icon.png'
import checkIcon from '../public/images/check-icon.png'; // your uploaded icon
import '../styles/animated.css';

export default function AiAnonymitySection() {
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
            <div className="image-stack position-relative" style={{ width: '250px', height: '400px' }}>
              <Image src={face} alt="Face" className="positioned-img float1" width={180} />
              <Image src={phone} alt="Phone" className="positioned-img float2" width={100} />
              <Image src={hand} alt="Hand" className="positioned-img float3" width={200} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
