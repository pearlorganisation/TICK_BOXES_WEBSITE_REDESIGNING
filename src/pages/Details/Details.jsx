// ---------------------------------------------------Imports--------------------------------------------
import React, { useEffect, useRef } from "react";
import WhatWeDo from "../../components/Details/WhatWeDo/WhatWeDo";
import ProblemStatement from "../../components/Details/ProblemStatement/ProblemStatement";
import HowWeDo from "../../components/Details/HowWeDo/HowWeDo";
import PowerfulFeatures from "../../components/Details/PowerfulFeatures/PowerfulFeatures";
import { Link, Element } from "react-scroll";
import { useLocation } from "react-router-dom";
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------

const Details = () => {
  // ----------------------------------------------States-----------------------------------------------------
  // -------------------------------------------------------------------------------------------------------
  // ----------------------------------------------Hooks-----------------------------------------------------

  const location = useLocation();
  const detailField = location?.state?.detailField || "what_we_do";

  const whatWeDoRef = useRef();
  const problemStatementRef = useRef();
  const howWeDoRef = useRef();
  const powerfulFeaturesRef = useRef();

  let detailObj = {
    what_we_do: whatWeDoRef?.current?.click(),
    problem_statement: problemStatementRef?.current?.click(),
    how_we_do: howWeDoRef?.current?.click(),
    powerful_features: powerfulFeaturesRef?.current?.click(),
  };

  useEffect(() => {
    powerfulFeaturesRef.current.click();
  }, []);
  // -------------------------------------------useEffect-----------------------------------------------------
  // -------------------------------------------------------------------------------------------------------
  return (
    <>
      <div ref={whatWeDoRef}>
        <Link
          to="what_we_do"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        />
      </div>
      <div ref={problemStatementRef}>
        <Link
          to="problem_statement"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        />
      </div>
      <div ref={howWeDoRef}>
        <Link
          to="how_we_do"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        />
      </div>
      <div ref={powerfulFeaturesRef}>
        <Link
          to="powerful_features"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        />
      </div>

      <Element name="what_we_do">
        <WhatWeDo />
      </Element>
      <Element name="problem_statement">
        <ProblemStatement />
      </Element>
      <Element name="how_we_do">
        <HowWeDo />
      </Element>
      <Element name="powerful_features">
        <PowerfulFeatures />
      </Element>
    </>
  );
};

export default Details;
