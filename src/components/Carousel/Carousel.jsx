import React from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import iPhonePic from "./images/iphone_03.png";
import coms2 from "./images/coms2.png";
import coms from "./images/coms.png";

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
          slidesToScroll: 3
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
        <div>
          <div className="mCarousel-item">
            <img className="mCarousel-item-phone" src={iPhonePic} alt="phone" />
            <div className="mCarousel-item-coms">
              <img src={coms2} alt="phone" />
            </div>
          </div>
        </div>
        <div>
          <div className="mCarousel-item">
            <img className="mCarousel-item-phone" src={iPhonePic} alt="phone" />
            <div className="mCarousel-item-coms">
              <img src={coms2} alt="phone" />
            </div>
          </div>
        </div>
        <div>
          <div className="mCarousel-item">
            <img className="mCarousel-item-phone" src={iPhonePic} alt="phone" />
            <div className="mCarousel-item-coms">
              <img src={coms2} alt="phone" />
            </div>
          </div>
        </div>
        <div>
          <div className="mCarousel-item">
            <img className="mCarousel-item-phone" src={iPhonePic} alt="phone" />
            <div className="mCarousel-item-coms">
              <img src={coms2} alt="phone" />
            </div>
          </div>
        </div>
        <div>
          <div className="mCarousel-item">
            <img className="mCarousel-item-phone" src={iPhonePic} alt="phone" />
            <div className="mCarousel-item-coms">
              <img src={coms2} alt="phone" />
            </div>
          </div>
        </div>
        <div>
          <div className="mCarousel-item">
            <img className="mCarousel-item-phone" src={iPhonePic} alt="phone" />
            <div className="mCarousel-item-coms">
              <img src={coms2} alt="phone" />
            </div>
          </div>
        </div>
        <div>
          <div className="mCarousel-item">
            <img className="mCarousel-item-phone" src={iPhonePic} alt="phone" />
            <div className="mCarousel-item-coms">
              <img src={coms2} alt="phone" />
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default Carousel;
