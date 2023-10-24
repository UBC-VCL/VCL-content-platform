import './ProjectV2Wrapper.css'
import ProjectV2Default from "@pages/ProjectV2/Pages/ProjectV2Default";
import { Switch, Route } from "react-router-dom";
import ProjectV2Join from "./Pages/ProjectV2Join";

interface PropsOBJ {
    url: string;
}

const ProjectV2Router = (props: PropsOBJ) => {

    const { url } = props;
    console.log(url);

    return (
        <Switch>
            <Route exact path={`/${url}`}
                    // render={() =>
                    //     <ProjectV2Default />
                    // }
                component={ProjectV2Default}
            />
            <Route exact path={`/${url}/join`}
                render={() =>
                    <ProjectV2Join />
                }
            />
        </Switch>
    )
}

export default ProjectV2Router;