import React from 'react';
import { Project } from '@entities/Project';

interface ProjectProps {
    project : Project,
}

const ProjectTeam: React.FC<ProjectProps> = (props) => {
	return <div> project team page for {props.project.name} </div>;
};

export default ProjectTeam;

