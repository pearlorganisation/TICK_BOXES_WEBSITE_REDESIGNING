// -----------------------------------------------------Imports----------------------------------------
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BuildingImg from "../../../assets/buildingImg.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
// ------------------------------------------------------------------------------------------------------

export default function HomePageCarousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {Array(5)
          .fill(0)
          .map(() => {
            return (
              <SwiperSlide className="">
                <img src={BuildingImg} className="h-[80vh] object-cover w-full object-center "/>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
