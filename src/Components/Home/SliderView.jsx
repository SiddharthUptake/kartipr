import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import law from "../assets/law.png"
import "./home.css"

function SliderView() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
   <div className="carousel-container pb-5">
        <Slider {...settings}>
          <div className='slider-img'>
            <img src={law} alt="law" />
          </div>
          <div className='slider-img'>
            <img src={law} alt="law" />
          </div>
          <div className='slider-img'>
            <img src={law} alt="law" />
          </div>
          <div className='slider-img'>
            <img src={law} alt="law" />
          </div>
        </Slider>
        </div>

  )
}

export default SliderView