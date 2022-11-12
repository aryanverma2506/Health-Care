import React from "react";
import AppointmentTable from "./Table/Small Tables/AppointmentTable";
import MedicalRecordsTable from "./Table/Small Tables/MedicalRecordsTable";
import MedicalBillsTable from "./Table/Small Tables/MedicalBillsTable";
import Medications from "./Table/Small Tables/Medications";

import "./Profile.css";

function Profile() {
  return (
    <div className="profileBody">
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>Nitigya Joshi</h4>
                      <p className="text-secondary mb-1">Patient</p>
                      <p className="text-muted font-size-sm">
                        IIIT Sri City, Chittoor, A.P.
                      </p>
                      <button className="btn btn-primary">Edit</button>&nbsp;
                      <button className="btn btn-outline-primary">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap sidebarActive">
                    <h6 className="mb-0 imageAdjust">
                      <img
                        src={require("../../../img/user.png")}
                        alt=""
                        className="profilePageProfImg"
                      />{" "}
                      Profile
                    </h6>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0 imageAdjust">
                      <img
                        src={require("../../../img/medical-appointment.png")}
                        alt=""
                        className="profilePageAppoinImg"
                      />{" "}
                      Appointments
                    </h6>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0 imageAdjust">
                      <img src={require("../../../img/bill.png")} alt="" />{" "}
                      Medical Bills
                    </h6>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0 imageAdjust">
                      <img
                        src={require("../../../img/medical-record.png")}
                        alt=""
                      />{" "}
                      Medical Records
                    </h6>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0 imageAdjust">
                      <img src={require("../../../img/medicine.png")} alt="" />{" "}
                      Medications
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Nitigya Joshi</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      nitigya@gmail.com
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (+91) 1234567890
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      BH-1, IIIT Sri City, Chittoor, A.P.
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-info " target="__blank" href="/">
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <AppointmentTable />
              <MedicalRecordsTable />
              <MedicalBillsTable />
              <Medications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
