// ---------------------------------------------------Imports--------------------------------------------
import React, { useEffect, useRef } from "react";
import WhatWeDo from "../../components/Details/WhatWeDo/WhatWeDo";
import ProblemStatement from "../../components/Details/ProblemStatement/ProblemStatement";
import HowWeDo from "../../components/Details/HowWeDo/HowWeDo";
import PowerfulFeatures from "../../components/Details/PowerfulFeatures/PowerfulFeatures";
import { useLocation } from "react-router-dom";
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------

const Details = (props) => {
  // ----------------------------------------------States-----------------------------------------------------
  // -------------------------------------------------------------------------------------------------------
  // ----------------------------------------------Hooks-----------------------------------------------------

  const location = useLocation();
  const detailField = location?.state?.detailField;

  const whatWeDoRef = useRef();
  const problemStatementRef = useRef();
  const howWeDoRef = useRef();
  const powerfulFeaturesRef = useRef();

  let detailObj = {
    what_we_do: () => {
      whatWeDoRef?.current?.click();
    },
    problem_statement: () => {
      problemStatementRef?.current?.click();
    },
    how_we_do: () => {
      howWeDoRef?.current?.click();
    },
    powerful_features: () => {
      powerfulFeaturesRef?.current?.click();
    },
  };

  useEffect(() => {
    if (detailField) {
      console.log("this is location", detailField);
      // alert("detailfield",detailField);
      const func = detailObj[detailField];
      console.log("this is func", func);
      func();
      // alert(func);
    }
  }, [detailField]);

  // -------------------------------------------useEffect-----------------------------------------------------
  // -------------------------------------------------------------------------------------------------------
  return (
    <>
      <a href={"#what_we_do"} ref={whatWeDoRef} />
      <a href={"#problem_statement"} ref={problemStatementRef} />
      <a href={"#how_we_do"} ref={howWeDoRef} />
      <a href={"#powerful_features"} ref={powerfulFeaturesRef} />

      <div id="what_we_do">
        <WhatWeDo />
      </div>
      <div id="problem_statement">
        <ProblemStatement />
      </div>
      <div id="how_we_do">
        <HowWeDo />
      </div>
      <div id="powerful_features">
        <PowerfulFeatures />
      </div>
    </>
  );
};

export default Details;
