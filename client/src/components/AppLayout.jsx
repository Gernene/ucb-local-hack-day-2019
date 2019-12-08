import React from "react";
import { Link } from "react-router-dom";

export function AppLayout ({children}) {
  return (
    <div className="app">
      <div className="nav-wrapper">
        <div className="nav">
          <div class="nav-logo">CU CS Career</div>
          <nav className="nav-links">
            <ul>
              <li>
                <Link to="/schedule">Manage Schedule</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
}