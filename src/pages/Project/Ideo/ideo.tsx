import React from 'react';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { TEXT } from '@statics'
import img from '../../../statics/images/ideo/ideo1.jpeg';

interface ProjectProps {
    project : Project,
}

const Ideo: React.FC<ProjectProps> = (props) => {
    return (
        <div style={{'textAlign': 'left'}}>
            <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.PROJECT_DESCRIPTION} /> 
            <br />
            <h1>{props.project.name}</h1>
            <br />
            <p>Implicit cognition can be described as cognition that is beyond our conscious control. It can include a variety of different types of cognition: learning, memory, social, emotion, and many more. Given the unconscious nature of this area of study, there are no “direct” ways of studying implicit cognition. The Ideo project uses ideomotor effects to explore the inner-workings of implicit cognition.
            </p>
            <br /> 
            <p>
            Ideomotor effects are actions that are not perceived as intentional, but seem to emerge with no identifiable source; often associated with a sense of involuntariness. They are unconscious movements that happen in response to knowledge or information that you may have come across in the past. A few applications of this ideomotor effect are the ouija board and the hand-held pendulum, which Gachou et al. (2012) and Olson et al. (2017) have explored.
            </p>
            <br />
            <p>This project is currently conducting two studies to explore implicit cognition and ideomotor effects: Ouija and the Swan Protocol. The goal of this project is to test if a device based on the use of ideomotor effects can bypass explicit cognition and access implicit cognition.
            </p>
            <br />
            <h2>Ouija</h2>
            <br />
            <div style={{'textAlign': 'center'}}>
                <img src={img}/>
            </div>
            <br /> 
            <p>The Ouija board is used as a divination technique to find answers to questions. This is done by putting your hands on the planchette, asking the board a question, then letting the planchette move to the letters/words on the board.
            </p>
            <br /> 
            <p>Who is really behind the movements of the planchette? Can this phenomenon be explained by psychology?
            </p>
            <br />
            <p>This can be explained by ideomotor effects. In this study we compare the differences between conscious and unconscious knowledge. Using the ouija board as a medium, we investigate whether the unconscious mind knows more than the conscious mind. By asking questions to participants and measuring accuracies across experimental modes, a deeper understanding of unconscious knowledge can be achieved.</p>
            <br />
            <h2>Swan Protocol</h2>
            <p>Seeking inspiration from the Ouija sub-project, we found another viable method of accessing unconscious knowledge and are further exploring its potential in studying implicit cognition. The Swan technique, developed by Bob Burns, is a tool to access unconscious knowledge. 
            </p>
            <br />
            <p>It involves the experimenter communicating with the participant's hand as though it is a separate entity. Then, the experimenter observes for any unconscious motor movements the hand might make in response. This makes the hand seem like it has a mind of its own.
            </p>
            <br />
            <p>However, this is not to be confused with hypnosis–there is no hypnosis involved.</p>
            <br />
            <h2>Why this project?</h2>
            <br />
            <p>We are currently recruiting Co-pilots for this project.</p>
            <br />
            <p>The Ideo Project is investigating implicit cognition and whether we can bypass explicit cognition through the use of different devices. If you are interested in getting involved in research and the process that goes behind such a study, this could be the project for you.
            </p>
            <br />
            <h3>What you will learn?:</h3>
            <ul>
                <li>You will get a chance to explore what developing a study looks like (different phases, conditions, methodologies, apparatus etc), and be able to contribute to our newer project.
                </li>
                <li>As a part of the Ideo project, you will also get to learn valuable hard and soft skills that come with being part of a research study team:
                    <ul>
                        <li>Proficiency in running participants; collecting and maintaining data records.</li>
                        <li>Technical skills including data analysis and interpretation using softwares such as MS Excel [and statistical tools..]</li>
                        <li>An opportunity to enhance your research review, presentation, leadership, active communication and listening skills.
                        </li>
                    </ul>
                </li>
                <li>You will have the opportunity to experience lab culture, and work alongside fellow researchers and directed studies students.
                </li>
            </ul>
            <br />
            <h3>Requirements</h3>
            <ul>
                <li>This research project is ideal for students interested in understanding what type of thoughts can be expressed through ideomotor actions (e.g. implicit memory, implicit perception).
                </li>
                <li>Data analysis, research experience, programming skills (Python) are an asset but not required.
                </li>
            </ul>
            <br />
            <p>If you are interested in becoming part of the team, please go here and follow the steps as directed: <a href='https://viscoglab-psych.sites.olt.ubc.ca/get-involved/vcl-co-pilots/'>https://viscoglab-psych.sites.olt.ubc.ca/get-involved/vcl-co-pilots/</a></p>
        </div>
    )
};

export default Ideo;
