'use client';
import Image from 'next/image';
import link from '../public/images/link.png';
import data from '../public/images/DATA.png';
import arch from '../public/images/archive.png';
import icon from '../public/images/your-icon.png'
import checkIcon from '../public/images/check-icon.png'; // your uploaded icon
import '../styles/animated.css';
import '../styles/animatedthird.css';
import starts from '../public/images/Vector.png';


export default function AiAnonymitySection() {
  return (
    <section className="ai-anonymity-section py-5 position-relative" style={{ minHeight: '500px' }}>
      <div className="container">
        <div className="row align-items-center justify-content-between">

          {/* Left Content */}
          <div className="col-lg-7">
            <div className="ai-text">
              <h2 className="ai-heading d-flex align-items-start position-relative">
                <span className="arrow-icon-img me-2 position-relative">
                  <Image src={icon} alt="Icon" width={50} height={50} />
                </span>
                <span className="highlight">Detailed Reports</span>
              </h2>

              <p className="subtitle ms-5">
                Your Privacy, Our Priority – Transparent & Regular Updates.
              </p>

              <ul className="ai-features list-unstyled">
                <li>
                  <span className="check-icon-img">
                    <Image src={checkIcon} alt="Check" width={35} height={35} />
                  </span>
                  In-Depth Analysis: Documented proof of content actions taken for your protection.
                </li>
                <li>
                  <span className="check-icon-img">
                    <Image src={checkIcon} alt="Check" width={35} height={35} />
                  </span>
                  Periodic Insights: Stay updated with continuous progress and activity tracking.
                </li>
                <li>
                  <span className="check-icon-img">
                    <Image src={checkIcon} alt="Check" width={35} height={35} />
                  </span>
                  Structured Summaries: Access concise reports for streamlined record-keeping.
                </li>
                <li>
                  <span className="check-icon-img">
                    <Image src={checkIcon} alt="Check" width={35} height={35} />
                  </span>
                  Impact Analysis: Review the effectiveness of ongoing protective measures.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Animated Visual */}
          <div className="col-lg-5 d-flex justify-content-center mt-4 mt-lg-0">
            <div className="image-stack position-relative" style={{ width: '250px', height: '400px' }}>
              <Image src={arch} alt="Hand" className="positioned-img animation-left" width={120} />
              <Image src={data} alt="Data" className="positioned-img animation-center" width={250} />
              <Image src={link} alt="Link" className="positioned-img animation-right" width={100} />
            </div>
          </div>

        </div>
      </div>

      {/* Star Elements */}
      {/* Stars - Left */}
      <Image src={starts} className="star star-left-2" alt="star" />

      {/* Stars - Right */}
      <Image src={starts} className="star star-right-1" alt="star" />
    </section>
  );
}
