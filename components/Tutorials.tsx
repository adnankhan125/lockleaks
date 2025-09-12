import React from "react";
import '../styles/Tutorials.css'; // Import the CSS file for styling
import BestEmailImage from "../public/images/best-emai.png"; // Next.js me public folder se import

const Tutorials: React.FC = () => {
  return (
    <section className="custom-card-section">
      <div className="container">
        <div className="custom-card-row">
          {/* Card 1 */}
          <div className="custom-card">
            <div className="custom-card-header">Tutorials</div>
            <img src={BestEmailImage.src} alt="Card 1 Image" className="custom-card-img" />
            <div className="custom-card-time">
              <span>Time: 10:00 AM</span>
              <span>Date: 15/09/2025</span>
            </div>          </div>

          {/* Card 2 */}
          <div className="custom-card">
            <div className="custom-card-header">Tutorials</div>
            <img src={BestEmailImage.src} alt="Card 2 Image" className="custom-card-img" />
            <div className="custom-card-time">
              <span>Time: 10:00 AM</span>
              <span>Date: 15/09/2025</span>
            </div>          </div>

          {/* Card 3 */}
          <div className="custom-card">
            <div className="custom-card-header">Tutorials</div>
            <img src={BestEmailImage.src} alt="Card 3 Image" className="custom-card-img" />
            <div className="custom-card-time">
              <span>Time: 10:00 AM</span>
              <span>Date: 15/09/2025</span>
            </div>          </div>

          {/* Card 4 */}
          <div className="custom-card">
            <div className="custom-card-header">Tutorials</div>
            <img src={BestEmailImage.src} alt="Card 4 Image" className="custom-card-img" />
            <div className="custom-card-time">
              <span>Time: 10:00 AM</span>
              <span>Date: 15/09/2025</span>
            </div>          </div>

          {/* Card 5 */}
          <div className="custom-card">
            <div className="custom-card-header">Tutorials</div>
            <img src={BestEmailImage.src} alt="Card 5 Image" className="custom-card-img" />
            <div className="custom-card-time">
              <span>Time: 10:00 AM</span>
              <span>Date: 15/09/2025</span>
            </div>          </div>

          {/* Card 6 */}
          <div className="custom-card">
            <div className="custom-card-header">Tutorials</div>
            <img src={BestEmailImage.src} alt="Card 6 Image" className="custom-card-img" />
            <div className="custom-card-time">
              <span>Time: 10:00 AM</span>
              <span>Date: 15/09/2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
