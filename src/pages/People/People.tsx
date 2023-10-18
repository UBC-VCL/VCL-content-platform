import react from "react";
import { useState, useEffect } from "react";
import "./People.css";
import img1 from "../../components/ProjectGallery/media/blank-profile-picture.webp";
import axios from "axios";
import dotenv from "dotenv";
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import Alert from "@mui/material/Alert";
import TEXT from "@statics/text";
import { CircularProgress } from "@mui/material";

dotenv.config();
const baseURL = process.env.REACT_APP_API_URL;
const IS_WIP = process.env.REACT_APP_WIP === "development";

const People = () => {
  interface MemberOBJ {
    name: NameInfo;
    project: string;
    position: string;
    blurb?: string;
  }

  interface NameInfo {
    firstname: string;
    lastname: string;
  }

  const dummyList: Array<string> = [
    "Supervisors",
    "Correlation",
    "IDEO",
    "IT",
    "NOVA",
    "SHIVA",
    "Coding Team"
  ];

  // the page will be defaulted to bein on the first grid item
  const [currentProject, setCurrProject] = useState<string>(dummyList[0]);

  const [currentList, setList] = useState<Array<MemberOBJ>>([]);

  const [resSuccess, setSuccess] = useState<boolean>(false);

  const [svgView, setSvgView] = useState<boolean>(true);

  // This is for styles, will highlight the first select nav-item for the user
  useEffect(() => {
    loadingTimer(2000);
    getMembers();
    document
      .getElementById(dummyList[0].toLowerCase())!
      .classList.add("selected-item");
  }, []);

  // timer in milliseconds, sets how long the loading icon should be shown.
  // for now it is hardcoded timer because the calls that we make on this page is very fast so
  //    setting the state of svgView in the API call will only show the icon for not even 1 second.
  const loadingTimer = (timer: number) => {
  setTimeout(() => {
      setSvgView(false);
    }, timer);
  };

  const getMembers = async () => {
    axios
      .get(`${baseURL}/api/members`)
      .then((response) => {
        setList(response.data.data);
        setSuccess(true);
      })
      .catch((err) => {
        // do nothing with the error
        // console.log(err);
      });
  };

  return (
    <>
      <div className="main-content">
        <div className="project-header">
          <h1 className="people-page-title">OUR TEAM</h1>
          <h4 className="people-page-description">
            Meet the members of our lab and their respective teams
          </h4>
        </div>
        {/*
                    The items within the grid should be done dynamically, it should have inline styling for the number of items, instead of it being inside the css 
                     - An issue that comes with this is the that the nav bar width will become too wide and some titles will not fit within each grid component 
                */}
        <div className="page-nav">
          {dummyList.map((item: string, index: number) => {
            return (
              <div
                key={index}
                className="nav-item"
                onClick={() => {
                  // remove the 'selected-items' className before setting a new currentProject
                  document
                    .getElementById(currentProject.toLowerCase())!
                    .classList.remove("selected-item");
                  setCurrProject(item);
                  document
                    .getElementById(item.toLowerCase())!
                    .classList.add("selected-item");
                }}
              >
                <div className="hover-item" id={item.toLowerCase()}>
                  {item}
                </div>
              </div>
            );
          })}
        </div>
        <div className="content-display">
          <div className="member-list">
            {svgView ? (
              <CircularProgress></CircularProgress>
            ) : resSuccess ? (
              currentList.filter((item) => {
                return (
                  item.position.toLowerCase() ===
                    currentProject.toLowerCase() ||
                  item.project.toLowerCase() === currentProject.toLowerCase()
                );
              }).length > 0 ? (
                currentList
                  .filter((item) => {
                    return (
                      item.position.toLowerCase() ===
                        currentProject.toLowerCase() ||
                      item.project.toLowerCase() ===
                        currentProject.toLowerCase()
                    );
                  })
                  .map((item, index) => {
                    return (
                      <div key={index} className="people-lab-member">
                        <div className="icon-container">
                          <MdAccountCircle
                            // className='icon'
                            size={125}
                          />
                        </div>
                        <div className="info-container">
                          <div className="name">
                            <h2>
                              {item.name.firstname + " " + item.name.lastname}
                            </h2>
                          </div>
                          <div className="position">
                            <h3>{item.position}</h3>
                          </div>
                          <div className="message">
                            {item.blurb
                              ? item.blurb
                              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                          </div>
                        </div>
                      </div>
                    );
                  })
              ) : (
                <Alert severity="info" className="people-page-prompt-string">
                  {TEXT.PEOPLE_PAGE.EMPTY_DISPLAY_LIST}
                </Alert>
              )
            ) : (
              <Alert severity="error" className="people-page-prompt-string">
                {TEXT.PEOPLE_PAGE.RESPONSE_ERROR}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
