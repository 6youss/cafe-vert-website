import React from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import iPhonePic from "./images/iphone_03.png";

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0
  };

  return (
    <div className="mCarousel-bg">
      <Slider {...settings}>
        <div className="mCarousel-item">
          <img src={iPhonePic} alt="phone" />
        </div>
        <div className="mCarousel-item">
          <img src={iPhonePic} alt="phone" />
        </div>
        <div className="mCarousel-item">
          <img src={iPhonePic} alt="phone" />
        </div>
        <div className="mCarousel-item">
          <img src={iPhonePic} alt="phone" />
        </div>
        <div className="mCarousel-item">
          <img src={iPhonePic} alt="phone" />
        </div>
        <div className="mCarousel-item">
          <img src={iPhonePic} alt="phone" />
        </div>
        <div className="mCarousel-item">
          <img src={iPhonePic} alt="phone" />
        </div>
        
      </Slider>
    </div>
  );
};

export default Carousel;
