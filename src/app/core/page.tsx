import React from "react";
import about from "@styles/about.module.css";

const CorePage = () => {
  return (
    <div className={about.about}>
      <div className={about.main}>
        <h1 className={about.title}>CORE COMMITTEE</h1>
        <p className={about.description}>
          Meet the hardworking and determined Core Committee of the Tech Club.
          Their dedication allows this Club to function as smoothly as it does.
        </p>
      </div>
    </div>
  );
};

export default CorePage;
