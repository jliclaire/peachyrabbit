import React from "react";
import About from "./About";
import Contact from "./Contact";
import Price from "./Price";
import Landing from "./Landing";
import HomeGallery from "./HomeGallery";
import "./Home.scss";

function Home() {
  return (
    <div className="home-container">
      <Landing />
      <div className="main-container">
        <HomeGallery />
        <About />
        <Price />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
