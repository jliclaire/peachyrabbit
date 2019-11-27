import React from "react";
import "./Landing.scss";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-container">
      {/* <!-- landing page --> */}
      <div id="home">
        <div id="home-text">
          <h1>Peachy Rabbit Studio</h1>
          <h2>Adelaide Event Photographers</h2>
        </div>
      </div>
    </div>
  );
}

export default Landing;
