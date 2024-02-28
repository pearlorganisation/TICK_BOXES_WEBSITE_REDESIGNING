import React from "react";

const Services = () => {
  const ServiceCard = () => {
    return (
      <div className="serviceCard w-[20%] h-[620px] border border-gray-300 border-b-0 p-8 overflow-hidden">
        <p className="title font-bold text-2xl">Premium</p>
        <p className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          consectetur possimus cumque repudiandae quam nam eaque fugiat, odio
          earum ut?
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
        <p className="t&c text-[13px] mt-3">
          *SeeOffer Terms Overages apply if contact or email send limit is
          exceeded. Learn more
        </p>
        <div className="subContent w-[100%]"></div>
      </div>
    );
  };

  const SubContentCard = ({ index }) => {
    return (
      <div
        className={`subContentCard w-[20%] pl-10 pr-10 pt-2 pb-2 border border-t-0 border-l-gray-300 ${
          index % 2 == 0 ? "bg-gray-200" : "bg-white"
        }`}
      >
        <p className="text-[14px]">No additional cost add on</p>
      </div>
    );
  };

  const SubContentWrapper = ({ index }) => {
    return (
      <div className="subContentWrapper w-[100%] flex">
        <div
          className={`subContentCard w-[20%] pl-10 pr-10 pt-2 pb-2 underline  ${
            index % 2 == 0 ? "bg-gray-200" : "bg-white"
          }`}
        >
          <p>Generative AI Features</p>
        </div>
        {Array(4)
          .fill(0)
          .map(() => {
            return <SubContentCard index={index} />;
          })}
      </div>
    );
  };

  return (
    <div className="servicesContainer w-[100%] p-10">
      <div className="servicesMain p-10 2-[100%]">
        <div className="servicesCardWrapper w-[100%] flex">
          <div className="serviceCard w-[20%] h-[620px] p-10 flex flex-col justify-center">
            <p className="title font-bold text-2xl">
              Not sure which plan is for you?
            </p>
            <p className="desc mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus
            </p>
            <div className="buyNowBtn w-[100%]">
              <button className="border w-[100%] border-black text-center bg-black text-white font-bold p-3 rounded-full mt-3">
                Find my plan
              </button>
            </div>
          </div>
          {Array(4)
            .fill(0)
            .map(() => {
              return <ServiceCard />;
            })}
        </div>
        {Array(5)
          .fill(0)
          .map((_, index) => {
            return <SubContentWrapper index={index} />;
          })}
      </div>
    </div>
  );
};

export default Services;
