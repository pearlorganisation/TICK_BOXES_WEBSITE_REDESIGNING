// -------------------------------------------------Imports-----------------------------------------------
import React, { useEffect, useRef, useState } from "react";

// --------------------------------------------------------------------------------------------------------

const WhereWeWorkCard = ({
  image,
  title,
  desc,
  members,
  setOpenModal,
  setCurrentImage,
}) => {
  // -------------------------------------------------States-----------------------------------------------

  // --------------------------------------------------------------------------------------------------------
  // -------------------------------------------------Hooks-----------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  // ----------------------------------------------Functions-----------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  return (
    <div
      className="flex flex-col justify-between w-72 sm:w-72 h-72 bg-white bg-center bg-cover text-gray-800 shadow-md overflow-hidden cursor-pointer"
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => {
        setOpenModal(true);
        setCurrentImage(image);
      }}
    >
      <div className="flex justify-between items-center ml-4 pr-8">
        <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
          {desc}
        </div>
        <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full"></div>
      </div>
      <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-1 flex flex-col mr-4 mb-8">
        <h3 className="text-lg font-bold pb-2">{title}</h3>
        <p className="truncate  text-md text-black">({members} Members)</p>
      </div>
    </div>
  );
};

export default WhereWeWorkCard;
