import React from 'react'
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import GenericLink from '@components/generics/Link'
import { ROUTES } from '@statics';
import "./ProjectOverview.css";

const ProjectOverview = () => {
    const projects = useAppSelector(selectProjects); 

    return (
        <div className='project-overview-container'>
            <div>
                <h2 className='project-overview-title'>All Projects</h2>
                <hr/>
            </div>
            <div className='button-container'>
                <button className="project-button">Correlation</button>
                <button className="project-button">IDEO</button>
                <button className="project-button">Image Transitions</button>
                <button className="project-button">NOVA</button>
                <button className="project-button">Perceptual Modes</button>
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

