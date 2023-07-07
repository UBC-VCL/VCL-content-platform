 import './ProjectDescription.css'

const ProjectDescription = ({paragraphOne, paragraphTwo, emphasizedStatement}: {paragraphOne: string, paragraphTwo: string, emphasizedStatement: string}) => {
    return (
        <div className="project-description-container">
            <div className='description-paragraph-container'>
                <div className='project-description-paragraph-one'>
                    {paragraphOne}
                </div>
                <div className='project-description-paragraph-two'>
                    {paragraphTwo}
                </div>
            </div>
            <div className="emphasized-statement">
                {emphasizedStatement}
            </div>
        </div>
    )
}

export default ProjectDescription;