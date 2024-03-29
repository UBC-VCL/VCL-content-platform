import React from "react";
import { Project } from "@entities/Project";
import ProjectBreadcrumbs from "@components/ProjectBreadcrumbs";
import { TEXT } from "@statics";
import "./Project.css";
import "./ProjectPublications.css";
import { Publication } from "@components/ProjectPublication/ProjectPublication";
import { useState } from "react";

interface ProjectProps {
  project: Project;
}

interface Publication {
  name: string;
  citation: string;
  link: string;
}

const ProjectPublications: React.FC<ProjectProps> = (props) => {
  return props.project.publications && props.project.publications.length > 0 ? (
    <div className="project-subcontent-container">
      <div className="project-pub-list">
        <ProjectBreadcrumbs
          project_name={props.project.name}
          page_name={TEXT.PROJECT_NAV.PROJECT_PUBLICATIONS}
        />
        <div className="pub-header">
          <p className="pub-title">Publications</p>
        </div>

        {/* <div className="pub-project-name">
                        <p>{props.project.name}</p>
                    </div> */}

        <div className="publications-list">
          {props.project.publications.map((pub) => (
            <Publication
              name={pub.name}
              citation={pub.citation}
              link={pub.link}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="project-subcontent-container">
      <div className="project-pub-list">
        <ProjectBreadcrumbs
          project_name={props.project.name}
          page_name={TEXT.PROJECT_NAV.PROJECT_PUBLICATIONS}
        />
        <div className="pub-header">
          <p className="pub-title">Publications</p>
        </div>
        <hr />

        <p style={{ marginTop: "1%" }}>
          {props.project.name} has no publications.
        </p>
      </div>
    </div>
  );
};

export default ProjectPublications;
