// --------------------------------------------------Imports----------------------------------------------
import React from "react";
import { Link } from "react-router-dom";
// -------------------------------------------------------------------------------------------------------

const ServiceCard = ({ serviceData }) => {
  return (
    <div className="serviceCard w-[14%] border border-green-300 border-b-0 p-8 flex flex-col items-center justify-center">
      <p className="title font-bold text-[15px] sm:text-[15px] md:text-[15px]">
        {serviceData.title}
      </p>
      <div className="serviceCardContent">
        <div className="buyNowBtn w-[100%]">
          <button className="w-[100%]  text-center bg-yellow-300 p-3 rounded-full mt-3 hover:font-bold border border-black hover:text-red-500 hover:border-red-500 hover:border-[2px] ">
            <Link to="https://wa.me/7777051052">Enquiry</Link>
          </button>
        </div>
      </div>
      <p className="text-center mt-4 italic font-bold text-2sm">
        {serviceData.duration}
      </p>
    </div>
  );
};

export default ServiceCard;
