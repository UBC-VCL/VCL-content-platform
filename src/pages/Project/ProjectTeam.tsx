import React, { useEffect } from "react";
import { Project } from "@entities/Project";
import ProjectBreadcrumbs from "@components/ProjectBreadcrumbs";
import { Person } from "../../components/ProjectPeople/ProjectPeople";
import ProjectAddMember from "@components/ProjectAddMember/ProjectAddMember";
import { TEXT } from "@statics";
import "./ProjectTeam.css";
import "./Project.css";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from "axios";
import dotenv from "dotenv";

import { useAppSelector } from "@redux/hooks";
import { selectIsLoggedIn } from "@redux/slices/AuthRedux";
import { Alert, CircularProgress, Collapse } from "@mui/material";

interface ProjectProps {
  project: Project;
}

interface NameInfo {
  firstname: string;
  lastname: string;
}

interface ContactInfo {
  phoneNumber?: string;
  linkedIn?: string;
  email?: string;
}

interface Member {
  name: NameInfo;
  project: string;
  position: string;
  contact?: ContactInfo;
  blurb?: string;
  isAlumni: boolean;
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

  const [teamMembers, setTeamMembers] = useState<Array<Member>>([]);

  const [callComplete, setCallComplete] = useState<boolean>(false);
  const [resSuccess, setSuccess] = useState<boolean>(false);

  const getMembers = async () => {
    axios
      .get(`${baseURL}/api/members`)
      .then((response) => {
        filterMembers(response.data.data);
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
  

  const filterMembers = (members: Array<Member>) => {
    setTeamMembers(
      members
        .filter((item) => {
            return (
              item.position == project.name ||
              item.project == project.name
            );
        })
    )
  }

  function filterByPosition(positions: string[]) {

    // Convert all positions to lower case for case-insensitive comparison
    const lowerCasePositions = positions.map(position => position.toLowerCase());

    // First, filter and map members as before
    const filteredAndMappedMembers = teamMembers.filter((item) => {
      return lowerCasePositions.includes(item.position.toLowerCase());
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
      <div>
        {resSuccess ? 
          (teamMembers ? (
            <>
              <div>
                {teamMembers.length > 0 ? (
                    filterByPosition(ORDER_OF_POSITIONS).map((member) => (
                      <Person
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
                    <Alert severity="info" className="people-page-prompt-string">
                      {TEXT.PEOPLE_PAGE.EMPTY_DISPLAY_LIST}
                    </Alert> 
                  )
                }
              </div>
              <div className="team-header">
                <p>Alumni</p>
              </div>
              <hr />
              <Collapse in={openAlumniCollapse}>
                {teamMembers.length > 0 ? (
                    filterByPosition(ORDER_OF_POSITIONS).map((member) => (
                      <Person
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
                    <Alert severity="info" className="people-page-prompt-string">
                      {TEXT.PEOPLE_PAGE.EMPTY_DISPLAY_LIST}
                    </Alert> 
                  )
                }
              </Collapse>
              <div className="project-alumni-collapse-button" onClick={() => setOpenAlumniCollapse(!openAlumniCollapse)}>
                {openAlumniCollapse ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
              </div>
            </>
            ) : (
              <CircularProgress></CircularProgress>
            )
          ) : (
          <Alert severity="error" className="people-page-prompt-string">
            {TEXT.PEOPLE_PAGE.RESPONSE_ERROR}
          </Alert>
          )
        }
      </div>
    </div>
  );
};

export default ProjectTeam;
