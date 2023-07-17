import Grid from "@mui/material/Grid";
import React from "react";
import "./About.css";
import { TEXT } from "@statics";
import kennyMap from "@statics/images/kenny-map.png";
import Card from "@components/Card";
import Footer from "@components/Footer";
import MissionStatement from "@components/LabGoalsFooter";

interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
  return (
    <div className="About">
      <div className="header">
        <p className="header-text">About the Lab</p>
        <div className="title-underline"></div>
      </div>
      <div className="main-body">
        <section>
          <p>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P1}</p>
          <div className="mission-img-container">
            <div className="mission-img-placeholder-one"></div>
            <div className="mission-img-placeholder-two"></div>
          </div>
        </section>
        <section>
          <h2>{TEXT.ABOUT_PAGE.MAIN.VALUES.HEADER}</h2>
          <ul className="value-list">
            <li>{TEXT.ABOUT_PAGE.MAIN.VALUES.VALUE_1}</li>
            <li>{TEXT.ABOUT_PAGE.MAIN.VALUES.VALUE_2}</li>
            <li>{TEXT.ABOUT_PAGE.MAIN.VALUES.VALUE_3}</li>
          </ul>
        </section>
        <section>
          <h2 className="responsibilities-header">
            {TEXT.ABOUT_PAGE.MAIN.RESPONSIBILITIES.HEADER}
          </h2>
          <p className="responsibilities-subheader">
            {TEXT.ABOUT_PAGE.MAIN.RESPONSIBILITIES.SUBHEADER}
          </p>
          <ul className="responsibility-list">
            <li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
            <li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
            <li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
            <li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
          </ul>
        </section>
      </div>
      <section className="gain-section">
        <h2>{TEXT.ABOUT_PAGE.GAIN_SECTION.HEADER}</h2>
        <div className="card-container">
          <Card
            title={TEXT.ABOUT_PAGE.GAIN_SECTION.RESEARCH_EXP.HEADER}
            desc={TEXT.ABOUT_PAGE.GAIN_SECTION.RESEARCH_EXP.DESCRIPTION}
            backgroundColor="#E0FDFF"
          />
          <Card
            title={TEXT.ABOUT_PAGE.GAIN_SECTION.DIRECTED_STUDIES.HEADER}
            desc={TEXT.ABOUT_PAGE.GAIN_SECTION.DIRECTED_STUDIES.DESCRIPTION}
            backgroundColor="#E0F0FF"
          />
          <Card
            title={TEXT.ABOUT_PAGE.GAIN_SECTION.GRADUATE_STUDENTS.HEADER}
            desc={TEXT.ABOUT_PAGE.GAIN_SECTION.GRADUATE_STUDENTS.DESCRIPTION}
            backgroundColor="#E0E9FF"
          />
          <Card
            title={TEXT.ABOUT_PAGE.GAIN_SECTION.GLOBAL_RESEARCH.HEADER}
            desc={TEXT.ABOUT_PAGE.GAIN_SECTION.GLOBAL_RESEARCH.DESCRIPTION}
            backgroundColor="#D9F6FF"
          />
        </div>
      </section>
      <div className="contact">
        <div className="map-container">
          <img src={kennyMap} alt="map" />
        </div>
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            We are located in the{" "}
            <a href="https://psych.ubc.ca/" target="_blank">
              Department of Psychology
            </a>{" "}
            at the{" "}
            <a href="https://www.ubc.ca/" target="_blank">
              University of British Columbia.
            </a>
          </p>
          <p>
            <strong>Address</strong> <br />
            <p className="lab-address">
              {TEXT.LAB_INFO.ADDRESS_LINE_ONE} <br />
              {TEXT.LAB_INFO.ADDRESS_LINE_TWO}
            </p>
          </p>
          <p>
            <strong>Tel</strong> {TEXT.LAB_INFO.TEL} <br />
            <strong>Fax</strong> {TEXT.LAB_INFO.FAX}
          </p>
          <p>
            <strong>Contact</strong>
          </p>
          <ul>
            <li>
              <strong>Lab:</strong> {TEXT.LAB_INFO.EMAIL}
            </li>
            <li>
              <strong>Dr. Rensink:</strong> {TEXT.LAB_INFO.DRRENSINK_CONTACT}
            </li>
            <li>
              <strong>Daniel (Admin):</strong>
            </li>
            <li>
              <strong>Sara (Admin):</strong>
            </li>
            <li>
              <strong>Sogol (Admin):</strong>
            </li>
          </ul>
          <p>
            <strong>Lab Hours</strong> <br />
            Weekdays: 9AM-5PM <br />
            Weekends: Closed
          </p>
        </div>
      </div>
      <MissionStatement />
    </div>
  );
};

export default About;
