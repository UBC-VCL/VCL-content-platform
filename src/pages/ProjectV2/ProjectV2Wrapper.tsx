import ProjectV2Default from "@pages/ProjectV2/Pages/ProjectV2Default";
import { RouteComponentProps, Switch, Route, BrowserRouter } from "react-router-dom";
import ProjectV2Join from "./Pages/ProjectV2Join";
import './ProjectV2Wrapper.css'

interface MatchParams {
    project_id: string;
}
interface ProjectProps extends RouteComponentProps<MatchParams> { }

const ProjectV2Wrapper: React.FC<ProjectProps> = ({ match }) => {

    const currentProjectURL = match.url!;

    return (
        <div className="project-content-container" style={{ margin: '10rem' }}>
            <div id="table-contents"
                onClick={() => {
                    console.log(currentProjectURL)
                    console.log(`${currentProjectURL}/join`)
                }}
            >
                <a href={`${currentProjectURL}/join`}> here</a>

            </div>
            <div className='project-router-div'>
                <BrowserRouter>

                    <Route exact path={`${currentProjectURL}/join`}
                        component={ProjectV2Join}
                    />
                    <Route exact path={`${currentProjectURL}/home`}
                        component={ProjectV2Default}
                    />
                    <Route exact path={`${currentProjectURL}/team`} />
                    <Route exact path={`${currentProjectURL}/resources`} />
                    <Route exact path={`${currentProjectURL}/publications`} />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default ProjectV2Wrapper;