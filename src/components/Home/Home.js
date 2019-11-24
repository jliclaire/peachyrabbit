import React from "react";
import About from "./About";
import Contact from "./Contact";
import Price from "./Price";
import Landing from "./Landing";

function Home() {
  return (
    <div className="home-container">
      <Landing />
      <About />
      <Price />
      <Contact />
    </div>
  );
}

export default Home;
