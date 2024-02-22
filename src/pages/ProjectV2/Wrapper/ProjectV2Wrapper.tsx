import { RouteComponentProps } from "react-router-dom";
import './ProjectV2Wrapper.css';
import ProjectRouter from '../ProjectRouter/ProjectRouter';
import { useState, useEffect } from 'react';
import { useAppDispatch } from "@redux/hooks";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Collapse } from "@mui/material";
import { appActions } from "@redux/slices/AppRedux";

interface MatchParams {
    project_id: string;
}
interface ProjectProps extends RouteComponentProps<MatchParams> { }

const ProjectV2Wrapper: React.FC<ProjectProps> = ({ match }) => {

    const [menuSize, setMenuSize] = useState<number>(0);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    function handleResize() {
        if (window.innerWidth <= 700) {
            // mobile navbar
            setMenuSize(
                132
            )
        } else {
            // global-nav-bar
            setMenuSize(
                83.5
            )
        }
    }

    useEffect(() => {
        dispatch(appActions.setInProjectsPage(true));
        setMenuSize(document.getElementById("global-nav-bar")!.offsetHeight)

        // handle initial resize on window depending on screen size
        handleResize();
        // Set up the event listener
        window.addEventListener('resize', handleResize);
        console.log(menuSize)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            dispatch(appActions.setInProjectsPage(false));
        };
    }, []); // Empty dependency array ensures the effect runs only on mount and unmount



    return (
        <div className="project-content-background"
        // style={{backgroundImage:`linearGradient(to right,${ white 50%},%{blue 50%})`}}
        >
            <div className="project-content-container">
                <div id="projectV2-sidebar">
                    <div>
                        {/* <div className="exit-icon-container">
                            <MdExitToApp size={30} />
                        </div> */}
                        <div style={{ textAlign: "center", marginTop: "1rem" }}>
                            <div className="project-sidebar-title">
                                <h2>Now Viewing</h2>
                                <h1>{match.params.project_id == 'Image Transitions' ? "I.T." : match.params.project_id}</h1>
                                <div style={{borderBottom:'2px solid #B2C9EC'}}></div>
                            </div>
                            <div className="project-sidebar-clickable-content">
                                <div className="single-table-content">
                                    <a className="project-content-container-href" href={`/projectsV2/${match.params.project_id}/`}>Home</a>
                                </div>
                                <div className="single-table-content">
                                    <a className="project-content-container-href" href={`/projectsV2/${match.params.project_id}/join`}>Join</a>
                                </div>
                                <div className="single-table-content">
                                    <a className="project-content-container-href" href={`/projectsV2/${match.params.project_id}/team`}>Team</a>
                                </div>
                                <div className="single-table-content">
                                    <a className="project-content-container-href" href={`/projectsV2/${match.params.project_id}/resources`}>Resources</a>
                                </div>
                                <div className="single-table-content">
                                    <a className="project-content-container-href" href={`/projectsV2/${match.params.project_id}/publications`}>Publications</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="table-contents">
                    <div className="single-table-content" onClick={() => {setOpenMobileDropdown(!openMobileDropdown)}}>
                        <a className="project-content-container-title">{match.params.project_id}</a>
                        {openMobileDropdown ? <KeyboardArrowUpIcon sx={{width: '27px', height: '27px'}}/> : <KeyboardArrowDownIcon sx={{width: '27px', height: '27px'}}/>}
                    </div>
                    <Collapse
                        in={openMobileDropdown}
                    >
                        <div className="single-table-content">
                            <a className="project-content-container-href" href={`/projectsV2/${match.params.project_id}/`}>Home</a>
                        </div>
                        <div className="single-table-content">
                            <a className="project-content-container-href" href={`/projectsV2/${match.params.project_id}/join`}>Join</a>
                        </div>
                        <div className="single-table-content">
                            <a className="project-content-container-href" href={`/projectsV2/${match.params.project_id}/team`}>Team</a>
                        </div>
                        <div className="single-table-content">
                            <a className="project-content-container-href" href={`/projectsV2/${match.params.project_id}/resources`}>Resources</a>
                        </div>
                        <div className="single-table-content">
                            <a className="project-content-container-href" href={`/projectsV2/${match.params.project_id}/publications`}>Publications</a>
                        </div>
                    </Collapse>
                   
                </div>
                <div className='project-router-div' style={{ paddingTop: `${menuSize}px` }}>
                    <ProjectRouter project_id={match.params.project_id} />
                </div>
            </div>
        </div>
    );
}

export default ProjectV2Wrapper;