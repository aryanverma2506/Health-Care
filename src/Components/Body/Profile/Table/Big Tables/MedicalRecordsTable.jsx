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
          <HashLink smooth to="/profile#top">
            <AppButton text="Back To Profile" icon="fad fa-user-circle" />
          </HashLink>
        </div>
        <table>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Note Type</th>
            <th>Author</th>
            <th>Last Updated</th>
            <th>Last Updated By</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>0</td>
            <td>Urgent</td>
            <td>Dr. Branch</td>
            <td>Stephanie Branch</td>
            <td>SOUTH MEDIC CENTER</td>
            <td>22/10/2022</td>
            <td>
              <AppButton text="Delete" icon="fas fa-trash-alt" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MedicalRecordsTable;
