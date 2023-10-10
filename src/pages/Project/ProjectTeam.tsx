import React from 'react';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { Person } from '../../components/ProjectPeople/ProjectPeople';
import ProjectAddMember from '@components/ProjectAddMember/ProjectAddMember';
import { TEXT } from '@statics'
import "./ProjectTeam.css";
import "./Project.css";
import { useState } from 'react'

import { useAppSelector } from '@redux/hooks';
import { selectIsLoggedIn } from '@redux/slices/AuthRedux';

interface ProjectProps {
    project: Project,
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

    // This is the state in which the add member tab will be dispalyed to the user
    // - Toggled by a single button className='add-mem-button-div'
    const [viewState, setViewState] = useState<boolean>(false)

    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    return (
        <div className='project-subcontent-container'>

            <ProjectAddMember isVisible={viewState} setVisibility={setViewState} />

            <div className="project-team" style={{ pointerEvents: viewState ? 'none' : 'auto', filter: viewState ? "blur(5px)" : "" }}>
                <div>
                    <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.TEAM_AND_ALUMNI} />
                </div>
                <div className="team-header">
                    <p>
                        Team Members
                    </p>
                </div>
                <hr />

                {isLoggedIn ?
                <div className='add-mem-button-div' onClick={() => setViewState(!viewState)}>
                    <div>
                        + Add Member
                    </div>
                </div>
                :
                <div></div>}
                

            </div>
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
    )
};

export default ProjectTeam;

