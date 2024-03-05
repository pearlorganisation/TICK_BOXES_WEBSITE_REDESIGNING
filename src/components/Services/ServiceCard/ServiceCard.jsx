import React from "react";

const ServiceCard = ({ serviceData }) => {
  return (
    <div className="serviceCard w-[20%] border border-gray-300 border-b-0 p-8 overflow-hidden">
      <p className="title font-bold text-2xl ">{serviceData.title}</p>
      <div className="serviceCardContent">
        <p className="desc line-clamp-1 sm:line-clamp-2 md:line-clamp-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. ipsum dolor
          sit
        </p>
        <div className="pricing mt-5">
          <p>Starts at</p>
          <p className="text-3xl text-gray-500 line-through"> &#8377;23000</p>
          <p className="text-4xl text-black "> &#8377;11000</p>
          <p className="text-md text-black "> /month for 12 months*</p>
        </div>
        <div className="buyNowBtn w-[100%]">
          <button className="border w-[100%] border-black text-center bg-yellow-300 p-3 rounded-full mt-3">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
