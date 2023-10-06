import react from "react";
import { useState, useEffect } from "react";
import "./People.css";
import img1 from "../../components/ProjectGallery/media/blank-profile-picture.webp";
import axios from "axios";
import dotenv from "dotenv";
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

dotenv.config();
const baseURL = process.env.REACT_APP_API_URL;
const IS_WIP = process.env.REACT_APP_WIP === "development";

const People = () => {

  interface MemberOBJ {
    name: NameInfo;
    project: string;
    position: string;
    contact: ContactInfo;
    blurb?: string;
  }

  interface ContactInfo {
    email?: string;
    linkedIn?: string;
    phoneNumber?: string;
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
    "Perceptual Modes",
  ];

  // I am not sure if this something that should be kept but this an example of what the array would look like from the backend
  const memberDummyList: Array<MemberOBJ> = [
    {
      name: { firstname: "John", lastname: "Doe" },
      project: "Correlation",
      position: "Something1",
      contact: {
        linkedIn: "ryanyae",
        email: "123456@gmail.com",
        phoneNumber: "(123)-456-7890",
      },
    },
    {
      name: { firstname: "Jane", lastname: "Doe" },
      project: "IDEO",
      position: "Something2",
      contact: { linkedIn: "ryanyae", email: "123456@gmail.com" },
    },
    {
      name: { firstname: "JKoe", lastname: "Doe" },
      project: "IT",
      position: "Something3",
      contact: { linkedIn: "ryanyae", email: "123456@gmail.com" },
    },
    {
      name: { firstname: "Jane", lastname: "Doe" },
      project: "NOVA",
      position: "Something4",
      contact: { linkedIn: "ryanyae", email: "123456@gmail.com" },
    },
    {
      name: { firstname: "Jane", lastname: "Doe" },
      project: "Perceptual Modes",
      position: "Something5",
      contact: { linkedIn: "ryanyae", email: "123456@gmail.com" },
    },
    {
      name: { firstname: "Jane", lastname: "Doe" },
      project: "Perceptual Modes",
      position: "Supervisors",
      contact: { linkedIn: "ryanyae", email: "123456@gmail.com" },
    },
  ];

  // the page will be defaulted to bein on the first grid item
  const [currentProject, setCurrProject] = useState<string>(dummyList[0]);

  const [currentList, setList] = useState<Array<MemberOBJ>>([]);

  // This is for styles, will highlight the first select nav-item for the user
  useEffect(() => {
    getMembers();
    document
      .getElementById(dummyList[0].toLowerCase())!
      .classList.add("selected-item");
  }, []);

  const getMembers = async () => {
    axios
      .get(`${baseURL}/api/members`)
      .then((response) => setList(response.data.data))
      .catch((err) => {
        // do nothing with the error
        // console.log(err);
      });
  };

  const contactIcons = (key: string): JSX.Element => {
    switch (key) {
      case "linkedIn":
        return <AiFillLinkedin size={20} className={"contact-icon"} />;
      case "email":
        return <MdEmail size={20} className={"contact-icon"} />;
      default:
        return <AiFillPhone size={20} className={"contact-icon"} />;
    }
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
            {currentList
              .filter((item) => {
                return (
                  item.position.toLowerCase() ===
                    currentProject.toLowerCase() ||
                  item.project.toLowerCase() === currentProject.toLowerCase()
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
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
