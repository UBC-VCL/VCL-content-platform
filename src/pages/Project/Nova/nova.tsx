import React from 'react';
import '../Project.css';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { TEXT } from '@statics'
import img from '../../../statics/images/nova/nova1.png';

interface ProjectProps {
    project : Project,
}

const Nova: React.FC<ProjectProps> = (props) => {
    return (
        <div className='project-individual-content'>
            <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.PROJECT_DESCRIPTION} /> 
            <br />
            <h1>{props.project.name}</h1>
            <br />
            <p>The NOVA project studies the effects of inattentional blindness and cueing within a single paradigm. Inattentional blindness is the phenomenon that occurs when something is plainly in the field of view, yet it is not seen by the viewer. This occurs when the viewer’s attention is being intensely focused on something else, since people have a limited capacity for attention and can only focus on so much at one time. A famous example of this is the “Gorilla video”, ​​where the participant is told to count the number of basketball tosses, and as a result, he fails to see the gorilla walk through in plain sight.
            </p>
            <br /> 
            <div style={{'textAlign': 'center'}}>
                <img src={img}/>
            </div>
            <br /> 
            <p>However, once he is informed about the gorilla, he is able to see it clearly the next time the video is watched, so the video can only be used once to demonstrate inattentional blindness. The NOVA project, on the other hand, offers a way to robustly test this phenomenon.
            </p>
            <br /> 
            <p>The other aspect of the NOVA project is cueing. Cueing occurs when the viewers' attention is intentionally re-focused on another object without them realizing that this cue happened. For example, if the viewer sees an arrow pointing to an object, they will likely shift their attention to that object even if they did not consciously perceive the arrow.
            </p>

            <p>Currently, in our project, we’re looking at the differences in cueing effects when the viewers do not consciously perceive the cue versus when they do. The results from this project will hopefully help us understand more about the role of consciousness in visual perception.</p>

            <br />

            <h3>Relevant Articles</h3>
            <a href='Rensink, R. A. (2005). Robust inattentional blindness. Journal of Vision, 5(8), 790'>Rensink, R. A. (2005). Robust inattentional blindness. Journal of Vision, 5(8), 790</a>
        </div>
    )
};

export default Nova;
