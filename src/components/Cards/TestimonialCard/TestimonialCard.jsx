import React from "react";
import styles from "./style.module.css"

const TestimonialCard = ({ name, img, society, designation, desc }) => {
  return (
    <div
      class={`${styles.cardContainer} m-10 max-w-sm mx-auto block rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 p-[2px]`}
    >
      <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg backdrop-blur-sm ">
        <div class="relative mx-auto  h-[8rem] bg-pink-400 overflow-hidden w-[8rem] rounded-full">
          <img
            class=" h-full w-full object-cover object-right"
            src={img}
            alt=""
          />
        </div>
        <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">
          {name}
        </h1>
        <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">
          {designation}
        </h3>
        <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600 line-clamp-5">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
