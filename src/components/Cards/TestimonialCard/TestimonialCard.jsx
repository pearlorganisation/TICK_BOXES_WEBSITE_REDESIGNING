import React from "react";

const TestimonialCard = ({ name, img, society, designation, desc }) => {
  return (
    <div>
      <div class="lg:col-span-2 xl:col-auto p-5 h-[20rem] w-[30rem] sm:h-[30rem]">
        <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
          <p class="leading-normal text-sm sm:text-xl">{desc || "hasidh asjhdqi qowhn qowh  oqhw qwohd oqhwd qosja "}</p>
          <div class="flex items-center mt-8 space-x-3">
            <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 border border-gray-300 cursor-pointer hover:scale-[3] transition-all duration-1000 ">
              <img alt="Avatar" src={img} loading="lazy" />
            </div>
            <div>
              <div class="text-lg font-medium">{name}</div>
              <div class="text-gray-600 dark:text-gray-400">
                <p>
                  {society} ({designation})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
