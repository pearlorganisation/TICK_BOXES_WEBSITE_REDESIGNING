// ----------------------------------------------Imports------------------------------------------
import React from "react";
import build2Img from "../../../assets/build2.jpg";
// -----------------------------------------------------------------------------------------------

const HowWeDo = () => {
  // -------------------------------------------functions---------------------------------------------
  const howWeDoData = [
    {
      title: "Dedicated Managers to Ease Honorary Role Burdens",
    },
    {
      title: "We handled Statutory and Clerical Tasks",
    },
    {
      title: "Technology Support",
    },
    {
      title: "Offer Consultancy and skilled Society Manager",
    },
    {
      title: "Ensure Essential Services, maintaining Stakeholder morale",
    },
    {
      title: "Tailored , Flexible solution for unique society needs",
    },
    {
      title: "Trained Ground Level Team",
    },
  ];
  // -------------------------------------------------------------------------------------------------
  // -------------------------------------------functions---------------------------------------------
  const HowWeDoCard = ({howWe}) => {
    return (
      <div class="mx-auto w-full">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <svg
              class="w-8 h-8 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
              ></path>
            </svg>
            <div class="space-y-2 flex items-center">
              <p class="text-slate-800 font-bold">
                {howWe.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // -----------------------------------------------------------------------------------------------

  return (
    <>
      <div class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-5 ">
        <img
          src={build2Img}
          alt="Banner Image"
          class="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div class="min-h-[300px] relative z-5 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 class="sm:text-4xl md:text-5xl text-2xl font-bold mb-6 italic">
            How We Do?
          </h2>
          <p className="font-bold text-3xl">
            We have trained Society Manager as Ground Team who with the help of
            our In House Built Technology would be able to Fullfill the Need of
            Society Management.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-5 gap-4 bg-gradient-to-r from-slate-200 to-slate-400">
        {howWeDoData.map((howWe) => {
          return <HowWeDoCard howWe={howWe}/>;
        })}
      </div>
    </>
  );
};

export default HowWeDo;
