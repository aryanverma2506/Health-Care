import React from "react";
import { HashLink } from "react-router-hash-link";
import AppButton from "../../../../Reuseable/Button/AppButton";
import styles from "./Tables.module.css";

function MedicalRecordsTable() {
  return (
    <div className={`${styles["table"]}`}>
      <div className={`${styles["table-card"]}`}>
        <div className={`${styles["row"]} ${styles["mb-10"]}`}>
          <h4 className={`${styles["table-heading"]}`}>Medical Records</h4>
          <HashLink smooth to="/medicalRecordsTable#top">
            <AppButton text="Browse All" icon="fas fa-browser" />
          </HashLink>
        </div>
        <table>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Result</th>
          </tr>
          <tr>
            <td>Urgent</td>
            <td>22/10/2022</td>
            <td>Sri City Government Hospital</td>
          </tr>
          <tr>
            <td>Follow-up</td>
            <td>11/11/2022</td>
            <td>Morar Hospital</td>
          </tr>
          <tr>
            <td>Follow-up</td>
            <td>12/11/2022</td>
            <td>Apollo Spectra</td>
          </tr>
          <tr>
            <td>Cronic care</td>
            <td>13/11/2022</td>
            <td>Reliance Healthcare</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MedicalRecordsTable;
