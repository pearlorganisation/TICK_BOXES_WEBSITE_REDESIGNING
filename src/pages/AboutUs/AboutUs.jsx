import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AboutUs = () => {
  // ----------------------------------------------States-------------------------------------------------
  const [state, setState] = useState(false);

  const aboutUsDetailsObj = [
    {
      title: "Where We Work",
      url: "/where-we-work",
      field: "where_we_work",
    },
    {
      title: "What We Do?",
      url: "/about-us/details",
      field: "what_we_do",
    },
    {
      title: "How We Do?",
      url: "/about-us/details",
      field: "how_we_do",
    },
    {
      title: "Problem Faced By Societies",
      url: "/about-us/details",
      field: "problem_statement",
    },
    {
      title: "Powerful Features",
      url: "/about-us/details",
      field: "powerful_features",
    },
  ];
  // -----------------------------------------------------------------------------------------------------

  // ----------------------------------------------Hooks-------------------------------------------------
  const navigate = useNavigate();
  // -----------------------------------------------------------------------------------------------------
  // --------------------------------------------Functions-------------------------------------------------
  // -----------------------------------------------------------------------------------------------------
  // ----------------------------------------------useEffect----------------------------------------------

  // -----------------------------------------------------------------------------------------------------

  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[580px] "
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgb(255, 252, 214) 10%, rgba(255, 134, 13, 0.55) 90%)",
        }}
      ></div>
      <div className="relative">
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                Introducing Tick Boxes
              </h1>
              <p>
                In the dynamic landscape of modern business, where eﬃciency and
                adaptability are paramount, housing societies are now embracing
                smarter ways of management. Just as businesses outsource their
                tasks for streamlined operations, ‘ Tick Boxes ' emerges as the
                solution for Housing Societies, alleviating them from tedious
                tasks. Born out of this evolving scenario, ‘ Tick Boxes' is more
                than a concept it's a solution tailored to reduce the burden on
                Housing Societies. Our expertise, honed by managing numerous
                societies, allows us to provide skilled assistance, streamlining
                operations according to your society's unique needs.
              </p>
              <h3 className="text-xl font-bold text-black">Key Features -</h3>
              <div className="keyFeaturesTag mt-1 flex gap-2 flex-wrap">
                <span className=" rounded-2xl p-2 bg-[rgb(255,_134,_13)] text-white font-bold">
                  Flexible Offerings
                </span>
                <span className=" rounded-2xl p-2 bg-[rgb(255,_134,_13)] text-white font-bold">
                  Expert Assistance
                </span>
                <span className=" rounded-2xl p-2 bg-[rgb(255,_134,_13)] text-white font-bold">
                  Customized Services
                </span>
                <span className=" rounded-2xl p-2 bg-[rgb(255,_134,_13)] text-white font-bold">
                  Comprehensive Support
                </span>
              </div>
            </div>
            <div className="grid grid-col-1 items-start gap-1 sm:text-sm mt-8 sm:mt-8 md:mt-0">
              {aboutUsDetailsObj.map((item) => {
                return (
                  <button
                    onClick={() => {
                      navigate(item.url, {
                        state: { detailField: item?.field },
                      });
                    }}
                    className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white m-1 border-gray-400"
                  >
                    <span className="inline-block rounded-full px-3 py-1 bg-[rgb(255,_134,_13)] text-white">
                      Also
                    </span>
                    <p className="flex items-center font-bold">
                      {item.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
