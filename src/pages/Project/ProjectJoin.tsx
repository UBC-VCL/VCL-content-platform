import React from 'react';
import { Project } from '@entities/Project';

interface ProjectProps {
    project : Project,
}

const ProjectJoin: React.FC<ProjectProps> = (props) => {
	return <div> project join page for {props.project.name} </div>;
};

export default ProjectJoin;
