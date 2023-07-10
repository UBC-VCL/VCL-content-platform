import React from 'react';
import { Project } from '@entities/Project';
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs';
import { TEXT } from '@statics';
import "./Project.css";
import Timeline from '@pages/Timeline/Timeline';

interface ProjectProps {
    project : Project,
}

const ProjectDefault: React.FC<ProjectProps> = (props) => {
    interface Filter {

        project: string[];
        category: string[];
        date: string;
        author: string[];
        keyword: string;
    };
    const timeLineDefaultFilter: Filter = {
        project: [],
        category: ['Website', 'Meeting', 'Workshop'],
        date: "All",
        author: ['Samanshiang Chiang', 'Michael Rotman', 'John Doe', 'Jane Doe'],
        keyword: ""
    };
    timeLineDefaultFilter.project.push(props.project.name);
    if(props.project.name != "IDEO") {
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
                <Timeline defaultFilter={timeLineDefaultFilter}/>
            </div>
        )
    }
    
};

export default ProjectDefault;
