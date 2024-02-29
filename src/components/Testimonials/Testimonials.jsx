import React from "react";
import TestimonialCard from "../Cards/TestimonialCard/TestimonialCard";
import TestimonialCarousel from "../Carousels/TestimonialCarousel/TestimonialCarousel";


const Testimonials = () => {
  return (
    <div className="min-h-dvh grid place-items-center">
      <div class="pb-5">
        <div class="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
          <div class="text-sm font-bold tracking-wider text-indigo-600 uppercase">
            Testimonials
          </div>
          <h2 class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Here&#x27;s what our customers said
          </h2>
          <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            Testimonails is a great way to increase the brand trust and
            awareness. Use this section to highlight your popular customers.
          </p>
        </div>
        <div class="container p-6 mx-auto mb-10 xl:px-0">
          <div class="w-full">
            <TestimonialCarousel />
            {/* <TestimonialCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
