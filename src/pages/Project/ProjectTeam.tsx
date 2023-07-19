import React from 'react';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { Person } from '../../components/ProjectPeople/ProjectPeople';
import { TEXT } from '@statics'
import "./ProjectTeam.css";
import "./Project.css";
import { useState } from 'react'

interface ProjectProps {
    project: Project,
}

const ProjectTeam: React.FC<ProjectProps> = (props) => {

    const [viewState, setViewState] = useState<boolean>(false)

    return (
        <div className='project-subcontent-container'>
            
            <div className='add-viewing-div' style={{ display: viewState ? 'block' : 'none' }}>
            
            </div>
            <div className="project-team" style={{ pointerEvents: viewState ? 'none' : 'auto'}}>
                <div>
                    <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.TEAM_AND_ALUMNI} />
                </div>
                <div className="team-header">
                    <p>
                        Team Members
                    </p>
                </div>
                <hr />
                <div className='add-mem-button-div'>
                    <div onClick={() => setViewState(!viewState)}>
                        + Add Member
                    </div>
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

        </div>
    )
};

export default ProjectTeam;

