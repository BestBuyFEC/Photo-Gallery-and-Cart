import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PicCarousel({ images }) {
  return (
    <div className="pricingCarouselContainer">
      <Carousel className="pic" showIndicators={false} showStatus={false}>
        {images.map((images) => (
          <div>
            <img key={images.id} alt="" src={images.image_url}></img>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default PicCarousel;
