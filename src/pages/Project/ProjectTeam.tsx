import React from 'react';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { Person } from '../../components/ProjectPeople/ProjectPeople';
import { TEXT } from '@statics'
import "./ProjectTeam.css";
import "./Project.css";

interface ProjectProps {
    project : Project,
}

interface Member {
    name: string,
    position: string,
    education: string,
    description?: string,
    email?: string,
    phone?: string,
    linkedIn?: string,
    isCurrentMember?: boolean
}

const ProjectTeam: React.FC<ProjectProps> = (props) => {
    return (
        <div className='project-subcontent-container'>
        <div className="project-team">
            <div>
                <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.TEAM_AND_ALUMNI} /> 
            </div>
            <div className="team-header">Team Members</div>
            <hr/>
            <div>
            {props.project.members ? 
            (props.project.members.map(member => (
                <Person 
                name={member.name}
                involvement={member.position + ', ' + member.education}
                description={member.description ? member.description : ''}
                email={member.email ? member.email : 'not available'}
                phone={member.phone ? member.phone : 'not available'}
                linkedIn={member.linkedIn ? member.linkedIn : 'not available'}
                isCurrentMember={false}
            />
            ))) 
            : 
            (<>
            <Person 
                name="Kevin Peng"
                involvement='Project Lead, Graduate Student, Coding Team Manager, Analytics Manager'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
                email='mellio10@psych.ubc.ca'
                phone='604 000 0000'
                linkedIn='linkedin.com'
                isCurrentMember={true}
            />
            <Person 
            name="Maddison Eliot"
            involvement='Project Lead, Graduate Student, Coding Team Manager, Analytics Manager'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
            email='mellio10@psych.ubc.ca'
            phone='604 000 0000'
            linkedIn='linkedin.com'
            isCurrentMember={false}
        /></>)}
        </div>
        </div>
        </div>
    )
};

export default ProjectTeam;

