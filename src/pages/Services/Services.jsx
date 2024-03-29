// ---------------------------------------------------Imports-------------------------------------------
import React, { useEffect } from "react";
import ServiceCard from "../../components/Services/ServiceCard/ServiceCard";
import SubContentWrapper from "../../components/Services/SubContentWrapper/SubContentWrapper";
// ------------------------------------------------------------------------------------------------------

const Services = () => {
  // ---------------------------------------------------states--------------------------------------------
  const subContentData = [
    {
      d1: "Society Manager",
      d2: "Part-Time Monthly Once",
      d3: "Part-Time Monthly Once",
      d4: "Part-Time Weekly Once",
      d5: "Part-Time Weekly Once",
      d6: "Full Time Society Manager",
    },
    {
      d1: "Maintenance of Statutory Record",
      d2: "Yes",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Banking Transactions",
      d2: "Yes",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Preparation of vouchers and cheques",
      d2: "Yes",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Record Keeping and Filing",
      d2: "Yes",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Coordination with Auditor",
      d2: "Yes",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Keeping Track of Annual Renewal",
      d2: "Yes",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Keeping Track of Fixed Deposits",
      d2: "Yes",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Keeping Track of Leave and license",
      d2: "Yes",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Drafting minutes of MC/AGM/SGM Meetings",
      d2: "Yes",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Drafting of Notice, Circulars, NOC",
      d2: "Yes",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Member Document Management",
      d2: "Yes",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Coordination with Society Lawyer",
      d2: "No",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Maintenance of Society Property",
      d2: "No",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Liason with BMC & Registrar",
      d2: "No",
      d3: "Yes",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Resolve Complaints of Members",
      d2: "No",
      d3: "No",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Prepare Database of Local Vendor",
      d2: "No",
      d3: "No",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Conduct Election of the Society",
      d2: "No",
      d3: "No",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Attend AGM / SGM Meetings",
      d2: "No",
      d3: "No",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
    {
      d1: "Attend Managing Committee Meetings",
      d2: "No",
      d3: "No",
      d4: "No",
      d5: "No",
      d6: "Yes",
    },
    {
      d1: "Get 3 Quotes for Any Work",
      d2: "No",
      d3: "No",
      d4: "No",
      d5: "No",
      d6: "Yes",
    },
    {
      d1: "Flat Document Verification",
      d2: "No",
      d3: "No",
      d4: "No",
      d5: "No",
      d6: "Yes",
    },
    {
      d1: "Budgeting",
      d2: "No",
      d3: "No",
      d4: "No",
      d5: "No",
      d6: "Yes",
    },
    {
      d1: "On call member support",
      d2: "No",
      d3: "No",
      d4: "No",
      d5: "No",
      d6: "Yes",
    },
  ];

  const subContentData2 = [
    {
      d1: "1 Level Escalation",
      d2: "No",
      d3: "No",
      d4: "Yes",
      d5: "Yes",
      d6: "Yes",
    },
  ];
  const subContentData3 = [
    {
      d1: "Supervisor monthly visit",
      d2: "1",
      d3: "1",
      d4: "1",
      d5: "1",
      d6: "2",
    },
  ];

  const subContentData4 = [
    {
      d1: "Maintenance Bill Generation",
      d2: "Society",
      d3: "Society",
      d4: "Society",
      d5: "TickBoxes",
      d6: "TickBoxes",
    },
    {
      d1: "Physical Maintenance Bill To Members",
      d2: "Society",
      d3: "Society",
      d4: "Society",
      d5: "TickBoxes",
      d6: "TickBoxes",
    },
    {
      d1: "Finalisation of Accounts",
      d2: "Society",
      d3: "Society",
      d4: "Society",
      d5: "TickBoxes",
      d6: "TickBoxes",
    },
  ];

  const subContentData5 = [
    {
      d1: "Auditing",
      d2: "TickBoxes",
      d3: "TickBoxes",
      d4: "TickBoxes",
      d5: "TickBoxes",
      d6: "TickBoxes",
    },
    {
      d1: "Audit Report",
      d2: "TickBoxes",
      d3: "TickBoxes",
      d4: "TickBoxes",
      d5: "TickBoxes",
      d6: "TickBoxes",
    },
    {
      d1: "Income Tax Filing",
      d2: "TickBoxes",
      d3: "TickBoxes",
      d4: "TickBoxes",
      d5: "TickBoxes",
      d6: "TickBoxes",
    },
    {
      d1: "TDS Return Filing",
      d2: "TickBoxes",
      d3: "TickBoxes",
      d4: "TickBoxes",
      d5: "TickBoxes",
      d6: "TickBoxes",
    },
    {
      d1: "GST Return Filing",
      d2: "TickBoxes",
      d3: "TickBoxes",
      d4: "TickBoxes",
      d5: "TickBoxes",
      d6: "TickBoxes",
    },
  ];

  const serviceCardData = [
    {
      title: "Virtual Manager",
      duration: "Part-Time Monthly Once",
    },
    {
      title: "Silver",
      duration: "Part-Time Monthly Once",
    },
    {
      title: "Gold",
      duration: "Part-Time Weekly Once",
    },
    {
      title: "Platinum",
      duration: "Part-Time Weekly Once",
    },
    {
      title: "Diamond",
      duration: "Full Time Society Manager",
    },
  ];
  // ------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------useEffect-----------------------------------------
  // useEffect(() => {}, [window.pageYOffset]);
  // ------------------------------------------------------------------------------------------------------

  return (
    <div className="servicesContainer w-full p-10">
      <div className="servicesMain w-[100%]">
        <div className="w-[100%] sticky top-20">
          <div className="servicesCardWrapper w-[100%]  flex bg-gradient-to-r from-violet-200 to-pink-200">
            <div className="serviceCard w-[30%] p-1 sm:p-10 flex flex-col justify-center ">
              <p className="title font-bold text-[16px] sm:text-xl md:text-2xl text-center">
                Plans For You
              </p>
              <div className="buyNowBtn w-[100%]">
                <button className="border text-[12px] sm:text-[16px] md:text-[20px] w-[100%] border-black text-center bg-black text-white font-bold p-3 rounded-full mt-3 hidden sm:block">
                  Our Plans
                </button>
              </div>
            </div>
            {serviceCardData.map((_, index) => {
              return <ServiceCard index={index} serviceData={_} />;
            })}
          </div>
        </div>

        <p className="mt-3 mb-3 font-bold text-xl">Society Management</p>
        {subContentData.map((_, index) => {
          return <SubContentWrapper index={index} subData={_} first={true} />;
        })}
        <p className="mt-3 mb-3 font-bold text-xl">Escalation Matrix</p>
        {subContentData2.map((_, index) => {
          return <SubContentWrapper index={index} subData={_} first={false} />;
        })}
        <p className="mt-3 mb-3 font-bold text-xl">Supervision</p>
        {subContentData3.map((_, index) => {
          return <SubContentWrapper index={index} subData={_} first={false} />;
        })}
        <p className="mt-3 mb-3 font-bold text-xl">Financial Management</p>
        {subContentData4.map((_, index) => {
          return <SubContentWrapper index={index} subData={_} first={false} />;
        })}
        <p className="mt-3 mb-3 font-bold text-xl">Statutory Requirements</p>
        {subContentData5.map((_, index) => {
          return <SubContentWrapper index={index} subData={_} first={false} />;
        })}
      </div>
    </div>
  );
};

export default Services;
