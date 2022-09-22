import React from 'react';
import { Project } from '@entities/Project';

interface ProjectProps {
    project : Project,
}

const ProjectDefault: React.FC<ProjectProps> = (props) => {
	return <div> resources page for {props.project.name} </div>;
};

export default ProjectDefault;
