import React from "react";

const SubContentCard = ({ index, idx, subData }) => {
  return (
    <div
      className={`subContentCard w-[20%] pl-10 pr-10 pt-2 pb-2 border border-t-0 border-l-gray-300 ${
        index % 2 == 0 ? "bg-gray-200" : "bg-white"
      }`}
    >
      <p className="text-[14px]">{subData[`d${idx + 2}`]}</p>
    </div>
  );
};

export default SubContentCard;
