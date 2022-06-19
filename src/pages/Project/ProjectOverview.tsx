import React from 'react'
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import GenericLink from '@components/generics/Link'
import { ROUTES, TEXT } from '@statics';
import "./ProjectOverview.css";

const ProjectOverview = () => {
    const projects = useAppSelector(selectProjects); 

    return (
        <div className='project-overview-container'>
            <div>
                <h2 className='project-overview-title'>All Projects</h2>
                <hr/>
            </div>
            {/* TODO: refactor to fetch data from backend, currently hard-coded */}
            <div className='button-container'>
                <button className="project-button">{TEXT.PROJECT_NAMES.CORRELATION}</button>
                <button className="project-button">{TEXT.PROJECT_NAMES.IDEO}</button>
                <button className="project-button">{TEXT.PROJECT_NAMES.IMG_TRANSITIONS}</button>
                <button className="project-button">{TEXT.PROJECT_NAMES.NOVA}</button>
                <button className="project-button">{TEXT.PROJECT_NAMES.PERCEPTUAL_MODES}</button>
            <div>
                {projects.map((project, i) => {
                    return (
                        <li key={i}>
                            <GenericLink name={project.name} 
                                        to={`${ROUTES.PROJECT.BASE}/${project.name}`}/>
                        </li>
                    )
                })}
            </div>
            </div>
        </div>
           )
}

export default ProjectOverview;

