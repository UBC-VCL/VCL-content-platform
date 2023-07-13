import React from 'react';
import { Project } from '@entities/Project';
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs';
import { TEXT } from '@statics';
import "./Project.css";

interface ProjectProps {
    project : Project,
}

const ProjectTimeline: React.FC<ProjectProps> = (props) => {
    return (
        <div className='project-subcontent-container'>
            <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.PROJECTTIMELINE} /> 
            Timeline page for {props.project.name};
        </div>
    )
};

export default ProjectTimeline;
