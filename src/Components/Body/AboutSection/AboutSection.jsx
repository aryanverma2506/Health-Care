import React from "react";

import Bar from "./Bar";
// import TextArrow from "../../Reuseable/TextArrow/TextArrow";
// import Iconbox from "../../Reuseable/Icon/Iconbox";
import { bars } from "../../AppConstant";
import styles from "./AboutSection.module.css";

function AboutSection(props) {
  const { fulltext, limit = 5 } = props;
  const barsRow = bars.slice(0, limit).map((bar) => {
    return <Bar className={styles} bar={bar} />;
  });

  return (
    <div
      className={`${fulltext ? styles["about-me"] : ""} ${
        styles["about-section"]
      }`}
    >
      {fulltext && (
        <>
          {/* <div className={`${styles["left-part"]}`} data-aos="fade-right">
            <div className={`${styles["about-img"]}`}>
              <img src="https://i.imgur.com/b88Bw6C.jpg" alt="" />
            </div>
          </div> */}
          <div
            className={`${styles["about-me"]} ${styles["aboutc"]} ${styles["about-cont"]}`}
            id="aboutc"
          >
            <h3>About</h3>
            <p>
              Many times, people from rural regions do not get access to their
              medical information and health benefits due to physical and
              economic challenges. We will be potentially helping in bridging
              that gap by keeping simplicity and ease of use as our main goal.
            </p>
            <p>
              There are three user roles: Patient, Doctor and Front Office
              Assistant.
            </p>
            <p>
              <p>
                <b>Patient</b> can view his/her appointments, medical bills, and
                records, etc.
              </p>
              <p>
                <b>Doctor</b> can view and edit patient charts, lab and test
                results, medical records, appointments, etc.
              </p>
              <p>
                <b>All front office</b> operations such as check-in, check-out,
                collecting patient info, note allergies, etc.
              </p>
            </p>
          </div>
          {/* <div>
            <div className={`${styles["about-me"]} ${styles["works"]}`}>
              <img src="https://i.imgur.com/Azabnhm.png" alt="" />
            </div>
          </div> */}
        </>
      )}
      {/* {!fulltext && (
        <div className={`${styles["left-part"]}`} data-aos="fade-right">
          <div className={`${styles["about-img"]}`}>
            <img src="https://i.imgur.com/b88Bw6C.jpg" alt="" />
          </div>
        </div>
      )} */}
      {/* <div className={`${styles["right-part"]}`} data-aos="fade-left">
        <div className={`${styles["about-cont"]}`}>
          {!fulltext && (
            <>
              <div>
                <h2>About Me</h2>
                <small className={`${styles["graytext"]}`}>
                  Self Motivated
                </small>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem ipsa alias nisi repellat quisquam itaque doloribus
                  facere aspernatur? Quo error explicabo recusandae
                  <span className={`${styles["fade"]}`}>
                    unde ab doloribus rem a non dicta provident...
                  </span>
                </p>
                <TextArrow link="/aboutme" />
              </div>
            </>
          )}
          <div className={`${styles["bars"]}`}>
            <h3>
              <span>My Skills</span>
              <Iconbox icon="fal fa-paint-brush" />
            </h3>
            {barsRow}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AboutSection;
