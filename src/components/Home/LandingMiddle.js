import React from "react";
import "./LandingMiddle.scss";
import landingBackgroundImg from "../../img/landing-bg.jpg";

function LandingMiddle() {
  const landingImg = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${landingBackgroundImg})`
  };

  return (
    <div className="landing-container">
      {/* <!-- landing page --> */}
      <div id="home" style={landingImg}></div>
    </div>
  );
}

export default LandingMiddle;
