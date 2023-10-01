import React, { Component } from 'react';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { TEXT, ROUTES } from '@statics'
import "./ProjectJoin.css";
import VerticalSpacer from '@components/VerticalSpacer/VerticalSpacer';

import research from '../.././statics/images/JoinTeam/ResearchImage.png';
import js from '../.././statics/images/JoinTeam/JS.png';
import appResearch from '../.././statics/images/JoinTeam/appliedResearch.png';
import dataViz from '../.././statics/images/JoinTeam/dataVis.png';
import visualAttention from '../.././statics/images/JoinTeam/visualAttention.png';
import compModel from '../.././statics/images/JoinTeam/compModel.png';
import browser from '../.././statics/images/JoinTeam/browser.png';
import email from '../.././statics/images/JoinTeam/email.png';
import ProjectGallery from '@components/ProjectGallery/ProjectGallery';
import blankPPic from "../../components/ProjectGallery/media/blank-profile-picture.webp"
import { SlideShowOBJ } from './types';
import { useHistory } from 'react-router-dom';

interface ProjectProps {
    project: Project,
}

const dummyList: SlideShowOBJ[] = [
    {
        img: blankPPic,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        cardType: 'testimony',
        name: 'Sally',
        position: 'Project Correlation, Researcher'
    },
    {
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        cardType: 'no-photo-test',
        name: 'Sally',
        position: 'Project Correlation, Researcher'
    }
]

const novaList: SlideShowOBJ[] = [
    {

        description: "I joined NOVA midway through my fourth year, and by that point, it was easy to feel like I was playing catch up with gaining research experience. Fortunately for me, my first term as a Co-Pilot showed me just how irrational those worries were with how seamlessly my training went and how rewarding the process of learning new skills was. My teammates were welcoming and my project leader was patient and communicative with me throughout the training process. By the time the next term had come around, I felt so at home that I’ve continued working here for another full year.",
        cardType: 'testimony',
        name: 'Tsubasa',
        position: 'Project Lead'
    },
]

const shivaList: SlideShowOBJ[] = [
    {
        img: blankPPic,
        description: "When I entered the team as a first-year, I had limited knowledge about the research process, how it is conducted and what it means to be a responsible researcher. I joined the lab in hopes of getting exposure to research environments and being able to apply theories learned in class to the real world. Not only did SHIVA satisfy my interests, but it encouraged me to think critically about the research that I am producing. I learned new applications in R, discussed ideas with other researchers, and developed a better understanding of research. I highly recommend anyone to apply and not be apprehensive by a lack of experience",
        cardType: 'testimony',
        name: 'Danny',

    },
    {
        img: blankPPic,
        description: "I joined the SHIVA team because I was looking for a topic that I would be interested in for my COGS 402. My experience has been extremely positive, the work environment is productive and friendly. Mistakes can happen, but they’re resolved kindly and effectively. I have learned a lot about the research process, from running participants to detailed data analysis with R, as well as soft skills such as communicating effectively.",
        cardType: 'testimony',
        name: 'Stephen',
    },
]


