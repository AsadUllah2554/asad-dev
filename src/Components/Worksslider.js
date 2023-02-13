import React, { Component } from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    className:"slider",
  };
    return (
      <div>
        <h2> Works</h2>
        <Slider {...settings} >
          <div>
            <img src="/images/screenshots/iPhoneHub1.png" alt="project-1" className="slider-img" />
            <h3>iPhone Hub</h3>
          </div>
          <div>
          <img src="/images/screenshots/iPhoneHub2.png" alt="project-2" className="slider-img"/>
          <h3>iPhone Hub</h3>
          </div>
          <div>
          <img src="/images/screenshots/iPhoneHub3.png" alt="project-3" className="slider-img"/>
          <h3>iPhone Hub</h3>
          </div>
          <div>
          <img src="/images/screenshots/FoodFun1.png" alt="project-4" className="slider-img"/>
          <h3>Max-fast Food</h3>
          </div>
          <div>
          <img src="/images/screenshots/PicSome.png" alt="project-5" className="slider-img"/>
          <h3>Pic Some</h3>
          </div>
          <div>
          <img src="/images/screenshots/PicSome2.png" alt="project-6" className="slider-img"/>
          <h3>Pic Some</h3>
          </div>
          <div>
          <img src="/images/screenshots/SpeedTypingGame" alt="project-7" className="slider-img"/>
          <h3>Speed Typing Game</h3>
          </div>
        </Slider>
      </div>
    );
  }
