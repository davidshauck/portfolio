import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import BananaKnifeFight from '../images/banana_knife_fight.png'
import CrystalCountdown from '../images/crystal_countdown.png'
import JavascriptJeopardy from '../images/javascript_jeopardy.png'
import NapkinHangman from '../images/napkin_hangman.png'
import Codehort from '../images/codehort.png'

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <a href="http://www.cnn.com">
          <img
            className="d-block w-100 image"
            src={BananaKnifeFight}
            alt="First slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="http://www.cnn.com">
        <img
          className="d-block w-100 image"
          src={CrystalCountdown}
          alt="Second slide"
        />
       </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="http://www.cnn.com">
        <img
          className="d-block w-100 image"
          src={JavascriptJeopardy}
          alt="Third slide"
        />
      </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="http://www.cnn.com">
        <img
          className="d-block w-100 image-black-border"
          src={NapkinHangman}
          alt="Third slide"
        />
      </a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="http://www.cnn.com">
        <img
          className="d-block w-100 image"
          src={Codehort}
          alt="Third slide"
        />
      </a>
      </Carousel.Item>
    </Carousel>
    </div>

  );
}

export default Portfolio