const ProjectJoin: React.FC<ProjectProps> = (props) => {

    // Built in react-router-dom hook that allows access to the user's browser history
    const history = useHistory()

    return (
        <div className='join-our-team-homepage'>
        <div className='project-breadcrumbs'>
            <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.JOIN_OUR_TEAM}/> 
        </div>
        <section className='full-bleed'>
        <div className='intro-to-join-our-team'>
            <div className='left-side'>
                <p style={{fontStyle:"normal", color:"#8EA9D2"}}>01</p>
                <h1>{TEXT.PROJECT_JOIN.HOME_SECTION.TITLE}</h1>
                <hr className='line-below-joining-team'></hr>
                <h4>{TEXT.PROJECT_JOIN.HOME_SECTION.INTEREST}</h4>
                <p className='co-pilot-description'>{TEXT.PROJECT_JOIN.HOME_SECTION.COPILOT_DESCRIPTION}</p>
                <p className='co-pilot-description'>{TEXT.PROJECT_JOIN.HOME_SECTION.RESEARCH_BACKGROUND}</p>
                <div className='btn-application-instructions'>
                <a href={ROUTES.GET_INVOLVED} style={{display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff", textDecoration:"none"}}>
                    <p >{TEXT.PROJECT_JOIN.HOME_SECTION.APPPLICATION_INSTRUCTION}</p>
                    </a>
                </div>
            </div>
                    {/* <div className='divider'></div> */}
                    <div className='right-side'>
                        <img className='research-img' src={research} alt="research" />
                    </div>
                </div>
            </section>
            <section className='full-bleed2'>
                <div className='what-we-do'>
                    <p style={{ color: "#B2C9EC" }}>02</p>
                    <h2>{TEXT.PROJECT_JOIN.WHAT_WE_DO.TITLE}</h2>
                    {
                        props.project.joinTeam?.whatWeDo ? (
                            <div>
                                {props.project.joinTeam?.whatWeDo.map(desc => (
                                    <p className="what-we-do-desc">{desc}</p>
                                ))}
                            </div>
                        )
                            :
                            <div>
                                <p>{TEXT.PROJECT_JOIN.WHAT_WE_DO.DESCRIPTION_1}</p>
                                <VerticalSpacer height={30} />
                                <p>{TEXT.PROJECT_JOIN.WHAT_WE_DO.DESCRIPTION_2}</p>
                            </div>
                    }
                    {/* <img className='vector5' src="/join_the_team/what-we-do-vector.png" alt="vector5"/> */}
                    {/* <img className='vector6' src="/join_the_team/what-we-do-vector1.png" alt="vector5"/> */}
                    <div style={{ paddingBottom: "8%" }}></div>
                </div>
            </section >
            <section className='full-bleed3'>
                <div className="you-might-like">
                    <p>{TEXT.PROJECT_JOIN.YOU_MIGHT_LIKE.TITLE}</p>
                    <div className='row'>
                        <div className='column'>
                            <img src={js} style={{ width: "65%", marginTop: "-11%", marginLeft: "100%" }} />
                        </div>
                        <div className='column'>
                            <img src={appResearch} style={{ width: "90%", marginTop: "-6%", marginLeft: "65%" }} />
                        </div>
                        <div className='column'>
                            <img src={dataViz} style={{ width: "90%", marginTop: "-2%", marginLeft: "50%" }} />
                        </div>
                        <div className='column'>
                            <img src={visualAttention} style={{ width: "115%", marginTop: "-5%", marginLeft: "25%" }} />
                        </div>
                        <div className='column'>
                            <img src={compModel} style={{ width: "115%", marginTop: "-11%", marginLeft: "27%" }} />
                        </div>
                    </div>
                </div>
            </section>
            {props.project.name !== 'SHIVA' && props.project.name !== 'NOVA'&&(
            <section className='full-bleed4'>
                <div className='past-positions-and-projects' style={{ paddingBottom: "2%", paddingTop: "3%" }}>
                    <p style={{ paddingTop: "3%" }}>03</p>
                    <h2>{TEXT.PROJECT_JOIN.PAST_POSITIONS_AND_PROJECTS.TITLE}</h2>
                    <div className='project-join-card'>
                        <h5>{TEXT.PROJECT_JOIN.PAST_POSITIONS_AND_PROJECTS.VCL_WEB_APP.TITLE}</h5>
                        <p>{TEXT.PROJECT_JOIN.PAST_POSITIONS_AND_PROJECTS.VCL_WEB_APP.DESCRIPTION}</p>
                    </div>
                    <div className='project-join-card'>
                        <h5>{TEXT.PROJECT_JOIN.PAST_POSITIONS_AND_PROJECTS.PROJECT1.TITLE}</h5>
                        <p>{TEXT.PROJECT_JOIN.PAST_POSITIONS_AND_PROJECTS.PROJECT1.DESCRIPTION}</p>
                    </div>
                    <div className='project-join-card'>
                        <h5>{TEXT.PROJECT_JOIN.PAST_POSITIONS_AND_PROJECTS.PROJECT2.TITLE}</h5>
                        <p>{TEXT.PROJECT_JOIN.PAST_POSITIONS_AND_PROJECTS.PROJECT2.DESCRIPTION}</p>
                    </div>
                </div>
            </section>
            )}
            {props.project.name == 'SHIVA' &&(
                <section className='full-bleed4'>
                    <div className='past-positions-and-projects' style={{ paddingBottom: "2%", paddingTop: "3%" }}>
                        <p style={{ paddingTop: "3%" }}>03</p>
                        <h2>{TEXT.PROJECT_JOIN.PAST_POSITIONS_AND_PROJECTS.TITLE}</h2>
                        <div className='project-join-card'>
                            <h5>{'Condition 54 No-Pretask'}</h5>
                            <p>{'This condition was created to continue the experiment through an online environment but without the usual Navon pretask. ' +
                                'Participants from both Japan and Canada partook in the investigation. Through the experiment, ' +
                                'it was revealed that there were little differences between the average reaction times in Japanese and Canadian participants. ' +
                                'However, participants found it more difficult to find long-line stimuli amongst short-line distractors than to locate short lines amongst long as the number of distractors increased. '}</p>
                        </div>
                    </div>
                </section>
            )}
            {props.project.name == 'NOVA' &&(
                <section className='full-bleed4'>
                    <div className='past-positions-and-projects' style={{ paddingBottom: "2%", paddingTop: "3%" }}>
                        <p style={{ paddingTop: "3%" }}>03</p>
                        <h2>{TEXT.PROJECT_JOIN.PAST_POSITIONS_AND_PROJECTS.TITLE}</h2>
                        <div className='project-join-card'>
                            <h5>{'Cueing Using Colour and Isoluminescence: Differences in Blindness Rates and Cueing Effects Between Seen and Unseen Cues'}</h5>
                            <p>{'Author: Ankita Guha Patra'}</p>
                            <p>{'Sponsoring Research Assistant Tiffany Wu'}</p>
                            <p>{'Supervisor: Dr. Ronald Rensink'}</p>
                        </div>
                        <div className='project-join-card'>
                            <h5>{'Does Consciousness Matter? Noticeable Edits on Overlearned Cues and the Effect on Blindness Rates and Cueing Effects Between Seen and Unseen Cues'}</h5>
                            <p>{'Author: Isha Verma'}</p>
                            <p>{'Sponsoring Research Assistant: Ying Zeng'}</p>
                            <p>{'Supervisor: Dr. Ronald Rensink'}</p>
                        </div>
                    </div>
                </section>
            )}
            {/* <section className='full-bleed5' style={{marginTop:"10%"}}>
        <div className='what-our-team-member-say'>
            <p style={{paddingTop: "7%"}}>04</p>
            <h2>{TEXT.PROJECT_JOIN.MEMBER_TESTIMONIALS.TITLE}</h2>
            <h1 style={{textAlign:"center", color:"white", paddingBottom:"20%"}}>Carousel placeholder</h1>
            
        </div>
        
        </section> */}
            {props.project.name == 'SHIVA' && (
                <ProjectGallery displayNumber={4} compTitle={'Testimony'} itemArray={shivaList} />
            )}
            {props.project.name == 'NOVA' && (
                <ProjectGallery displayNumber={4} compTitle={'Testimony'} itemArray={novaList} />
            )}
            {props.project.name !== 'SHIVA' && props.project.name !=='NOVA'&&(
            <ProjectGallery displayNumber={4} compTitle={'Testimony'} itemArray={dummyList} />
                )}
            <section id='application-instructions-div' className='full-bleed6'>
                <div className='Application-Instructions'>
                    <p style={{ paddingTop: "7%", textAlign: "center", color: "#B2C9EC" }}>05</p>
                    <h2 style={{ textAlign: "center", color: "#5387A5", marginBottom: "5%" }}>{TEXT.PROJECT_JOIN.APPLICATION_INSTRUCTIONS.TITLE}</h2>
                    <div className='app-row'>
                        <div className='rectangle-card'>
                            <div className='top-card-row'>
                                <img src={browser} alt='browser' />
                                <h1 style={{ marginLeft: "20%", color: "rgba(28, 66, 109, 0.3)", fontSize: "51.0371px" }}>01</h1>
                            </div>
                            <VerticalSpacer height={90} />
                            <p style={{ fontWeight: "800" }}>{TEXT.PROJECT_JOIN.APPLICATION_INSTRUCTIONS.STEP1.TITLE}</p>
                            <p style={{ marginBottom: "6%", paddingRight: "70px" }}>{TEXT.PROJECT_JOIN.APPLICATION_INSTRUCTIONS.STEP1.TEXT}</p>
                            <div
                                onClick={() => {
                                    // used to redirect the user and also send information with that redirect to the desired URL
                                    history.push(ROUTES.HOME, { sourcePage: 'project-join-home-redirect-from-goButton' })
                                }}
                                style={{ marginLeft: "10%", backgroundColor: "#1C426D", marginRight: "60%", cursor: 'pointer' }}>
                                <a style={{ color: "white", textDecoration: "none", userSelect: 'none' }}>
                                    Home Page
                                </a>
                            </div>
                            <VerticalSpacer height={150} />
                        </div>
                        <div className='rectangle-card'>
                            <div className='top-card-row'>
                                <img src={email} alt='email' />
                                <h1 style={{ marginLeft: "20%", color: "rgba(28, 66, 109, 0.3)", fontSize: "51.0371px" }}>02</h1>
                            </div>
                            <VerticalSpacer height={90} />
                            <p style={{ fontWeight: "800" }}>{TEXT.PROJECT_JOIN.APPLICATION_INSTRUCTIONS.STEP2.TITLE}</p>
                            <p style={{ marginBottom: "2%", paddingRight: "70px" }}>{TEXT.PROJECT_JOIN.APPLICATION_INSTRUCTIONS.STEP2.TEXT}</p>
                            <ul style={{ marginLeft: "70px", textAlign: "left", fontSize: "small" }}>
                                <li>{TEXT.PROJECT_JOIN.APPLICATION_INSTRUCTIONS.STEP2.BULLET_POINTS.BULLET_1}</li>
                                <li>{TEXT.PROJECT_JOIN.APPLICATION_INSTRUCTIONS.STEP2.BULLET_POINTS.BULLET_2}</li>
                                <li>{TEXT.PROJECT_JOIN.APPLICATION_INSTRUCTIONS.STEP2.BULLET_POINTS.BULLET_3}</li>
                            </ul>
                            <div
                                style={{ marginLeft: "10%", backgroundColor: "#1C426D", marginRight: "60%", marginTop: "6%", cursor: "pointer" }}
                                onClick={() => {
                                    window.location.href = `mailto:${TEXT.LAB_INFO.EMAIL}`
                                }}
                            >
                                <a style={{ color: "white", textDecoration: "none", userSelect: 'none', width: "100%", height: "100%" }}
                                >
                                    Go
                                </a>
                            </div>
                            <VerticalSpacer height={150} />
                        </div>
                    </div>
                    <VerticalSpacer height={100} />
                    <a href='#' style={{ color: "#60779A", textDecoration: "none" }}>Back To Top</a>
                    <hr style={{ borderTop: "1px solid #60779A", marginLeft: "45%", width: "10%" }} />
                    <div style={{ paddingBottom: "8%", marginBottom: "-6%" }}></div>
                </div>
            </section>
        </div>
    )
};

export default ProjectJoin;