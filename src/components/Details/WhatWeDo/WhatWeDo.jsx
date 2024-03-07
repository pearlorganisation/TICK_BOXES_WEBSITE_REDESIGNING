// -----------------------------------------------Imports------------------------------------------
import React from "react";
import whatwedo from "../../../assets/whatwedo.jpg";
import { IoDocumentAttach } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { GiCardBurn, GiCardExchange } from "react-icons/gi";
import { PiNotepadFill } from "react-icons/pi";
import { IoDocumentTextSharp, IoDocumentTextOutline } from "react-icons/io5";
import { GoAlertFill } from "react-icons/go";
import { MdManageAccounts } from "react-icons/md";
import { AiFillMoneyCollect } from "react-icons/ai";
import { HiOutlineReceiptTax } from "react-icons/hi";

// -------------------------------------------------------------------------------------------------

const WhatWeDo = () => {
  // -----------------------------------------------States----------------------------------------------
  const whatWeDoData = [
    {
      title: "Maintenance of Statutory",
      desc: "Record",
      icon: <IoDocumentAttach size={40} className="text-slate-600" />,
    },
    {
      title: "Keep Track of",
      desc: "AMC's",
      icon: <FaMapLocationDot size={40} className="text-slate-600" />,
    },
    {
      title: "Maintenance of Society",
      desc: "Property",
      icon: <FaTools size={40} className="text-slate-600" />,
    },
    {
      title: "Prepare Cheques &",
      desc: "Vouchers",
      icon: <GiCardBurn size={40} className="text-slate-600" />,
    },
    {
      title: "Co-ordination with",
      desc: "Auditor",
      icon: <PiNotepadFill size={40} className="text-slate-600" />,
    },
    {
      title: "Identifying",
      desc: "Vendors",
      icon: <GiCardExchange size={40} className="text-slate-600" />,
    },
    {
      title: "Drafting of Society",
      desc: "Minutes",
      icon: <IoDocumentTextSharp size={40} className="text-slate-600" />,
    },
    {
      title: "Member",
      desc: "Complaints",
      icon: <GoAlertFill size={40} className="text-slate-600" />,
    },
    {
      title: "Society",
      desc: "Accounting",
      icon: <MdManageAccounts size={40} className="text-slate-600" />,
    },
    {
      title: "Keep Track of Maintenance",
      desc: "Collection",
      icon: <AiFillMoneyCollect size={40} className="text-slate-600" />,
    },
    {
      title: "Record Keeping & ",
      desc: "Filing",
      icon: <IoDocumentTextOutline size={40} className="text-slate-600" />,
    },
    {
      title: "TDS/GST ",
      desc: "Filing",
      icon: <HiOutlineReceiptTax size={40} className="text-slate-600" />,
    },
  ];

  //------------------------------------------------Functions-----------------------------------------
  const WhatWeDoCard = ({ title, desc, icon }) => {
    return (
      <div className=" p-4  bg-white rounded-xl flex items-center justify-center">
        <span className="w-[50%] flex justify-center">{icon}</span>
        <div className="content w-[50%] flex flex-col items-start italic font-bold">
          <p>{title}</p>
          <p>{desc}</p>
        </div>
      </div>
    );
  };
  //--------------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------

  return (
    <>
      <section
        className={`py-14 flex items-center justify-center bg-center bg-cover bg-no-repeat h-[70vh]`}
        style={{ backgroundImage: `url(${whatwedo})` }}
      >
        <p className="text-white text-7xl font-bold italic">What We Do?</p>
      </section>
      <div className="whatWeDoContentContainer ">
        <div className="whatWeDoContentWrapper grid grid-cols-3 place-content-center gap-4  p-5 bg-gradient-to-r from-slate-500 to-slate-800">
          {whatWeDoData.map((data) => {
            return (
              <WhatWeDoCard
                title={data.title}
                desc={data.desc}
                icon={data.icon}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
