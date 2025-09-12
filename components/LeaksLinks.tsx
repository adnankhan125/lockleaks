import React from 'react';
import { BiSearch } from 'react-icons/bi';
import '../styles/LeaksBoxes.css';  // Assuming it's inside a 'styles' folder

const LeaksBoxes: React.FC = () => {
  return (
    <div className="container py-4">
      <div className="row g-4 box-gap justify-content-center">
        {/* BOX 1 */}
        <div className="col-12 col-md-6">
          <div className="leaks-card">
            <div className="flex-grow-1 me-4">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex">
                  <button className="search-btn me-2">DELETE DUPES</button>
                  <div className="search-box flex-grow-1 me-2">
                    <input type="text" placeholder="Search..." />
                    <BiSearch />
                  </div>
                </div>
                <button className="add-btn">ADD</button>
              </div>
              <div className="domain-item"><span>hub.com</span><button className="apply-btn">DELETE</button></div>
              <div className="domain-item"><span>hub.com</span><button className="apply-btn">DELETE</button></div>
              <div className="domain-item"><span>hub.com</span><button className="apply-btn">DELETE</button></div>
            </div>
            <div className="text-center d-flex flex-column align-items-center">
              <div className="scroll-line"><div className="scroll-thumb"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaksBoxes;
