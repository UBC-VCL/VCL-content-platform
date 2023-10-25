import ProjectV2Default from "@pages/ProjectV2/Pages/ProjectV2Default";
import ProjectV2Publications from "./Pages/ProjectV2Publications";
import ProjectV2Resources from "./Pages/ProjectV2Resources";
import ProjectV2Team from './Pages/ProjectV2Team'
import { RouteComponentProps, Route, BrowserRouter } from "react-router-dom";
import ProjectV2Join from "./Pages/ProjectV2Join";
import './ProjectV2Wrapper.css'

interface MatchParams {
    project_id: string;
}
interface ProjectProps extends RouteComponentProps<MatchParams> { }

const ProjectV2Wrapper: React.FC<ProjectProps> = ({ match }) => {

    // string that is initialized at the very first mount of the site.
    // will be used to determine the current project url
    const currentProjectURL = match.url;

    console.log(`/projectsV2/${match.params.project_id}/join`);

    return (
        <div className="project-content-container" style={{ margin: '10rem' }}>
            <div id="table-contents"
            >
                <div className="single-table-content">
                    <a className="project-content-container-href" href={`${currentProjectURL}`}>Home</a>
                </div>
                <div className="single-table-content">
                    <a className="project-content-container-href" href={`${currentProjectURL}/join`}>Join</a>
                </div>
                <div className="single-table-content">
                    <a className="project-content-container-href" href={`${currentProjectURL}/team`}>Team</a>
                </div>
                <div className="single-table-content">
                    <a className="project-content-container-href" href={`${currentProjectURL}/resources`}>Resources</a>
                </div>
                <div className="single-table-content">
                    <a className="project-content-container-href" href={`${currentProjectURL}/publications`}>Publications</a>
                </div>

            </div>
            <div className='project-router-div'>
                {
                    //Browser router is better than Switch because it allows for nested routes
                    // and allows for site navigation without refreshing the page
                }
                <BrowserRouter>
                    <Route exact path={`${currentProjectURL}`}
                        component={ProjectV2Default}
                    />
                    {
                        // I wonder if its better to do ${currentProjectURL}/resources 
                        // or /projectsV2/${match.params.project_id}/join as the redirecting URL
                    }
                    <Route exact path={`/projectsV2/${match.params.project_id}/join`}
                        component={ProjectV2Join}
                    />
                    <Route exact path={`${currentProjectURL}/team`} 
                    component={ProjectV2Team}/>
                    <Route exact path={`${currentProjectURL}/resources`}
                    component={ProjectV2Resources} />
                    <Route exact path={`${currentProjectURL}/publications`}
                    component={ProjectV2Publications} />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default ProjectV2Wrapper;