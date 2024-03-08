import { useState } from "react";
import Logo from "../../../assets/TickBoxes.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "" },
    { title: "About Us", path: "/about-us" },
    { title: "Services", path: "/services" },
    { title: "Where We Work", path: "/where-we-work" },
    { title: "Contact", path: "contactUs" },
  ];

  return (
    <>
      <nav className="!sticky top-0 z-10 bg-gray-300/80 backdrop-blur-md w-full md:static md:text-sm ">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between md:block py-1">
            <Link to="/">
              <img src={Logo} width={140} height={80} className="text-white" alt="Float UI logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className=" hover:text-indigo-600 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text  font-extrabold font-madimi text-transparent tracking-[3px] text-[16px]">
                    <Link to={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <a
        href="https://wa.me/7777051052"
        className="whatsapp_float flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Header;
