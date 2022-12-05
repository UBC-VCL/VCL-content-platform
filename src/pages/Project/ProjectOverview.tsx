import React from 'react'
import "./ProjectOverview.css";
import ProjectOverviewCard from "@components/ProjectOverviewCard/ProjectOverviewCard";
import { CONSTANTS } from '@statics';

const ProjectOverview = () => {
    // const projects = useAppSelector(selectProjects);

    {/* TODO: refactor to fetch data from backend, currently hard-coded */}
    return (
        <div className='project-overview-container'>
            <div>
                <h2 className='project-overview-title'>All Projects</h2>
                <hr/>
            </div >
            <div className='button-container'>
                {CONSTANTS.PROJECTS.map((project) => <ProjectOverviewCard project={project} ></ProjectOverviewCard>)}
            </div>
        </div>
    )
}

export default ProjectOverview;

