import './ProjectJoinV2.css';
import { TEXT, ROUTES } from "@statics";
import PROJECT_TEXT, { PROJECT } from "@statics/projectsV2";
import visualAttention from '@statics/images/JoinTeam/visualAttention.png';
import compModel from '@statics/images/JoinTeam/compModel.png';
import appResearch from '@statics/images/JoinTeam/appliedResearch.png';
import dataVis from '@statics/images/JoinTeam/dataVis.png';
import js from '@statics/images/JoinTeam/JS.png';
import ProjectGallery2 from '@components/ProjectGallery2/ProjectGallery2';
import browser from "@statics/images/JoinTeam/browser.png"
import email from '@statics/images/JoinTeam/email.png';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useHistory } from 'react-router-dom';
import { Margin } from '@mui/icons-material';

interface PropsOBJ {
    project_id: string;
}

const ProjectV2Join = (props: PropsOBJ) => {
    const { project_id } = props;

    const history = useHistory();

    const currentProject: PROJECT | undefined = PROJECT_TEXT.find(
        (element) => element.project_title.toLowerCase() == project_id.toLowerCase()
    );

    return (
        <div >
            

            <div className='project-join-whatWeDo-section'>
                <h2>01</h2>
                <h1>What We Do</h1>
                {
                    currentProject?.joinTeam.whatWeDo.map((item, index) => {

                        return (<p key={index}>{item}</p>)
                    })
                }
            </div>
            <div className='project-join-carousel-items'>
                <p>You might like this if you enojoy...</p>
                <div className='project-item-carousel-items' style={{ margin: 'auto', width: 'fit-content', maxWidth: '1000px', marginTop: '2rem' }}>
                    {
                        [['JavaScript', js], ['Applied Research', appResearch], ['Data Visualization', dataVis], ['Limits of visual attention', visualAttention], ['Computational Modeling', compModel]].map((item, index) => {
                            return (
                                <div key={index}>
                                    <img src={item[1]} style={{ height: '5rem', margin: 'auto 2rem', marginTop: '1rem' }} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div
                className='project-join-pastProjectSection-section'
            >
                <h2>02</h2>
                <h1>Past Projects</h1>
                {
                    currentProject?.pastProjects?.map((item, index) => {

                        return (
                            <div key={index} style={{ margin: '1rem auto', width: '70%', maxWidth: '1000px', backgroundColor: 'white', padding: '2rem' }}>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: '1rem', color: '#1C426D' }}>{item.title}</h3>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div
                className='project-join-testimony-section'
            >
                <ProjectGallery2 data={currentProject!.testimonials!} title='What our team members say...' titleNum='03' darkmode={true} />
            </div>
            <div
                className='project-join-applicationInstructions-section'
            >
                <h2>04</h2>
                <h1>Application Instructions</h1>
                <div style={{ backgroundColor: 'white', width: '30%', padding: '2rem', margin: 'auto', marginTop: '3rem', minWidth:'300px',maxWidth:'500px' }}>
                    <div className="app-instructions-title-section" style={{ display: 'flex', width: 'fit-content' }}>
                        <img src={browser} />
                        <h1 style={{ marginLeft: '1rem' }}>01</h1>
                    </div>
                    <div className="app-instructions-content-section">
                        <h2 style={{ marginBottom: '1rem' }}>Head over to the Orientation page to see if our lab philosophy matches yours</h2>
                        <a href={`${ROUTES.HOME}#home-about-values-div`}>
                        <div className='project-join-joinInstructions-button' >
                            Go
                        </div>
                        </a>
                    </div>
                </div><div style={{ backgroundColor: 'white', width: '30%', padding: '2rem', margin: 'auto', marginTop: '3rem', minWidth:'300px', maxWidth:'500px' }}>
                    <div className="app-instructions-title-section" style={{ display: 'flex', width: 'fit-content' }}>
                        <img src={email} />
                        <h1 style={{ marginLeft: '1rem' }}>02</h1>
                    </div>
                    <div className="app-instructions-content-section">
                        <h2 style={{ marginBottom: '1rem' }}>Mail vclmanager@gmail.com with “VCL Co-Pilots” as subject, and include:</h2>
                        <ul>
                            <li>
                                &nbsp;  - Resume/CV
                            </li>
                            <li>
                                &nbsp;  - List of relevant courses you have taken so far
                            </li>
                            <li>
                                &nbsp;  - Research projects you’re interested in and why
                            </li>
                        </ul>
                        <a href={`mailto:${TEXT.LAB_INFO.EMAIL}`}>
                            <div className='project-join-joinInstructions-button'>
                                Go
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-default-back-to-top-container" style={{paddingTop:'1rem', backgroundColor:'#FBFBFB'}}>
                <div
                    className="project-default-back-to-top"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <div className="project-default-back-to-top-arrow" style={{backgroundColor:'#FBFBFB'}}>
                        <MdKeyboardDoubleArrowUp size={45} />
                    </div>
                    <h1 className="project-default-back-to-top-title">Back to Top</h1>
                </div>
            </div>
        </div>
    )
};

export default ProjectV2Join;   