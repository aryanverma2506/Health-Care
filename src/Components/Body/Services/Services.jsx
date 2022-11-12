import React from "react";

import GridService from "./GridService";
import BannerProps from "../Banner/BannerProps";
import { gridservices } from "../../AppConstant";
import styles from "./Services.module.css";

function Services() {
  const gridServicesRow = gridservices?.map((service) => {
    return <GridService className={styles} service={service} />;
  });

  return (
    <div className={`${styles["services"]}`}>
      <BannerProps
        img="https://i.imgur.com/oFYPpob.png"
        title="Online Services"
        text=""
      />
      <div className={`${styles["services-container"]}`}>{gridServicesRow}</div>
    </div>
  );
}

export default Services;
