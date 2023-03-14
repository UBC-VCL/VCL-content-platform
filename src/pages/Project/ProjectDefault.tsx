import React, { useEffect, useState } from 'react';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { TEXT } from '@statics'
import { callGetProjectByNameAPI, ProjectResponse } from '@services/adapters/projectAdapter';
import { useLocation } from 'react-router-dom';
import TitleCard from '@components/TitleCard/TitleCard';
import './ProjectDefault.css'
import "./Project.css";
import COLORS from '@statics/colors';
import VerticalSpacer from '@components/VerticalSpacer/VerticalSpacer';

interface ProjectProps {
    project : Project,
}

const ProjectDefault: React.FC<ProjectProps> = (props) => {
    // response {data: ..., message: ...}
    const [response, setResponse] = useState<ProjectResponse>(
        {
            message: "",
            data: {
                _id: '1', // add to temporarily resolve the bug, delete later,
                name: "Correlation",
                description: "This is a test Correlation project created for testing purposes to test this test project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eius unde beatae officiis porro sunt quaerat vel voluptas provident tempore omnis velit blanditiis natus facere illum. Earum quidem ad odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nisi necessitatibus voluptatem. Voluptate sunt at illum perferendis reiciendis iste minima quis exercitationem amet quam, iure quae consequuntur inventore veritatis ipsa itaque dolore ab ullam commodi praesentium error. Repellendus debitis exercitationem reiciendis impedit, fugit reprehenderit maxime enim laudantium. Non commodi magni aliquid quia. Facere voluptatibus totam reprehenderit fugiat sunt, aut doloribus, inventore fugit obcaecati excepturi sed eveniet est saepe sapiente tempora. Non adipisci voluptatibus quidem ipsa minima repellendus nemo fuga recusandae repellat atque dolorum, facere error enim eligendi quisquam reprehenderit architecto saepe reiciendis, quod quibusdam, nihil libero quia tenetur ipsam. Deleniti?",
                members: [],
                isActive: true,
            },
        }
    );

    const [error, setError] = useState<boolean>(false);

    // run each time window.location changes
    // const location = useLocation();
    // useEffect(() => {
    //     // fetch project details from backend
    //     const fetchProject = async () => {
    //         const [data, err] = await callGetProjectByNameAPI(props.project.name);
    //         setResponse(data);
    //         setError(err);
    //     }
    //     fetchProject();
    // }, [location.pathname])

    // if (error) return (
    //     <h2>Hmm...couldn't find this project on the server.</h2>
    // )

    return (
        <div className='main'>
            <div className='description-container'>
                <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.PROJECT_DESCRIPTION} /> 
                {/* make a project description component */}
                
                <VerticalSpacer height={25} />
                
                <TitleCard 
                    number='01' 
                    title={props.project.name} 
                    textColor='white'
                    color='lightBlue'
                />
                <p style={{ "color": COLORS.lightText }}>{response.data?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eius unde beatae officiis porro sunt quaerat vel voluptas provident tempore omnis velit blanditiis natus facere illum. Earum quidem ad odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nisi necessitatibus voluptatem. Voluptate sunt at illum perferendis reiciendis iste minima quis exercitationem amet quam, iure quae consequuntur inventore veritatis ipsa itaque dolore ab ullam commodi praesentium error. Repellendus debitis exercitationem reiciendis impedit, fugit reprehenderit maxime enim laudantium. Non commodi magni aliquid quia. Facere voluptatibus totam reprehenderit fugiat sunt, aut doloribus, inventore fugit obcaecati excepturi sed eveniet est saepe sapiente tempora. Non adipisci voluptatibus quidem ipsa minima repellendus nemo fuga recusandae repellat atque dolorum, facere error enim eligendi quisquam reprehenderit architecto saepe reiciendis, quod quibusdam, nihil libero quia tenetur ipsam. Deleniti?</p>
            </div>

            {/* todo gallery component */}
            <div className='gallery-container'>
                <p style={{ "color": COLORS.white }}>todo gallery</p>
            </div>

            <VerticalSpacer height={20} />

            <div className='qa-container'>
                <TitleCard
                    number='03'
                    title='Q&A'
                    textColor='mediumBlue'
                    color='lightBlue'
                />

                {/* currently hardcoded qa, todo fetch from backend (need to update project model to achieve this) */}
                <p style={{ "color": COLORS.darkBlue }} className='text'><i>To rigorously compare visualizations we need measures for how well they enable a viewer to understand the structure of the underlying data – which is why we measure the accuracy and perception with which viewers perceive correlation.</i></p>
    
                <VerticalSpacer height={20} />
    
                <h3 style={{ "color": COLORS.darkBlue }}>What methods are used to derive the measures?</h3>
                <p style={{ "color": COLORS.darkBlue }}>We use two classic methods from psychophysics to derive our measures – discrimination tasks using the staircase method to measure precision, and a magnitude estimation task to measure accuracy. Performance in both respects is regular and well described by Weber and Fechner laws –  a linear relationship for discrimination and a logarithmic curve for estimation – regardless of which visual variables are chosen to represent the data.</p>
    
    
                <VerticalSpacer height={20} />
    
                <h3 style={{ "color": COLORS.darkBlue }}>What are we currently studying?</h3>
                <p style={{ "color": COLORS.darkBlue }}>Our working theory for these results is based on participants using the information entropy of the visualization to make their judgements. Currently we’re studying how different gamma levels impact the perception of correlation in black and white luminance strip plots, and evaluating the effects of mixed populations in scatter plots.</p>
    
            </div>

        </div>
    )
};

export default ProjectDefault;
