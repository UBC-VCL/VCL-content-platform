import "./ProjectV2Default.css";
import { useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import PROJECT_TEXT, { PROJECT } from "@statics/projectsV2";
import { useHistory } from "react-router-dom";
import ProjectGallery2 from "@components/ProjectGallery2/ProjectGallery2";

interface PropOBJ {
  project_id: string;
}

const ProjectV2Default = (props: PropOBJ) => {
  const { project_id } = props;
  const history = useHistory();

  const currentProject: PROJECT | undefined = PROJECT_TEXT.find(
    (element) => element.project_title.toLowerCase() == project_id.toLowerCase()
  );

  // error handling for projects that do not exist
  if (currentProject == undefined) {
    history.push("/404");
  }

  return (
    <div className="projectV2-default-content-container">
      <div className="project-default-hero-section project-default-content-section">
        <div className="project-default-titles">
          <h2 className="project-default-number-title">01</h2>
          <h1 className="project-default-main-title">{project_id}</h1>
          <p className="project-default-title-underline" />
        </div>
        <div className="project-default-hero-descriptions">
          <div
            className="project-default-hero-description project-default-description"
            id="project-default-hero-description-1"
          >
            {currentProject?.description.first}
          </div>
          <div className="project-default-hero-description project-default-description">
            {currentProject?.description.second}
          </div>
          {currentProject?.description.emphasis && (
            <div className="project-description-emphasis-div">
              <RiDoubleQuotesL
                color={"white"}
                className="project-dexcription-emphasis-quotes"
                id="project-dexcription-emphasis-quotes-left"
                size={45}
              />
              <div className="project-emphasis-text-div">
                {currentProject?.description.emphasis!}
              </div>
              <RiDoubleQuotesR
                color={"white"}
                className="project-dexcription-emphasis-quotes"
                id="project-dexcription-emphasis-quotes-right"
                size={45}
              />
            </div>
          )}
        </div>
        {/* <div className="project-default-gallery-slider">
          {
            // TODO
          }
        </div> */}
      </div>
      {
        currentProject?.galleryList && <ProjectGallery2 data={currentProject.galleryList} darkmode={true} />
      }


      {currentProject?.qa && (
        <div>
          <div className="project-default-QA-section project-default-content-section">
            <h2 className="project-default-number-title">03</h2>
            <h1
              className="project-default-main-title"
              style={{ color: "#60779A" }}
            >
              Q&A
            </h1>
            <p className="project-default-title-underline" />
            <div className="project-default-QA-content ">
              {currentProject?.qa?.map((qa, index) => {
                return (
                  <div style={{ margin: "2rem  0" }} key={index}>
                    <h1 className="project-default-QA-question">{qa.q}</h1>
                    <div className="project-default-QA-answer project-default-description">
                      {qa.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="project-default-back-to-top"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="project-default-back-to-top-arrow">
              <MdKeyboardDoubleArrowUp size={45} />
            </div>
            <h1 className="project-default-back-to-top-title">Back to Top</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectV2Default;
