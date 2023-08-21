import React from 'react';
import { Project } from '@entities/Project';
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs';
import { TEXT } from '@statics';
import "./Project.css";
import "./ProjectPublications.css";
import { Publication } from '@components/ProjectPublication/ProjectPublication';

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
            <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.PROJECT_PUBLICATIONS} />
            Publication page for {props.project.name};


            props.project.publications.map(pub => (
                <Publication
                    name={pub.name}
                    citation={pub.citation}
                    link={pub.link}
                />
            ))



        </div>
    )
};

export default ProjectPublications;
