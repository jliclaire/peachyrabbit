import React from "react";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-container">
      {/* <!-- fixed navbar --> */}
      <nav class="navbar">
        <div class="logo">
          <NavLink to="/">
            <img src="../../../public/peachyrabbit-logo.JPG" alt="logo" />
          </NavLink>
        </div>
        {/* <div class="menu dropdown">
          <i class="fas fa-bars dropbtn"></i>
          <div class="dropdown-content">
            <a href="#home" class="menu-item">Home</a>
            <a href="#about" class="menu-item">About</a>
            <a href="#skills" class="menu-item">Skills</a>
            <a href="#work" class="menu-item">Work</a>
            <a href="#contact" class="menu-item">Contact</a>
          </div>
        </div> */}
      </nav>
      {/* <!-- home page --> */}
      <div id="home">
        <div id="home-header">
          <h1>HE</h1>
          <h1>LLO.</h1>
        </div>
        <div id="home-text">
          <p>I'm Jing</p>
          <p>
            a <span class="span-font">web developer</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
