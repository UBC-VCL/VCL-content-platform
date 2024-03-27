import React, { useEffect } from "react";
import { Project } from "@entities/Project";
import ProjectBreadcrumbs from "@components/ProjectBreadcrumbs";
import { Person } from "../../components/ProjectPeople/ProjectPeople";
import ProjectAddMember from "@components/ProjectAddMember/ProjectAddMember";
import { TEXT } from "@statics";
import "./ProjectTeam.css";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from "axios";
import dotenv from "dotenv";

import { useAppSelector } from "@redux/hooks";
import { selectIsLoggedIn } from "@redux/slices/AuthRedux";
import { Alert, CircularProgress, Collapse } from "@mui/material";
import { Member } from "./types";

interface ProjectProps {
  project: Project;
}

dotenv.config();
const baseURL = process.env.REACT_APP_API_URL;
const ORDER_OF_POSITIONS = ['lab leader', 'project lead', 'coding team lead', 'lab manager', 'workshop coordinator', 'project manager', 'lead developer', 'project secondary', 'research assistant (co-lead)', 'research assistant', 'co-pilot', 'volunteer', '402 student', '...'];


const ProjectTeam: React.FC<ProjectProps> = (props) => {
  // This is the state in which the add member tab will be dispalyed to the user
  // - Toggled by a single button className='add-mem-button-div'
  const [viewState, setViewState] = useState<boolean>(false);

  const { project } = props;

  const [openAlumniCollapse, setOpenAlumniCollapse] = useState<boolean>(false);

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  // list of all non-alumni team members
  const [teamMembers, setTeamMembers] = useState<Array<Member>>([]);
  // list of all alumni team members
  const [alumni, setAlumni] = useState<Array<Member>>([]);

  const [callComplete, setCallComplete] = useState<boolean>(false);
  const [resSuccess, setSuccess] = useState<boolean>(false);

  const getMembers = async () => {
    await axios
      .get(`${baseURL}/api/members/${project.name}`)
      .then((response) => {
        setTeamMembers(filterByPosition(response.data.data, false));
        setAlumni(filterByPosition(response.data.data, true));
        setSuccess(true);
      })
      .catch((err) => {
        // do nothing with the error
      });
    setCallComplete(true);
  };

  useEffect(() => {
    getMembers();
  }, [])

  function filterByPosition(members: Member[], isAlumni: boolean) {

    // Convert all positions to lower case for case-insensitive comparison
    const lowerCasePositions = ORDER_OF_POSITIONS.map(position => position.toLowerCase());

    // First, filter and map members based on validity of their position and if their alumni status matches isAlumni
    const filteredAndMappedMembers = members.filter((item) => {
      return lowerCasePositions.includes(item.position.toLowerCase()) && (item.isAlumni == isAlumni);
    });

    // Then, sort the results based on the order of positions
    const orderedMembers = filteredAndMappedMembers.sort((a, b) => {
      const posA = lowerCasePositions.indexOf(a.position.toLowerCase());
      const posB = lowerCasePositions.indexOf(b.position.toLowerCase());
      return posA - posB;
    });

    return orderedMembers;
  }

  return (
    <div className="project-subcontent-container">
      <ProjectAddMember isVisible={viewState} setVisibility={setViewState} />

      <div
        className="project-team"
        style={{
          pointerEvents: viewState ? "none" : "auto",
          filter: viewState ? "blur(5px)" : "",
        }}
      >
        <div>
          <ProjectBreadcrumbs
            project_name={props.project.name}
            page_name={TEXT.PROJECT_NAV.TEAM_AND_ALUMNI}
          />
        </div>
        <div className="team-header">
          <p>Team Members</p>
        </div>
        <hr />

        {isLoggedIn ? (
          <div
            className="add-mem-button-div"
            onClick={() => setViewState(!viewState)}
          >
            <div>+ Add Member</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className='project-team-main-container'>
        {callComplete ? 
          (resSuccess ? (
              <>
                <div>
                  {teamMembers.length > 0 ? (
                      teamMembers.map((member, index) => (
                        <Person
                          key={index}
                          name={member.name.firstname + " " + member.name.lastname}
                          involvement={member.position}
                          description={member.blurb ? member.blurb : ''}
                          phone={member.contact?.phoneNumber ? member.contact.phoneNumber : ''}
                          linkedIn={member.contact?.linkedIn ? member.contact.linkedIn : ''}
                          email={member.contact?.email ? member.contact.email : ''}
                          isAlumni={member.isAlumni}
                        />
                      ))
                    ) : (
                      <Alert severity="info" className="project-team-prompt-string">
                        {TEXT.PROJECT_TEAM_PAGE.EMPTY_MEMBER_LIST}
                      </Alert> 
                    )
                  }
                </div>
                <div className="team-header">
                  <p>Alumni</p>
                </div>
                <hr />
                <Collapse in={openAlumniCollapse}>
                  {alumni.length > 0 ? (
                      alumni.map((member, index) => (
                        <Person
                          key={index}
                          name={member.name.firstname + " " + member.name.lastname}
                          involvement={member.position}
                          description={member.blurb ? member.blurb : ''}
                          phone={member.contact?.phoneNumber ? member.contact.phoneNumber : ''}
                          linkedIn={member.contact?.linkedIn ? member.contact.linkedIn : ''}
                          email={member.contact?.email ? member.contact.email : ''}
                          isAlumni={member.isAlumni}
                        />
                      ))
                    ) : (
                      <Alert severity="info" className="project-team-prompt-string">
                        {TEXT.PROJECT_TEAM_PAGE.EMPTY_ALUMNI_LIST}
                      </Alert> 
                    )
                  }
                </Collapse>
                <div className="project-alumni-collapse-button" onClick={() => setOpenAlumniCollapse(!openAlumniCollapse)}>
                  {openAlumniCollapse ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                </div>
              </>
              ) : (
                <Alert severity="error" className="project-team-prompt-string">
                  {TEXT.PROJECT_TEAM_PAGE.RESPONSE_ERROR}
                </Alert>
              )
          ) : (
            <CircularProgress></CircularProgress>
          )
        }
      </div>
    </div>
  );
};

export default ProjectTeam;
