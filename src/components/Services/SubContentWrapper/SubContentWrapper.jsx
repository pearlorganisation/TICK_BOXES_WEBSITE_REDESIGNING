import React from "react";
import SubContentCard from "../SubContentCard/SubContentCard";

const SubContentWrapper = ({ index, subData, first }) => {
  return (
    <div className="subContentWrapper flex !w-[100%]">
      <div
        className={`subContentCard flex justify-start w-[30%] p-3 sm:pl-10 sm:pr-10 sm:pt-2 sm:pb-2   ${
          index % 2 == 0 ? "bg-gray-200" : "bg-white"
        }`}
      >
        <p className="italic font-bold text-blue-600 text-[12px] sm:text-[13px] md:text-[14px]">
          {subData.d1}
        </p>
      </div>
      {Array(5)
        .fill(0)
        .map((_, idx) => {
          return (
            <SubContentCard
              index={index}
              subData={subData}
              idx={idx}
              first={first}
            />
          );
        })}
    </div>
  );
};

export default SubContentWrapper;
