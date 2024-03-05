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
      d2: "Part-time Monthly Once",
      d3: "Part-time Monthly Once",
      d4: "Part-time Weekly Once",
      d5: "Part-time Weekly Once",
      d6: "Full time Society Manager",
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
      d1: "Banking Transactions to be done by manager",
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
      d1: "Manage, Monitor & Resolve Complaints of Member",
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
      d1: "Verification of Flat Transfer Document from Legal Team",
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

  const serviceCardData = [
    {
    title:"Virtual Manager"
  },
    {
    title:"Silver"
  },
    {
    title:"Gold"
  },
    {
    title:"Platinum"
  },
    {
    title:"Diamond"
  },
]
  // ------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------useEffect-----------------------------------------
  // useEffect(() => {}, [window.pageYOffset]);
  // ------------------------------------------------------------------------------------------------------

  return (
    <div className="servicesContainer w-[100%] p-10">
      <div className="servicesMain p-5 2-[100%]">
        <div className="servicesCardWrapper min-w-[1100px] flex sticky top-0 bg-white">
          <div className="serviceCard w-[20%] p-10 flex flex-col justify-center ">
            <p className="title font-bold text-2xl">
              Not sure which plan is for you?
            </p>
            <p className="desc mt-4 line-clamp-1 sm:line-clamp-2 md:line-clamp-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="buyNowBtn w-[100%]">
              <button className="border w-[100%] border-black text-center bg-black text-white font-bold p-3 rounded-full mt-3">
                Find my plan
              </button>
            </div>
          </div>
          {serviceCardData
            .map((_, index) => {
              return <ServiceCard index={index} serviceData={_} />;
            })}
        </div>
        <p className="mt-3 mb-3 font-bold text-xl">Society Management</p>
        {subContentData.map((_, index) => {
          return <SubContentWrapper index={index} subData={_} />;
        })}
      </div>
    </div>
  );
};

export default Services;
