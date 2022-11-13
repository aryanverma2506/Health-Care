import React from "react";
import { HashLink } from "react-router-hash-link";
import AppButton from "../../../../Reuseable/Button/AppButton";
import styles from "./Tables.module.css";

function Medications() {
  return (
    <div className={`${styles["table"]}`}>
      <div className={`${styles["table-card"]}`}>
        <div className={`${styles["row"]} ${styles["mb-10"]}`}>
          <h4 className={`${styles["table-heading"]}`}>Medications</h4>
          <HashLink smooth to="/profile#top">
            <AppButton text="Back To Profile" icon="fad fa-user-circle" />
          </HashLink>
        </div>
        <table>
          <tr>
            <th>Medication Name</th>
            <th>Dose</th>
            <th>Frequency</th>
            <th>Quantity</th>
            <th>Refills</th>
            <th>Condition</th>
            <th>Provider</th>
            <th>Prescribed</th>
            <th>Renew By</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>0</td>
            <td>Urgent</td>
            <td>Dr. Branch</td>
            <td>Stephanie Branch</td>
            <td>SOUTH MEDIC CENTER</td>
            <td>22/10/2022</td>
            <td>30 min</td>
            <td>ASAP</td>
            <td>Check</td>
            <td>
              <AppButton text="Delete" icon="fas fa-trash-alt" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Medications;
