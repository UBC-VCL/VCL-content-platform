import './ProjectV2Publications.css';
import PROJECT_TEXT, { PROJECT } from "@statics/projectsV2";
import { useHistory } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";

interface PropOBJ {
    project_id: string;
}

const ProjectV2Publications = (props: PropOBJ) => {

    const { project_id } = props;

    const location = useHistory();

    const currentProject: PROJECT | undefined = PROJECT_TEXT.find(
        (element) => element.project_title.toLowerCase() == project_id.toLowerCase()
    );

    return (
        <div className="project-publication-content-container">
            <div className="project-publications-title-container">
                <h1>
                    Publications
                </h1>
            </div>
            <div className='project-publications-items-container'>
                {
                    (currentProject?.publications?.length != 0) ?
                        currentProject?.publications!.map((item, index) => {
                            return (
                                <div key={index} style={{width:'80%', height:'fit-content', marginTop:'1.5rem', marginLeft:'auto', marginRight:'auto', backgroundColor:'#fafafa', padding:'1rem', maxWidth:'1000px'}}>
                                    <h1 onClick={() => window.open(item.link)}>{item.name} <FaExternalLinkAlt style={{marginLeft:'0.5rem'}}/></h1>
                                    <p>
                                        {item.citation}
                                    </p>
                                </div>
                            );
                        })
                        :
                        <></>

                }
            </div>
        </div>
    )
};

export default ProjectV2Publications;