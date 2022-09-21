import React from 'react';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { Person } from '../../components/ProjectPeople/ProjectPeople';
import { TEXT } from '@statics'
import AddIcon from '@mui/icons-material/Add';
import "./ProjectTeam.css";
import "./Project.css";

interface ProjectProps {
    project : Project,
}

const ProjectTeam: React.FC<ProjectProps> = (props) => {
    return (
        <div className="project-team">
            <div>
                <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.TEAM} /> 
            </div>
            <div className="team-header">Team Members</div>
            <hr></hr>
            <div className='button_container'>
                <button className='btn btn--add-member'>
                    <AddIcon className="icon icon--plus" />
                    <h3 className='btn__title'>add member</h3>
                </button>
            </div>
            <div>
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
        />
        </div>
        </div>
    )
};

export default ProjectTeam;

