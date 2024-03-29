import React from "react";
import LandingPage from "@components/LandingPage";
import "./Home.css";
import { TEXT, ROUTES, CONSTANTS } from "@statics";
import About from "../../components/About";
import ProjectGallery2 from "@components/ProjectGallery2/ProjectGallery2";
import image2 from "@statics/images/HomePage/homePageGalleryImage2.png";
import image1 from "@statics/images/HomePage/homePageGalleryImage1.png";


import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

interface HomeProps { }

// this is the structure of a state OBJ
interface HistoryStateOBJ {
  sourcePage: string;
}

const Home: React.FC<HomeProps> = (props) => {
  // Allows access to different object properties for the URL
  //  - Can access location.state.sourcePage inorder to access information regarding if sent via a {useHistory}.push(..., sourcePage:...) method
  const location = useLocation<HistoryStateOBJ>();
  const history = useHistory();

  useEffect(() => {
    if (location.state) {
      // If the user were to be redirected to this URL using a {useHistory}.push(..., sourcePage:...) and it satisfies the condition than execute autoScroll function
      if (
        location.state.sourcePage === "project-join-home-redirect-from-goButton"
      ) {
        // autoscrolling if prior conditions are met
        document
          .getElementById("home-about-values-div")!
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <div className="Home">
      <LandingPage />
      <div className="mission-statement-container">
        <div className="mission-statement-title">
          <p>{TEXT.LANDING_PAGE.MISSION_STATEMENT.TITLE}</p>
          <div className="mission-title-underline"></div>
        </div>
        <div className="mission-statement-text">
          <p className="mission-statement">
            {TEXT.LANDING_PAGE.MISSION_STATEMENT.LAB_GOALS}
          </p>
        </div>
      </div>
      <ProjectGallery2 data={[{
        img: image1,
        cardType: 'default',
        description: ''
      }, {
        img: image2,
        cardType: 'default',
        description: ''
      }]} title="" titleNum="" darkmode={false} />
      <div className="projects-container">
        <div className="projects-title">
          <p>{TEXT.LANDING_PAGE.CURRENT_PROJECTS.TITLE}</p>
          <div className="projects-title-underline"></div>
        </div>
        <div className="project-logos-container">
          {CONSTANTS.PROJECTS.map((project) => {
            const name = project.name;
            return (
              <a href={`${ROUTES.PROJECT.BASE}/${name}`}>
                <div className="project-logo">
                  <img
                    className="project-logos-img"
                    src={`/logos/${name}.png`}
                  ></img>
                  <p className="logo-name">{name}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
