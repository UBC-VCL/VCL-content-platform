import React from "react";
import Card from "@components/Card";
import "./Home.css"
import { TEXT } from '@statics';

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div>
      <div>HI THIS IS THE LANDING PAGE</div>
      <div className="card-container">
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
      </div>
      <div className="mission-statement-title">
          <p>{TEXT.LANDING_PAGE.MISSION_STATEMENT.TITLE}</p>
          <hr className="horizontal-divider"/>
        </div>
        <div>
          <p className="mission-statement">{TEXT.LANDING_PAGE.MISSION_STATEMENT.LAB_GOALS}</p>
          <p className="mission-statement">{TEXT.LANDING_PAGE.MISSION_STATEMENT.LAB_GOALS}</p>
        </div>
        <div className="mission-img-container">
          <div className="mission-img-placeholder"></div>
          <div className="mission-img-placeholder"></div>
        </div>
    </div>
  );
};

export default Home;
