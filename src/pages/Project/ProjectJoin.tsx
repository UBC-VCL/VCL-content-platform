import React from 'react';
import "./Project.css";
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { TEXT } from '@statics'

interface ProjectProps {
    project : Project,
}

const ProjectJoin: React.FC<ProjectProps> = (props) => {
    return (
        <div className='project-subcontent-container'>
            <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.JOIN_THE_TEAM} /> 
            join page for {props.project.name};
        </div>
    )
};

export default ProjectJoin;
