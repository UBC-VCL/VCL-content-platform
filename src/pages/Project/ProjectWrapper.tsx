import { RouteComponentProps } from "react-router-dom";
import './ProjectV2Wrapper.css';
import ProjectRouter from '../ProjectRouter/ProjectRouter';

interface MatchParams {
    project_id: string;
}
interface ProjectProps extends RouteComponentProps<MatchParams> { }

const ProjectV2Wrapper: React.FC<ProjectProps> = ({ match }) => {

    return (
        <div className="project-content-container">
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
                <ProjectRouter project_id={match.params.project_id}/>
            </div>
        </div>
    );
}

export default ProjectV2Wrapper;
