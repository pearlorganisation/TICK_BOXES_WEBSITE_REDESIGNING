// ------------------------------------------------Imports--------------------------------------------------
import React, { useState } from "react";
import WhereWeWorkCard from "../../components/Cards/WhereWeWorkCard/WhereWeWorkCard";
import { whereWeWorkImages } from "../../assets/WhereWeWorkImages/whereWeWorkImages";
import buildingImg from "../../assets/buildingImg.jpg";
import styles from "./styles.module.css";
import WhereWeWorkModal from "../../components/Modals/WhereWeWorkModal/WhereWeWorkModal";
import { createPortal } from "react-dom";
// ----------------------------------------------------------------------------------------------------------

const WhereWeWork = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

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
        <div className={`w-full p-20 ${styles.bgImage}`}>
          <div className="whereWeWorkCardContainer p-6 rounded-xl shadow-xl flex flex-wrap gap-10 justify-center bg-violet-200">
            {Array.isArray(whereWeWorkImages) &&
              whereWeWorkImages.length > 0 &&
              whereWeWorkImages.map((val) => {
                return (
                  <WhereWeWorkCard
                    image={val.img}
                    title={val.title}
                    desc={val.desc}
                    members={val.members}
                    setOpenModal={setOpenModal}
                    setCurrentImage={setCurrentImage}
                  />
                );
              })}
          </div>
        </div>
      </div>
      {openModal &&
        createPortal(
          <WhereWeWorkModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            currentImage={currentImage}
          />,
          document.body
        )}
    </>
  );
};

export default WhereWeWork;
