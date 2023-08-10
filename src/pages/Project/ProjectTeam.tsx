import React from 'react';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { Person } from '../../components/ProjectPeople/ProjectPeople';
import ProjectAddMember from '@components/ProjectAddMember/ProjectAddMember';
import { TEXT } from '@statics'
import "./ProjectTeam.css";
import "./Project.css";
import { useState } from 'react'

interface ProjectProps {
    project: Project,
}

const ProjectTeam: React.FC<ProjectProps> = (props) => {

    // This is the state in which the add member tab will be dispalyed to the user
    // - Toggled by a single button className='add-mem-button-div'
    const [viewState, setViewState] = useState<boolean>(false)

    return (
        <div className='project-subcontent-container'>

            <ProjectAddMember isVisible={viewState} setVisibility={setViewState}/>
            
            <div className="project-team" style={{ pointerEvents: viewState ? 'none' : 'auto', filter: viewState ? "blur(5px)" : ""}}>
                <div>
                    <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.TEAM_AND_ALUMNI} />
                </div>
                <div className="team-header">
                    <p>
                        Team Members
                    </p>
                </div>
                <hr />
                <div className='add-mem-button-div' onClick={() => setViewState(!viewState)}>
                    <div>
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

