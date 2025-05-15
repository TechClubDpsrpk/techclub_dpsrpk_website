import React from "react";
import about from "@styles/about.module.css";

const PortfolioPage = () => {
  return (
    <div className={about.about}>
      <div className={about.main}>
        <h1 className={about.title}>CLUB PORTFOLIO</h1>
        <p className={about.description}>
          Have a look at the things achieved by our Club from various
          competitions and fests, including our very own fest: Logique. Here,
          you’ll also find the Club’s Medium page, containing various articles
          written by our members.
        </p>
      </div>
    </div>
  );
};

export default PortfolioPage;
