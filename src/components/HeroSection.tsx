import React from "react";
import { TEXT } from '@/statics';

const HeroSection = () => {
    return (
      <div>
        <div id="landing-page-container">
            <div id="info-section">
                <div id="title">
                    {TEXT.LANDING_PAGE.TITLE}
                </div>
                <div id="lab-description">
                    {TEXT.LANDING_PAGE.DESCRIPTION}
                </div>
                <div className="btn-ubc-home">
                    <a href="https://www.ubc.ca" target="_blank" style={{display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff"}}>
                        <p>{TEXT.LANDING_PAGE.UBC_PAGE_BUTTON}</p>
                    </a>
                </div>
            </div>
            <div id="landing-page-img-container">
                <div id="landing-page-img-placeholder"></div>
            </div>
        </div>
    </div>
    );
  };
  
  export default HeroSection;