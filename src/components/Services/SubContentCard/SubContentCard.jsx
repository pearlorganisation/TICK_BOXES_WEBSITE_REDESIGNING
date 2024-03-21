import React from "react";

const SubContentCard = ({ index, idx, subData, first }) => {
  return (
    <div
      className={`subContentCard flex justify-center w-[14%] ${
        index == 0 && first && "text-blue-600 font-bold italic"
      } p-3 sm:pl-10 sm:pr-10 sm:pt-2 sm:pb-2 border border-t-0 border-l-gray-300  ${
        index % 2 == 0 ? "bg-gray-200" : "bg-white"
      }`}
    >
      <p className="text-[12px] sm:text-[13px] md:text-[14px]">
        {subData[`d${idx + 2}`]}
      </p>
    </div>
  );
};

export default SubContentCard;
