import { RouteComponentProps } from "react-router-dom";
import './ProjectV2Wrapper.css';
import ProjectRouter from '../ProjectRouter/ProjectRouter';
import { useState, useEffect } from 'react';
import { MdExitToApp } from "react-icons/md";

interface MatchParams {
    project_id: string;
}
interface ProjectProps extends RouteComponentProps<MatchParams> { }

const ProjectV2Wrapper: React.FC<ProjectProps> = ({ match }) => {

    const [menuSize, setMenuSize] = useState<number>(0);

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
        setMenuSize(document.getElementById("global-nav-bar")!.offsetHeight)

        // Set up the event listener
        window.addEventListener('resize', handleResize);
        console.log(menuSize)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures the effect runs only on mount and unmount



    return (
        <div className="project-content-background"
        // style={{backgroundImage:`linearGradient(to right,${ white 50%},%{blue 50%})`}}
        >
            <div className="project-content-container" style={{ paddingTop: `${menuSize}px` }}>
                <div id="projectV2-sidebar">
                    <div className="exit-icon-container">
                        <MdExitToApp size={30} />
                    </div>
                    <div style={{marginTop:"3rem"}}>
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
                <div id="table-contents">
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
                <div className='project-router-div'>
                    <ProjectRouter project_id={match.params.project_id} />
                </div>
            </div>
        </div>
    );
}

export default ProjectV2Wrapper;