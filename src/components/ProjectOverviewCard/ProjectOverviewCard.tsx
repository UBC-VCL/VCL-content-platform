import { ROUTES } from "@statics";
import "./ProjectOverviewCard.css";

const ProjectOverviewCard = ({ project }: any) => {

    const navigateToProject = (projectName: String) => {
        window.location.pathname = `${ROUTES.PROJECT.BASE2}/${projectName}`

    }
    return (
        <div>
            <button onClick={() => navigateToProject(project.name)}
                className="project-button">{project.name}</button>
        </div>
    )
}

export default ProjectOverviewCard;