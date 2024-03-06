// ------------------------------------------------Imports--------------------------------------------------
import React from "react";
import WhereWeWorkCard from "../../components/Cards/WhereWeWorkCard/WhereWeWorkCard";
import { whereWeWorkImages } from "../../assets/WhereWeWorkImages/whereWeWorkImages";
import buildingImg from "../../assets/buildingImg.jpg";
// ----------------------------------------------------------------------------------------------------------

const WhereWeWork = () => {
  return (
    <>
      <div className="topContent">
        <div
          className="w-[100%] flex flex-col text-center p-20 bg-bottom"
          style={{
            clipPath: "circle(790px at top)",
            backgroundImage: `url(${buildingImg})`,
          }}
        >
          <p className="text-4xl text-white font-bold">
            We are trusted by many
          </p>
          <h1 className="text-xl mt-3 text-white">Where We Work</h1>
        </div>
      </div>
      <div className="mainContent">
        <div className="whereWeWorkCardContainer p-20 flex flex-wrap gap-10 justify-center">
          {Array.isArray(whereWeWorkImages) &&
            whereWeWorkImages.length > 0 &&
            whereWeWorkImages.map((val) => {
              return (
                <WhereWeWorkCard
                  image={val.img}
                  title={val.title}
                  desc={val.desc}
                  members={val.members}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default WhereWeWork;
