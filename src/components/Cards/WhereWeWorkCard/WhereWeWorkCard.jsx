// -------------------------------------------------Imports-----------------------------------------------
import React from "react";
import DummyImage from "../../../assets/natImg.jpg";
// --------------------------------------------------------------------------------------------------------

const WhereWeWorkCard = ({ image, title, desc, members }) => {
  return (
    <div>
      <div
        class="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center bg-cover text-gray-800 shadow-md overflow-hidden cursor-pointer"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div class="flex justify-between items-center ml-4 pr-8">
          <div class="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
            {desc}
          </div>
          <div class="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full"></div>
        </div>
        <div class="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
          <h3 class="text-xl font-bold pb-2">{title}</h3>
          <p class="truncate  text-md text-black">({members} Members)</p>
        </div>
      </div>
    </div>
  );
};

export default WhereWeWorkCard;
