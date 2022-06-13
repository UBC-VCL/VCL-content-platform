import React from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import { ROUTES } from '@statics';

const ProjectOverview = () => {
    const projects = useAppSelector(selectProjects); 

    return (
        <div>
            <div>
                All Projects
            </div>
            <div>
                {projects.map((project, i) => {
                    return (
                        <li key={i}>
                            <Link to={`${ROUTES.PROJECT.BASE}/${project.name}`}>
                                {project.name}
                            </Link>
                        </li>
                    )
                })}
            </div>
        </div>
           )
}

export default ProjectOverview;

