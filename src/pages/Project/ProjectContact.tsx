import React from 'react';
import { Project } from '@entities/Project'

interface ProjectProps {
    project : Project,
}

const ProjectContact: React.FC<ProjectProps> = (props) => {
    console.log("HHERERER")
    return <div> contact page for {props.project.name} </div>;
};

export default ProjectContact;



