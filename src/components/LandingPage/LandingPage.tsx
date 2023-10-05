import React from "react";
import { TEXT } from "@statics";
import VCLIcon from "@statics/images/vcl-logo-2023.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div id="landing-page-container">
      <div id="info-section">
        <div id="title">{TEXT.LANDING_PAGE.TITLE}</div>
        <div id="lab-description">{TEXT.LANDING_PAGE.DESCRIPTION}</div>
        <div className="btn-ubc-home">
          <a
            href="https://www.ubc.ca"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffff",
            }}
          >
            <p>{TEXT.LANDING_PAGE.UBC_PAGE_BUTTON}</p>
          </a>
        </div>
      </div>
      <div id="landing-page-img-container">
        <img src={VCLIcon} className="landing-page-logo"></img>
        {/* <div id="landing-page-img-placeholder"></div> */}
      </div>
    </div>
  );
};

export default LandingPage;
