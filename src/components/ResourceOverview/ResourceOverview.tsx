import './ResourceOverview.css'
import RESOURCES from '@statics/resources';

const ResourceOverview = () => {
    const navigateToProject = (projectName: String) => {
        // window.location.pathname = `${RESOURCES.PROJECT.BASE2}/${projectName}`

    }
    return (
        <div>
            <button onClick={() => navigateToProject(RESOURCES.name)}
                className="project-button">{projeRESOURCESct.name}</button>
        </div>
    )
};

export default ResourceOverview;