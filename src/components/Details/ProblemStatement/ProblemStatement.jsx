// --------------------------------------------------Imports---------------------------------------------
import React from "react";
import { FaPencilRuler } from "react-icons/fa";
import { RiRestartLine } from "react-icons/ri";
import { GrUserExpert } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import { PiTargetBold } from "react-icons/pi";
import { PiUserCircleBold } from "react-icons/pi";
import { TiTick } from "react-icons/ti";

// -------------------------------------------------------------------------------------------------------

const ProblemStatement = () => {
  // --------------------------------------------------States---------------------------------------------
  const problemData = [
    {
      title: "Member Reluctance",
      desc: "Members unwilling to take up honorary roles and stand for the election",
      icon: <FaPencilRuler size={30} />,
    },
    {
      title: "Administrative Burden",
      desc: "Tedious and time-consuming administrative tasks",
      icon: <RiRestartLine size={30} />,
    },
    {
      title: "Need for Expertise",
      desc: "Societies require skilled assistance and consultancy",
      icon: <GrUserExpert size={30} />,
    },
    {
      title: "Morale During Constraints",
      desc: "Maintaining morale during resource constraints",
      icon: <FaTools size={30} />,
    },
    {
      title: "Customization Challenges",
      desc: "Lack of ﬂexible solutions for varying society needs",
      icon: <PiTargetBold size={30} />,
    },
    {
      title: "Manpower Management",
      desc: "One needs to look around for the manpower for timely delivery",
      icon: <PiUserCircleBold size={30} />,
    },
    {
      title: "Dispute Management",
      desc: "Low attention to the issues of the society members",
      icon: <TiTick size={30} />,
    },
  ];
  // -------------------------------------------------------------------------------------------------------
  // --------------------------------------------------Hooks---------------------------------------------
  // -------------------------------------------------------------------------------------------------------
  // -------------------------------------------------Functions---------------------------------------------
  const ProblemCard = ({ problem }) => {
    return (
      <div class="flex items-center justify-center">
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
            {problem.icon}
          </div>
          <div class="mt-8">
            <p class="text-xl font-semibold my-2 text-center">
              {problem.title}
            </p>
            <p className="text-sm text-center">{problem.desc}</p>
            <div class="border-t-2"></div>
          </div>
        </div>
      </div>
    );
  };
  // -------------------------------------------------------------------------------------------------------
  // ------------------------------------------------useEffect--------------------------------------------
  // -------------------------------------------------------------------------------------------------------

  return (
    <>
      <div class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-5">
        <img
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          class="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div class="min-h-[300px] relative z-5 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 class="sm:text-4xl md:text-5xl text-2xl font-bold mb-6">
            Problem Faced By Societies
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full p-6 flex-wrap overflow-hidden justify-center bg-gradient-to-r from-slate-400 to-slate-600">
        {problemData.map((problem) => {
          return <ProblemCard problem={problem} />;
        })}
      </div>
    </>
  );
};

export default ProblemStatement;
