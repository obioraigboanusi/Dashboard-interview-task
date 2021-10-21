import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li className="link">
            <span   onClick={() => setIsOpen(!isOpen)}>Results</span>
            {isOpen && (
              <ul className="sub">
                <li>
                  <Link to="/results/upload-results">Upload Results</Link>
                </li>
                <li>
                  <Link to="/results/view-results">View Results</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
