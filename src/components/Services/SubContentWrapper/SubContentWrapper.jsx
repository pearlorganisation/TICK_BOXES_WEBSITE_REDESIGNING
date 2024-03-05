import React from 'react'
import SubContentCard from '../SubContentCard/SubContentCard';

const SubContentWrapper = ({ index, subData }) => {
  return (
    <div className="subContentWrapper min-w-[1100px] flex">
        <div
          className={`subContentCard w-[20%] pl-10 pr-10 pt-2 pb-2 underline  ${
            index % 2 == 0 ? "bg-gray-200" : "bg-white"
          }`}
        >
          <p>{subData.d1}</p>
        </div>
        {Array(5)
          .fill(0)
          .map((_, idx) => {
            return <SubContentCard index={index} subData={subData} idx={idx} />;
          })}
      </div>
  )
}

export default SubContentWrapper
