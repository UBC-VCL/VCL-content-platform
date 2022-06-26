import React from "react";
import Card from "@components/Card";

interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
  return (
    <div>
      <div>This is the about page</div>
      <div className="card-container">
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
        <Card title="Card Title" desc="Description of how the lab can help COGS students with this project" />
      </div>
    </div>
  );
};

export default About;
