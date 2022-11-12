import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../img/logo.png";
import styles from "./Logo.module.css";

function Logo(props) {
  const { text1, text2 } = props;

  return (
    <Link className={`${styles["logo"]}`} to="">
      <img src={logo} alt="" />
      <span>
        <strong>{text1}</strong>
        <span>{text2}</span>
      </span>
    </Link>
  );
}

export default Logo;
