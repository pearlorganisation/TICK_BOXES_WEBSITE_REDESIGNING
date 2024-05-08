// ---------------------------------------------Imports------------------------------------------------
import React, { useEffect } from "react";
// ----------------------------------------------------------------------------------------------------

const WhereWeWorkModal = ({ openModal, setOpenModal, currentImage }) => {
  // ---------------------------------------------States------------------------------------------------
  // ----------------------------------------------------------------------------------------------------
  // ---------------------------------------------Hooks------------------------------------------------
  // ----------------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------------
  return (
    <>
      <div
        className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm"
        aria-labelledby="header-2a content-2a"
        aria-modal="true"
        tabindex="-1"
        role="dialog"
      >
        {/* <!-- Modal --> */}
        <div
          className="flex h-[90vh] w-11/12 max-w-md flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
          style={{ backgroundImage: `url(${currentImage})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
        >
          {/* <!-- Modal header --> */}
          <header id="header-2a" className="flex items-center justify-end gap-4">
            <button
              className="inline-flex items-center bg-white justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded-full focus-visible:outline-none justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent border"
              id="modal"
              role="document"
              aria-label="close dialog"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <span className="relative only:-mx-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                  role="graphics-symbol"
                  aria-labelledby="title-79 desc-79"
                >
                  <title id="title-79">Icon title</title>
                  <desc id="desc-79">
                    A more detailed description of the icon
                  </desc>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </header>
          {/* <!-- Modal body --> */}
        </div>
      </div>
    </>
  );
};

export default WhereWeWorkModal;
