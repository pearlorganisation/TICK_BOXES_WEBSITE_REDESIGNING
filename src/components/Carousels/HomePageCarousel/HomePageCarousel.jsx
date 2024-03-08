// -----------------------------------------------------Imports----------------------------------------
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { carouselImages } from "../../../assets/CarouselImages/carouselImages";
// ------------------------------------------------------------------------------------------------------

export default function HomePageCarousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {carouselImages.map((carImg) => {
          return (
            <SwiperSlide className="h-[85vh]">
              <img
                src={carImg}
                className="h-[100%] w-[100%]  object-center "
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
