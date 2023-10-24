
import ProjectV2Default from "@pages/ProjectV2/Pages/ProjectV2Default";
import { RouteComponentProps, Switch, Route } from "react-router-dom";
import ProjectV2Join from "./Pages/ProjectV2Join";
import './ProjectV2Wrapper.css'

interface MatchParams {
    project_id: string;
}
interface ProjectProps extends RouteComponentProps<MatchParams> { }

const ProjectV2Wrapper: React.FC<ProjectProps> = ({ match }) => {

    console.log(match.params.project_id);

    return (
        <div className="project-content-container" style={{ margin: '6rem', height: 'fit-content' }}>
            <div id="table-contents">

            </div>
            <div className='project-router-'>
                <Switch>
                    <Route exact path={`${match.url}`}
                        component={ProjectV2Default}
                    />
                    <Route exact path={`${match.url}/join`}
                        component={ProjectV2Join}
                    />
                    <Route exact path={`${match.url}/team`} />
                    <Route exact path={`${match.url}/resources`} />
                    <Route exact path={`${match.url}/publications`} />
                </Switch>
            </div>
        </div>
    );
}

export default ProjectV2Wrapper;