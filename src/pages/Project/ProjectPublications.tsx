import React from 'react';
import { Project } from '@entities/Project';
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs';
import { TEXT } from '@statics';
import "./Project.css";
import "./ProjectPublications.css";
import { Publication } from '@components/ProjectPublication/ProjectPublication';
import { useState } from 'react';


interface ProjectProps {
    project: Project,
}

interface Publication {
    name: string,
    citation: string,
    link: string
}

const ProjectPublications: React.FC<ProjectProps> = (props) => {
    return (
        <div className='project-subcontent-container'>
            <div className="project-publications">
                <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.PROJECT_PUBLICATIONS} />
                <div className="pub-header">
                    <p>Publications</p>
                </div>
                <hr />

                <div className='publications-list'>
                    {props.project.publications.map(pub => (
                        <Publication
                            name={pub.name}
                            citation={pub.citation}
                            link={pub.link}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
};

export default ProjectPublications;
