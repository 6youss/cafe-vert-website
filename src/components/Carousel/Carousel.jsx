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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1186,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 888,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 642,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
