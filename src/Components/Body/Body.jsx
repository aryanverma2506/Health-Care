import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotificationSystem from "react-notification-system";

import Icon from "../Reuseable/Icon/Icon";
import Navbar from "../Navbar/Navbar";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
// import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import YouAreLost from "./404/YouAreLost";
import Footer from "../Footer/Footer";
import SignUp from "./SignUp/SignUp";
import LogIn from "./LogIn/LogIn";
import Profile from "./Profile/Profile";
import BookAppointment from "./BookAppointment/BookAppointment";
import { links, style, works } from "../AppConstant";
import { ContextApp } from "../../ContextAPI";
import AppointmentTable from "./Profile/Table/Big Tables/AppointmentTable";
import MedicalBillsTable from "./Profile/Table/Big Tables/MedicalBillsTable";
import MedicalRecordsTable from "./Profile/Table/Big Tables/MedicalRecordsTable";
import Medications from "./Profile/Table/Big Tables/Medications";
import styles from "./Body.module.css";

// Clear This at end

function Body() {
  const { scrolled, notifisystem } = useContext(ContextApp);
  // const worksRoutes = works?.map((work) => {
  //   return <Route path={work.link} element={<ProjectPage project={work} />} />;
  // });

  return (
    <div className={`${styles["body"]}`}>
      <Icon
        icon={
          scrolled
            ? `fad fa-arrow-up ${styles["top"]} ${styles["scrol"]}`
            : `${styles["top"]}`
        }
        clickEvent={() => window.scrollTo(0, 0)}
      />
      <NotificationSystem ref={notifisystem} style={style} />
      <Navbar links={links} />

      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/onlineServices" element={<Services />} />
          <Route path="/bookAppointment" element={<BookAppointment />} />
          {/* <Route path="/works" element={<Works />} /> */}
          {/* {worksRoutes} */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointmentTable" element={<AppointmentTable />} />
          <Route path="/medicalsBills" element={<MedicalBillsTable />} />
          <Route
            path="/medicalRecordsTable"
            element={<MedicalRecordsTable />}
          />
          <Route path="/medications" element={<Medications />} />

          <Route path="*" element={<YouAreLost />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default Body;
