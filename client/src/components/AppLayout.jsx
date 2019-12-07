import React from "react";
import { Link } from "react-router-dom";

export function AppLayout ({children}) {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/book">Book a Meeting</Link>
          </li>
        </ul>
      </nav>
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
}