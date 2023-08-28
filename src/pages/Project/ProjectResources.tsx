import React from 'react';
import { Project } from '@entities/Project';
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs';
import { TEXT } from '@statics';
import "./Project.css";
import {Timeline} from '@pages/Timeline';
import { SearchFilter } from "@pages/Timeline/types";
interface ProjectProps {
    project : Project,
}

const ProjectDefault: React.FC<ProjectProps> = (props) => {
    

    const projectTimelineFilter: SearchFilter = {
        project: [],
        category: ['Website', 'Meeting', 'Workshop'],
        date: [['initial', ''], ['target', '']],
        author: ['Samanshiang Chiang', 'Michael Rotman', 'John Doe', 'Jane Doe'],
        keyword: ""
    };
    projectTimelineFilter.project.push(props.project.name);
    if(props.project.name != "Ideo") {
        return (
            <div className='project-subcontent-container'>
                <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.RESOURCES} /> 
                resources page for {props.project.name};
            </div>
        )
    } else {
        return (
            <div className='project-subcontent-container'>
                <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.RESOURCES} />
                <div style={{ transform: `scale(0.8)`, transformOrigin: 'top left' }}>
                    <Timeline defaultFilter={projectTimelineFilter} />
                </div>
            </div>
        )
    }
    
};

export default ProjectDefault;