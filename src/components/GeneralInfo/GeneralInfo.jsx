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
      icon: <BiHomeAlt2 size={70} className="text-red-500" />,
    },
    {
      title: "3.5 million+",
      desc: "homes",
      icon: <TiUserOutline size={70} className="text-orange-400" />,
    },
    {
      title: "27 major",
      desc: "cities",
      icon: <MdOutlineLocationOn size={70} className="text-green-400" />,
    },
  ];
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks------------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions----------------------------------------------
  const GeneralInfoCard = ({ title, desc, icon }) => {
    return (
      <div className="generalInfoCard flex p-10">
        <div className="leftInfo rounded-full shadow-xl p-2 bg-white cursor-pointer transition-all hover:hue-rotate-180 hover:rotate-180 duration-1000 ease-out hover:scale-75">
          {icon}
        </div>
        <div className="rightInfo p-3">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h4>{desc}</h4>
        </div>
      </div>
    );
  };
  // -----------------------------------------------------------------------------------------------------
  // -----------------------------------------------useEffect------------------------------------------------
  // -----------------------------------------------------------------------------------------------------

  return (
    <div className="w-full bg-gradient-to-r from-gray-200 flex justify-center gap-60 p-10">
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
