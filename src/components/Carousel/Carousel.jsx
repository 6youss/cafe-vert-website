import React from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import iPhonePic from "./images/iphone_03.png";
import defaultAvatar from "./images/avatar.jpg";
import ava_04 from "./images/ava_04.jpg";
import ava_08 from "./images/ava_08.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: respensiveArray
  };

  return (
    <div className="mCarousel-bg" name="comments">
      <Slider {...settings}>
        {slidesData.map(comments => (
          <Slide comments={comments} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

function Slide({ comments }) {
  return (
    <div>
      <div className="mCarousel-item">
        <img className="mCarousel-item-phone" src={iPhonePic} alt="phone" />
        <div className="mCarousel-item-coms">
          {comments.map(comment => (
            <Comment {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Comment({ profileName, profilePic, comText, comTime }) {
  return (
    <div className="comment-container">
      
      <div className="comment-avatar">
        <img src={profilePic} alt="avatar" />
      </div>

      <div className="comment-text">
        <b>{profileName}</b>
        <p>{comText}</p>
        <i>{comTime}</i>
      </div>

    </div>
  );
}

let slidesData = [
  [
    {
      profileName: "Médina Abdellaoui",
      profilePic: ava_04,
      comText: "Je tenais à témoigner sur l'efficacité du café vert.",
      comTime: "une heure."
    },
    {
      profileName: "Soumia Sam",
      profilePic: ava_08,
      comText: "J'ai 38 ans et j'ai perdu 9 kg en 2 mois. Merci infiniment.",
      comTime: "14 heures."
    },
    {
      profileName: "1.1",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    },
    {
      profileName: "Aghiles",
      profilePic: defaultAvatar,
      comText: "hani is a bitch i hate him.",
      comTime: "since one hour."
    },
    {
      profileName: "1.2",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    }
  ],
  [
    {
      profileName: "2.1",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    },
    {
      profileName: "2.2",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    }
  ],
  [
    {
      profileName: "3.1",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    },
    {
      profileName: "3.2",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    }
  ],
  [
    {
      profileName: "4.1",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    },
    {
      profileName: "4.2",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    }
  ],
  [
    {
      profileName: "5.1",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    },
    {
      profileName: "5.2",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    }
  ],
  [
    {
      profileName: "6.1",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    },
    {
      profileName: "6.2",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    }
  ],
  [
    {
      profileName: "7.1",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    },
    {
      profileName: "7.2",
      profilePic: defaultAvatar,
      comText: "lorem ipsum dolor sit amaert sdsqd.",
      comTime: "since one hour."
    }
  ]
];

const respensiveArray = [
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
];
