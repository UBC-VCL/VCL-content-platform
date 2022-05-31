import React from "react";
import './Home.css';
import { TEXT } from '@statics';

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="Home">
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
        <div className="mission_statement_title">
          <p>{TEXT.MISSION_STATEMENT.TITLE}</p>
          <hr className="horizontal_divider"/>
        </div>
        <div>
          <p className="mission_statement">{TEXT.MISSION_STATEMENT.LAB_GOALS}</p>
          <p className="mission_statement">{TEXT.MISSION_STATEMENT.LAB_GOALS}</p>
        </div>
        <div className="mission_img_container">
          <div className="mission_img_placeholder"></div>
          <div className="mission_img_placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
