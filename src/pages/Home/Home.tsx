import React from "react";
import Card from "@components/Card";
import LandingPage from "@components/LandingPage";
import "./Home.css"
import { TEXT } from '@statics';
import MissionStatement from "@components/MissionStatement";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="Home">
      <LandingPage/>
      <div className="card-section">
        <div className="card-container">
          <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
          <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
          <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
          <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
        </div>
      </div>
      <div className="mission-statement-container">
        <div className="mission-statement-title">
            <p>{TEXT.LANDING_PAGE.MISSION_STATEMENT.TITLE}</p>
            <div className="title-underline"></div>
        </div>
        <div className="mission-statement-text">
          <p className="mission-statement">{TEXT.LANDING_PAGE.MISSION_STATEMENT.LAB_GOALS}</p>
          <p className="mission-statement">{TEXT.LANDING_PAGE.MISSION_STATEMENT.LAB_GOALS}</p>
        </div>
      </div>
      <div className="mission-img-container">
        <div className="mission-img-placeholder-one"></div>
        <div className="mission-img-placeholder-two"></div>
      </div>
      <MissionStatement />
    </div>
  );
};

export default Home;
