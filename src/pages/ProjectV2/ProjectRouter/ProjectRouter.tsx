import "./ProjectRouter.css";
import { RouteComponentProps, Route, BrowserRouter } from "react-router-dom";
import ProjectV2Default from "@pages/ProjectV2/Pages/Default/ProjectV2Default";
import ProjectV2Publications from "../Pages/Publications/ProjectV2Publications";
import ProjectV2Resources from "../Pages/Resources/ProjectV2Resources";
import ProjectV2Team from "../Pages/Team/ProjectV2Team";
import ProjectV2Join from "../Pages/Join/ProjectV2Join";

interface PropsOBJ {
	project_id: string;
}

const ProjectRouter = (props: PropsOBJ) => {
	const { project_id } = props;

	return (
		<BrowserRouter>
			{
				//Browser router is better than Switch because it allows for nested routes
				// and allows for site navigation without refreshing the page
			}
			<Route
				exact
				path={`/projectsV2/${project_id}/`}
				// component={ProjectV2Default}
				render={() => {
					return <ProjectV2Default project_id={project_id} />;
				}}
			/>
			<Route
				exact
				path={`/projectsV2/${project_id}/join`}
				render={() => {
					return <ProjectV2Join project_id={project_id} />;
				}}
			/>
			<Route
				exact
				path={`/projectsV2/${project_id}/team`}
				component={ProjectV2Team}
				// render={() => {
				// 	return <ProjectV2Team project={project_id} />;
				// }}
			/>
			<Route
				exact
				path={`/projectsV2/${project_id}/resources`}
				component={ProjectV2Resources}
			/>
			<Route
				exact
				path={`/projectsV2/${project_id}/publications`}
				render={() => {
					return <ProjectV2Publications project_id={project_id} />;
				}}
			/>
		</BrowserRouter>
	);
};

export default ProjectRouter;
