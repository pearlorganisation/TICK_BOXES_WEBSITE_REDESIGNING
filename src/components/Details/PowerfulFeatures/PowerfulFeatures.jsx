// ----------------------------------------------Imports------------------------------------------
import React from "react";
import build3Img from "../../../assets/build3.jpg";
import "./styles.css";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineLibraryBooks, MdQueryStats } from "react-icons/md";
import { LuCalculator } from "react-icons/lu";
import { BsCashCoin } from "react-icons/bs";
import { HiClipboardDocument } from "react-icons/hi2";
import { LuTimer } from "react-icons/lu";
import { FaHeadphones, FaUserGroup } from "react-icons/fa6";
import { SiMlflow } from "react-icons/si";

// -----------------------------------------------------------------------------------------------

const PowerfulFeatures = () => {
  // -------------------------------------------functions---------------------------------------------
  const powerfulFeaturesData = [
    {
      title: "Skilled Society Manager",
      desc: "",
      icon: <GrUserManager size={50} />,
    },
    {
      title: "Statutory Record Management",
      desc: "",
      icon: <MdOutlineLibraryBooks size={50} />,
    },
    {
      title: "Maintain Financial Record",
      desc: "",
      icon: <LuCalculator size={50} />,
    },
    {
      title: "Cost-Effective Service",
      desc: "",
      icon: <BsCashCoin size={50} />,
    },
    {
      title: "Maintain Society Record",
      desc: "",
      icon: <HiClipboardDocument size={50} />,
    },
    {
      title: "Tracking of Pending Dues",
      desc: "",
      icon: <LuTimer size={50} />,
    },
    {
      title: "Tracking of Members' Complaints",
      desc: "",
      icon: <MdQueryStats size={50} />,
    },
    {
      title: "Coordination with External Agency",
      desc: "",
      icon: <SiMlflow size={50} />,
    },
    {
      title: "Reduce Burden on Managing Committee (MC)",
      desc: "",
      icon: <FaUserGroup size={50} />,
    },
    {
      title: "Technology Support",
      desc: "",
      icon: <FaHeadphones size={50} />,
    },
  ];
  // -------------------------------------------------------------------------------------------------
  // -------------------------------------------functions---------------------------------------------
  const PowerfulFeaturesCard = ({ power }) => {
    return (
      <>
        <div class="card">
          <div class="face back">
            <div class="content">
              <span class="stars"></span>
              <b class="desc">{power.title}</b>
            </div>
          </div>
          <div class="face front">{power.icon}</div>
        </div>
      </>
    );
  };
  // -----------------------------------------------------------------------------------------------

  return (
    <>
      <div class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-5 ">
        <img
          src={build3Img}
          alt="Banner Image"
          class="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div class="min-h-[300px] relative z-5 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-5">
          <h2 class="sm:text-4xl md:text-5xl text-2xl font-bold mb-6 italic">
            Powerful Features of Tickboxes
          </h2>
          <div className="flex flex-wrap gap-20">
            {powerfulFeaturesData.map((power) => {
              return <PowerfulFeaturesCard power={power} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerfulFeatures;
