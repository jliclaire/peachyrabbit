import React from "react";
import About from "./About";
import Contact from "./Contact";
import Price from "./Price";
import Landing from "./Landing";
import Gallery from "./Gallery";
import Footer from "./Footer";
import LandingMiddle from "./LandingMiddle";
import "./Home.scss";

function Home() {
  return (
    <div className="home-container">
      <Landing />
      <div className="main-container">
        <Gallery />
      </div>
      <LandingMiddle />
      <div className="main-container">
        <About />
        <Price />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
