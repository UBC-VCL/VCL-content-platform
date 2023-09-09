import React from 'react';
import LandingPage from '@components/LandingPage';
import './Home.css';
import { TEXT } from '@statics';
import About from '../../components/About';
import ProjectLogos from '@statics/images/project-logos.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

interface HomeProps {}

// this is the structure of a state OBJ
interface HistoryStateOBJ {
  sourcePage:string;
}

const Home: React.FC<HomeProps> = (props) => {

  const location = useLocation<HistoryStateOBJ>();
  // const referrer = document.referrer
  // console.log(referrer)

  useEffect(() => {
    if (location.state) {
      if (location.state.sourcePage === 'project-join-home-redirect-from-goButton') {
        document.getElementById("home-about-values-div")!.scrollIntoView({behavior: 'smooth', block:'start'})        
      }
    }
  }, [])

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
      <div className="projects-container">
        <div className="projects-title">
          <p>{TEXT.LANDING_PAGE.CURRENT_PROJECTS.TITLE}</p>
          <div className="projects-title-underline"></div>
        </div>
        <div className="projects-img-container">
          {/* TODO: Separate out into individual project images */}
          <img className="project-logos-img" src={ProjectLogos}></img>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
