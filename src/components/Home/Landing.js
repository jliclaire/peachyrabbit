import React from "react";
import "./Landing.scss";
import { NavLink } from "react-router-dom";
import landingBackgroundImg from "../../img/landing-bg.jpg";

function Landing() {
  const landingImg = {
    backgroundImage: `url(${landingBackgroundImg})`
  };

  console.log(landingImg);

  return (
    <div className="landing-container">
      {/* <!-- landing page --> */}
      <div id="home" style={landingImg}>
        <div id="home-text">
          <h1>Peachy Rabbit Studio</h1>
          <h2>Adelaide Event Photographers</h2>
        </div>
      </div>
    </div>
  );
}

export default Landing;
