import React from 'react'
import { RouteComponentProps, Switch, Route } from 'react-router';
import { Project } from '@entities/Project';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import ToggleButton from '@mui/material/ToggleButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ROUTES from '@statics/routes';
import {
    ProjectDefault,
    ProjectJoin,
    ProjectResources,
    ProjectTeam,
    ProjectContact
} from './'
import PROJECT_NAV from '@statics/projectNav'
import ProjectNavbar from '@components/ProjectNavbar'
import "./ProjectWrapper.css"

interface MatchParams {
    project_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
}

const ProjectWrapper: React.FC<ProjectProps> = ({ match }) => {
    const [selected, setSelected] = React.useState(true);
    const expand = selected ? 'expand' : '';

    // const projects = useAppSelector(selectProjects);

    const projects: Project[] = [
        { // dummy projects
            name: "Correlation"
        },
        {
            name: "NOVA"
        }, {
            name: "Perceptual Modes"
        }, {
            name: "SHIVA",
            description: {
                first:
                    `When we say ‘mode of visual perception’ or ‘perceptual mode,’ we refer to the particular way in which a person makes sense of scenes presented before their eyes. In the SHIVA project, we refer to a perceptual mode as something which encompasses a specific group of equations that the brain uses to draw conclusions from information derived by the retina. We think that the brain’s process of choosing this mode could be automatic rather than consciously controlled. Whenever the brain changes its mode of perception, its specific process of drawing conclusions is also changed, and a person will perceive things differently.`,

                second: "Work done in the UBC VCL has revealed the possibility that a person’s visual perceptual mode can be changed. The change is measured by the use of a visual search paradigm called visual search asymmetry. Thus far, it seems that our subjects are not willfully changing their mode of perception, but rather their perceptual mode changes because of specific external factors in their visual environment. Our subjects seem to be unaware of any perceptual mode change occurring, so it is likely a subconscious occurrence. \n\nThe SHIVA project is investigating factors which shift these visual perceptual modes. Some questions we ask are: What range of factors or external stimuli can affect these perceptual modes? To what degree are perceptual modes affected by these factors? Do some factors lose their effect on perceptual modes when certain other factors are present?",
                emp: `The SHIVA project arose from an interest in how culture may have a significant effect on the mode of visual perception a person uses.`
            }
        }, {
            name: "IDEO",
            description: {
                first: "What is the Ouija board? The Ouija board is used as a divination technique to find answers to questions. This is done by putting your hands on the planchette, asking the board a question, then letting the planchette move to the letters/words on the board.",
                second: "This can be explained by ideomotor effects. In this study we compare the differences between conscious and unconscious knowledge. Using the ouija board as a medium, we investigate whether the unconscious mind knows more than the conscious mind. By asking questions to participants and measuring accuracies across experimental modes, a deeper understanding of unconscious knowledge can be achieved.",
                emp: "Who is really behind the movements of the planchette? Can this phenomenon be explained by psychology?"
            },
            qa: [{
                q: "What is implicit cognition?", a: "Implicit cognition can be described as cognition that is beyond our conscious control. It can include a variety of different types of cognition: learning, memory, social, emotion, and many more. Given the unconscious nature of this area of study, there are no “direct” ways of studying implicit cognition. The Ideo project uses ideomotor effects to explore the inner-workings of implicit cognition. Ideomotor effects are actions that are not perceived as intentional, but seem to emerge with no identifiable source; often associated with a sense of involuntariness. They are unconscious movements that happen in response to knowledge or information that you may have come across in the past. A few applications of this ideomotor effect are the ouija board and the hand-held pendulum, which Gachou et al. (2012) and Olson et al. (2017) have explored. This project is currently conducting a study to explore implicit cognition and ideomotor effects: Ouija. The goal of this project is to test if a device based on the use of ideomotor effects can bypass explicit cognition and access implicit cognition."
            }],
            joinTeam: {
                whatWeDo: {
                    p1: "The Ideo Project is investigating implicit cognition and whether we can bypass explicit cognition through the use of different devices. If you are interested in getting involved in research and the process that goes behind such a study, this could be the project for you."
                }
            }
        }, {
            name: "IT"
        }, {
            name: "Dormant"
        },
        {
            name: "Image Transitions"
        }
    ]

    const curr_project: any = projects.find(project => project.name === match.params.project_id)
    console.log(curr_project)

    if (!curr_project) {
        return <div>Selected project does not exist</div>
    }

    let links: { title: string, ref: string }[] = PROJECT_NAV.map(project_nav => {
        return {
            title: project_nav.TITLE,
            ref: ROUTES.PROJECT.BASE + "/" + curr_project.name + project_nav.REF
        }
    })

    return (
        <div className={"project-page"}>
            <ProjectNavbar links={links} currProject={curr_project} match={match} />
        </div>
    )
}

export default ProjectWrapper
