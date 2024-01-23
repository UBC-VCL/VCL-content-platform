import './ProjectV2Join.css';
import { useHistory } from 'react-router-dom';
import { TEXT, ROUTES } from "@statics";


const ProjectV2Join = () => {

    const history = useHistory();

    return(
        <div className='project-join-hero-container'>
            <div className='project-join-hero-content'>
                <div>
                    <h2>
                        01
                    </h2>
                    <h1>
                        {TEXT.PROJECT_JOIN.HOME_SECTION.TITLE}
                    </h1>
                    <p className='project-join-hero-title-underline'> </p>
                </div>
                <h3>
                    {TEXT.PROJECT_JOIN.HOME_SECTION.INTEREST}
                </h3>
                <p>
                    {TEXT.PROJECT_JOIN.HOME_SECTION.COPILOT_DESCRIPTION}
                </p>
                <p>
                    {TEXT.PROJECT_JOIN.HOME_SECTION.RESEARCH_BACKGROUND}
                </p>
                <a href={ROUTES.GET_INVOLVED}>
                    <div className='project-join-app-instructions-button' >
                        {TEXT.PROJECT_JOIN.HOME_SECTION.APPPLICATION_INSTRUCTION}
                    </div>
                </a>
            </div>
        </div>
    )
};

export default ProjectV2Join;   