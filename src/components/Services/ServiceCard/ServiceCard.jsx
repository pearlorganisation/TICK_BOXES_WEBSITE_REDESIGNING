// --------------------------------------------------Imports----------------------------------------------
import React from "react";
import { Link } from "react-router-dom";
// -------------------------------------------------------------------------------------------------------

const ServiceCard = ({ serviceData }) => {
  let title = serviceData.title;
  return (
    <div className="serviceCard w-[14%] border border-green-300 border-b-0 p-3 sm:p-8 flex flex-col items-center justify-center">
      <p className="title font-bold text-[12px] sm:text-[13px] md:text-[14px] h-[36px] flex items-center">
        {title}
      </p>
      <div className="serviceCardContent">
        <div className="buyNowBtn w-[100%]">
          <button className="w-[100%]  text-center bg-yellow-300 p-1 sm:p-2 text-[12px] sm:text-sm md:text-lg rounded-full mt-3 hover:font-bold border border-black hover:text-red-500 hover:border-red-500 hover:border-[2px] sm:block">
            <Link to="https://wa.me/7777051052">Enquiry</Link>
          </button>
        </div>
      </div>
      <p className="text-center text-gray-600 mt-4 italic font-bold text-[12px] sm:text-[13px] md:text-[14px] hidden sm:block">
        {serviceData.duration}
      </p>
    </div>
  );
};

export default ServiceCard;
