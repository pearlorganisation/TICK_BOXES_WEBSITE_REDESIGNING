import React from 'react'
import SubContentCard from '../SubContentCard/SubContentCard';

const SubContentWrapper = ({ index, subData,first }) => {
  return (
    <div className="subContentWrapper min-w-[1300px] flex">
        <div
          className={`subContentCard w-[30%] pl-10 pr-10 pt-2 pb-2   ${
            index % 2 == 0 ? "bg-gray-200" : "bg-white"
          }`}
        >
          <p className='italic font-bold text-red-600 text-sm'>{subData.d1}</p>
        </div>
        {Array(5)
          .fill(0)
          .map((_, idx) => {
            return <SubContentCard index={index} subData={subData} idx={idx} first={first}/>;
          })}
      </div>
  )
}

export default SubContentWrapper