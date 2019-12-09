import React from "react";
import galleryImg1 from "../../img/gallery-image-1.jpg";
import galleryImg2 from "../../img/gallery-image-2.jpg";
import galleryImg3 from "../../img/gallery-image-3.jpg";
import galleryImg4 from "../../img/gallery-image-4.jpg";
import galleryImg5 from "../../img/gallery-image-5.jpg";
import galleryImg6 from "../../img/gallery-image-6.jpg";
import "./Gallery.scss";

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Our Work</h1>
      <p>Find out more in our Gallery</p>
      <div className="gallery-grid">
        <img src={galleryImg1} />
        <img src={galleryImg2} />
        <img src={galleryImg3} />
        <img src={galleryImg4} />
        <img src={galleryImg5} />
        <img src={galleryImg6} />
        <img src={galleryImg1} />
        <img src={galleryImg2} />
        <img src={galleryImg3} />
      </div>
    </div>
  );
}

export default Gallery;
