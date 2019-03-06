import React from "react";
import "./Carousel.css";

import womenTeaPic from "./images/women_tea.png";

import Slider from "react-slick";

const Carousel = () => {

  let settings = {
      centerMode: true,
      dots: true,
      infinite: true,
      centerPadding: "60px",
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
  
  return (<Slider {...settings}>
        <div>
          <img src={womenTeaPic} alt="hhh"/>
        </div>
        <div>
          <img src={womenTeaPic} alt="hhh"/>
        </div>
        <div>
          <img src={womenTeaPic} alt="hhh"/>
        </div>
        <div>
          <img src={womenTeaPic} alt="hhh"/>
        </div>
        <div>
          <img src={womenTeaPic} alt="hhh"/>
        </div>
        <div>
          <img src={womenTeaPic} alt="hhh"/>
        </div>
      </Slider>);
};

export default Carousel;
