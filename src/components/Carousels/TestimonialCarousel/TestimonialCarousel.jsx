// ------------------------------------------------Imports-----------------------------------------------
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../../Cards/TestimonialCard/TestimonialCard";
import { testimonialImages } from "../../../assets/TestimonialImages/testimonialImages";
import "./TestimonialCarousel.css"
// -------------------------------------------------------------------------------------------------------

function TestimonialCarousel() {
  // ------------------------------------------------States--------------------------------------------------

  // -------------------------------------------------------------------------------------------------------

  // -----------------------------------------------Functions-------------------------------------------------
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "100%",
          background: "black",
        }}
        onClick={onClick}
      />
    );
  }
  // ---------------------------------------------------------------------------------------------------------
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    responsive: [
      {
        // tablet
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "60px",
        },
      },
      {
        // mobile portrait
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "60px",
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container p-4">
      <Slider {...settings}>
        {testimonialImages.map((test) => {
          return (
            <div>
              <TestimonialCard
                name={test.name}
                society={test.society}
                img={test.img}
                designation={test.designation}
                desc={test.desc}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default TestimonialCarousel;
