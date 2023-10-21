import ProjectDefault from "@pages/Project/ProjectDefault";
import { BrowserRouter, Route, RouteComponentProps } from "react-router-dom";


interface MatchParams {
    project_id: string;
  }
interface ProjectProps extends RouteComponentProps<MatchParams> {}

const ProjectV2Wrapper = (props:ProjectProps) => {

    console.log(props);

    // FIgure out how you would want to handle passing in information to different subpages

    return (
        <div>
            <div id="table-contents">

            </div>
            <BrowserRouter>
                <Route path={`/${props.match.url}`} 
                    // render={() => <ProjectDefault />}
                />
            </BrowserRouter>
        </div>
    );
}

export default ProjectV2Wrapper;