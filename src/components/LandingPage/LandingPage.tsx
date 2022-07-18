import React from "react";
import { TEXT } from '@statics';
import "./LandingPage.css"
import Card from "@components/Card";

const LandingPage = () => {
    return (
      <div>
        <div className="landing_page_top_section">
          <div className="t_row">
              <div className="landing_page_title">
                <p>{TEXT.LANDING_PAGE.TITLE}</p>
              </div>
            </div>
            <div className="t_row">
              <div className="img_placeholder"></div>
            <div className="t_row">
                <div className="landing_page_description">
                  <p>{TEXT.LANDING_PAGE.DESCRIPTION}</p>
                </div>
            </div>
            <div className="btn_ubc_home">
              <a href="https://www.ubc.ca" style={{display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff"}}>
                <p>{TEXT.LANDING_PAGE.UBC_PAGE_BUTTON}</p>
              </a>
            </div>
          </div>
          </div>
          <div className="card-container">
            <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
            <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
            <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
            <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
          </div>
          </div>
    );
  };
  
  export default LandingPage;