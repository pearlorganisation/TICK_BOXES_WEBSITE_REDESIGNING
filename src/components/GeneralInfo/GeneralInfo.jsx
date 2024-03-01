// ----------------------------------------------Imports----------------------------------------------
import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { TiUserOutline } from "react-icons/ti";
import { MdOutlineLocationOn } from "react-icons/md";

// ----------------------------------------------------------------------------------------------------

const GeneralInfo = () => {
  // -----------------------------------------------States------------------------------------------------
  const generalInfoObj = [
    {
      title: "25,000+",
      desc: "societies",
      icon: <BiHomeAlt2 className="text-red-500 md:text-6xl text-6xl " />,
    },
    {
      title: "3.5 million+",
      desc: "homes",
      icon: (
        <TiUserOutline className="text-orange-400 md:text-6xl text-6xl " />
      ),
    },
    {
      title: "27 major",
      desc: "cities",
      icon: (
        <MdOutlineLocationOn className="text-green-400 md:text-6xl text-6xl " />
      ),
    },
  ];
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks------------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions----------------------------------------------
  const GeneralInfoCard = ({ title, desc, icon }) => {
    return (
      <div className="generalInfoCard grid md:grid-cols-2 place-items-center">
        <div className="leftInfo md:rounded-full md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] rounded-full shadow-xl bg-white cursor-pointer transition-all hover:hue-rotate-180 hover:rotate-180 duration-1000 ease-out hover:scale-75 flex justify-center items-center">
          {icon}
        </div>
        <div className="rightInfo p-3">
          <h1 className="md:text-2xl sm:text-2xl text-3xl font-bold text-center md:text-start">{title}</h1>
          <h4 className="md:text-xl sm:text-xl text-xl text-center md:text-start">{desc}</h4>
        </div>
      </div>
    );
  };
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------useEffect------------------------------------------------
  // -----------------------------------------------------------------------------------------------------

  return (
    <div className="w-full bg-gradient-to-r from-gray-200 grid sm:grid-cols-3 p-10 ">
      {generalInfoObj.map((info) => {
        return (
          <GeneralInfoCard
            title={info.title}
            desc={info.desc}
            icon={info.icon}
          />
        );
      })}
    </div>
  );
};

export default GeneralInfo;
