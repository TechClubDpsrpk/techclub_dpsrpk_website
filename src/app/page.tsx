import React from "react";
import about from "@styles/about.module.css";
import home from "@styles/home.module.css";

const Home = () => {
  return (
    <div className={about.about}>
      <div className={home.main}>
        <h3 className={home.titlesub}>WELCOME TO</h3>
        <h3 className={home.title}>THE TECH CLUB</h3>
        <p className={home.description}>
          Dedicated to learning more about the vast world of technology, and
          helping others do the same with the help of our student mentors, and
          participating in various tech-themed events.
        </p>
        <button className={home.button}>Apply Now</button>
      </div>
    </div>
  );
};

export default Home;
