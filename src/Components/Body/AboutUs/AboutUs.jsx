import React from "react";

import BannerProps from "../Banner/BannerProps";
import AboutSection from "../AboutSection/AboutSection";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={`${styles["about-me"]}`}>
      <BannerProps
        img="https://i.imgur.com/1PBKN6Z.png"
        title="About"
        text=""
      />
      <div className={`${styles["about-me-part"]}`}>
        <AboutSection fulltext limit={Infinity} />
      </div>
    </div>
  );
}

export default AboutUs;
