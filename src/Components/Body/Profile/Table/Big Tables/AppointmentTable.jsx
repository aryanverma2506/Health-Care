import React from "react";
import { HashLink } from "react-router-hash-link";
import AppButton from "../../../../Reuseable/Button/AppButton";
import styles from "./Tables.module.css";

function AppointmentTable() {
  return (
    <div className={`${styles["table"]}`}>
      <div className={`${styles["table-card"]}`}>
        <div className={`${styles["row"]} ${styles["mb-10"]}`}>
          <h4 className={`${styles["table-heading"]}`}>Appointments</h4>
          <HashLink smooth to="/profile">
            <AppButton text="Back To Profile" icon="fad fa-user-circle" />
          </HashLink>
        </div>
        <table>
          <tr>
            <th>Id</th>
            <th>Visit Type</th>
            <th>Clinician</th>
            <th>Provider</th>
            <th>Location</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Comments</th>
            <th>Insurance</th>
            <th>Operations</th>
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

export default AppointmentTable;
