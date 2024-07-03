import React from "react";
import testimonials from "./TestimonialsData";
import "./Testimonials.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// slick slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  let settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="testimonials bg__blue">
      <div className="container">
        <div className="testimonials-content">
          <Slider {...settings}>
            {
              testimonials.map((testimonial, index) => {
                return (
                  <div className="testimonials-item" key={index}>
                    <p className="text para__text">
                      <span><FaQuoteLeft /></span>
                      &nbsp;
                      {testimonial.text} <span>&nbsp; <FaQuoteRight /></span>
                    </p>
                    <p className="name">{testimonial.name}</p>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;