// ---------------------------------------------------Imports---------------------------------------------
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { testimonialImages } from "../../../assets/TestimonialImages/testimonialImages";
import TestimonialCard from "../../Cards/TestimonialCard/TestimonialCard";

// ----------------------------------------------------------------------------------------------------------

export default function TestimonailCarousel() {
  return (
    <>
      <Swiper
       slidesPerView={1}
       spaceBetween={10}
       breakpoints={{
         640: {
           slidesPerView: 1,
           spaceBetween: 10,
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 20,
         },
         1024: {
           slidesPerView: 2,
           spaceBetween: 30,
         },
         1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
       }}
      >
        {testimonialImages.map((test) => {
          return (
            <SwiperSlide className=" ">
              <TestimonialCard
                name={test.name}
                society={test.society}
                img={test.img}
                designation={test.designation}
                desc={test.desc}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
