import React from "react";
import "./Price.scss";

function Price() {
  return (
    <div className="price-container">
      <h1>Our Price</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam Lorem ipsum dolor sit amet
      </p>

      {/* price category card group */}
      <div className="price-card-group">
        <div className="price-card">
          <h3>$200</h3>
          <h5>2 HOURS</h5>
          <span>______</span>
          <br />
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="price-card">
          <h3>$300</h3>
          <h5>3 HOURS</h5>
          <span>______</span>
          <br />
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="price-card">
          <h3>$400</h3>
          <h5>4 HOURS</h5>
          <span>______</span>
          <br />
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
}

export default Price;
