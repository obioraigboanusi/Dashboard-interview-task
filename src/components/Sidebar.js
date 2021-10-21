import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li >
            <Link to="/">Dashboard</Link>
          </li>
          <li className="link">
            <span>Results</span>
            {true && (
              <ul>
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
