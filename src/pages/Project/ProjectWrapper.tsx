import React from 'react'
import { RouteComponentProps, Switch, Route } from 'react-router';
import { Project } from '@entities/Project';
import ROUTES from '@statics/routes';
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
            name: "Correlation",
            description: {
                first: "The Correlation project studies the visual perception of correlation[https://en.wikipedia.org/wiki/Pearson_correlation_coefficient] in data visualizations. Data visualization is a graphical representation of a data set. Scatterplots are a simple and common example of visualizing data with two variables. In a scatter plot, data is presented in a graphic form by placing points on a cartesian (x-y) coordinate plane according to their values on each variable. For simple linear data, correlation in a scatter plot corresponds to the degree to which the points form a straight line. We use a classic methods from psychophysics [https://en.wikipedia.org/wiki/Psychophysics] to derive our measures – discrimination tasks using the staircase method to measure precision. Performance in this aspect is regular and well described by Weber and Fechner laws regardless of visual variable choice used to represent the data.",
                second: "Currently we are working on two projects to determine the perception of correlation. The Mainstream Correlation Team studies how manipulating different visual attributes within the scatterplots affect the way we perceive the information shown in the scatterplot, and whether we are able to see Weber and Fechner’s law hold true. The Sequencing Correlation Team studies how different timings for the display duration of the scatterplots or other graphs and symbols used to represent correlation impact its perception. And if Weber's law still holds in these conditions where the graphs are shown for only a brief moment of time.",
                emp: "To Do Please Add"
            },
            qa: [{
                q: "What is implicit cognition?", a: "Implicit cognition can be described as cognition that is beyond our conscious control. It can include a variety of different types of cognition: learning, memory, social, emotion, and many more. Given the unconscious nature of this area of study, there are no “direct” ways of studying implicit cognition. The Ideo project uses ideomotor effects to explore the inner-workings of implicit cognition. Ideomotor effects are actions that are not perceived as intentional, but seem to emerge with no identifiable source; often associated with a sense of involuntariness. They are unconscious movements that happen in response to knowledge or information that you may have come across in the past. A few applications of this ideomotor effect are the ouija board and the hand-held pendulum, which Gachou et al. (2012) and Olson et al. (2017) have explored. This project is currently conducting a study to explore implicit cognition and ideomotor effects: Ouija. The goal of this project is to test if a device based on the use of ideomotor effects can bypass explicit cognition and access implicit cognition."
            }],
            members: [
                {
                    name: "Jose Navarro",
                    position: "Project Leader",
                    isCurrentMember: false,
                },
                {
                    name: "Aaron Wong",
                    position: "Co-pilot",
                    isCurrentMember: false,
                },
                {
                    name: "Dusty Fox",
                    position: "Co-pilot",
                    isCurrentMember: false,
                },
                {
                    name: "Ford Atwater ",
                    position: "Co-pilot",
                    isCurrentMember: true,
                },
                {
                    name: "Nicolas Navarre",
                    position: "Co-pilot",
                    isCurrentMember: true,
                },
                {
                    name: "Philippe Chapdelaine",
                    position: "Co-pilot",
                    isCurrentMember: true,
                },
            ],
            publications: [
                {
                    name: "Invariance of Correlation Perception (2012)",
                    citation: "Rensink RA (2012). Invariance of Correlation Perception. Journal of Vision, 2012;12(9):433. doi: 10.1167/12.9.433.",
                    link: "https://jov.arvojournals.org/article.aspx?articleid=2141080"
                },
                {
                    name: "The perception of correlation in scatterplots (2010)",
                    citation: "Rensink RA, and Baldridge G (2010). The perception of correlation in scatterplots. Computer Graphics Forum, 29: 1203-1210.",
                    link: "http://www2.psych.ubc.ca/~rensink/publications/abs.10.4.html"
                },
                {
                    name: "On the Prospects for a Science of Visualization (2014)",
                    citation: "Rensink RA (2014a). On the Prospects for a Science of Visualization.  In W. Huang (Ed.) Handbook of Human Centric Visualization: Theories, Methodologies, and Case Studies. New York: Springer.  pp. 147-175.",
                    link: "http://www2.psych.ubc.ca/~rensink/publications/abs.14.1.html"
                }
             ],
            subpage: [
                {
                    name: "Mainstream Correlation",
                    description: {
                        first: "We are studying how manipulating different visual attributes within the scatterplots affect the way we perceive the information shown in the scatterplot, and whether we are able to see Weber and Fechner’s law hold true. We are currently manipulating the dots within the scatterplot (the effect of size, shape, colour, opacity etc.), before moving onto manipulating the dot cloud (number of dots, scale, location etc.), and finally manipulating the frame of the scatter plot with different border thickness, location of axes and so on. ",
                        second: "We are currently manipulating the dots within the scatterplot (the effect of size, shape, colour, opacity etc.), before moving onto manipulating the dot cloud (number of dots, scale, location etc.), and finally manipulating the frame of the scatter plot with different border thickness, location of axes and so on. Scatter plots represent the variability in a data set with a single visual variable, position, but there are others (ie: size, color, texture, and brightness) which could be used instead. For example, consider the two ring strip-plots below. They represent the same data-set as the scatter plots above, but they use ring-size rather than y-position to represent variability in one of the variables.",
                        emp: "To Do Please Add"
                    }
                },
                {
                    name: "Sequence Correlation",
                    description: {
                        first: "The Correlation Sequencing team is investigating the Perception of Correlation in scatter plots when shown only for a brief moment of time. We show participants to plots with a similar correlation level and try to reduce the difference between the correlation until we find the Just Noticeable Difference (JND for short). Traditionally, determining correlation in scatterplots has been a slow high-level cognitive process, like interpreting pictorial representations. However, there is evidence that scatterplot perception follows Weber’s law [https://en.wikipedia.org/wiki/Weber%E2%80%93Fechner_law] which is usually associated with quick perceptual processes –  a linear relationship for discrimination and a logarithmic curve for estimation.",
                        second: "This project has been focused on replicating and expanding upon these foundational findings by running our experiments on a variety of graph designs. The “Sequencing” name came from the first condition we ran where the Scatterplots would be shown in a sequence, also known as the “Timing” condition. The two independent variables were the Base Correlation of the scatter plots (the intensity of the stimulus) and the duration the first scatter plot was shown for. The first graph was shown for only a brief moment of time to make sure it is being perceived by a visual process, which would be fast.",
                        emp: "To Do Please Add"
                    }
                }
            ]
        },
        {
            name: "NOVA",
            publications: [
                {
                    name: "Robust inattentional blindness (2005)",
                    citation: "Rensink, R. A. (2005). Robust inattentional blindness. Journal of Vision, 5(8), 790: https://jov.arvojournals.org/article.aspx?articleid=2132583",
                    link: "https://jov.arvojournals.org/article.aspx?articleid=2132583"
                }
            ]
        }, {
            name: "Perceptual Modes",
            publications: [
                {
                    name: "Example",
                    citation: "Example",
                    link: ""
                }
            ]
        }, {
            name: "SHIVA",
            description: {
                first:
                    `When we say ‘mode of visual perception’ or ‘perceptual mode,’ we refer to the particular way in which a person makes sense of scenes presented before their eyes. In the SHIVA project, we refer to a perceptual mode as something which encompasses a specific group of equations that the brain uses to draw conclusions from information derived by the retina. We think that the brain’s process of choosing this mode could be automatic rather than consciously controlled. Whenever the brain changes its mode of perception, its specific process of drawing conclusions is also changed, and a person will perceive things differently.`,

                second: "Work done in the UBC VCL has revealed the possibility that a person’s visual perceptual mode can be changed. The change is measured by the use of a visual search paradigm called visual search asymmetry. Thus far, it seems that our subjects are not willfully changing their mode of perception, but rather their perceptual mode changes because of specific external factors in their visual environment. Our subjects seem to be unaware of any perceptual mode change occurring, so it is likely a subconscious occurrence. \n\nThe SHIVA project is investigating factors which shift these visual perceptual modes. Some questions we ask are: What range of factors or external stimuli can affect these perceptual modes? To what degree are perceptual modes affected by these factors? Do some factors lose their effect on perceptual modes when certain other factors are present?",
                emp: `The SHIVA project arose from an interest in how culture may have a significant effect on the mode of visual perception a person uses.`
            },
            publications: [
                {
                    name: "Asymmetries in visual search: An introduction (2001)",
                    citation: "Wolfe, J. M. (2001). Asymmetries in visual search: An introduction. Perception & Psychophysics, 63(3), 381-389. doi:10.3758/BF03194406. https://search.bwh.harvard.edu/new/pubs/IntrotoSearchAsym.pdf",
                    link: "https://search.bwh.harvard.edu/new/pubs/IntrotoSearchAsym.pdf"
                }
            ]
        }, {
            name: "Ideo",
            description: {
                first: "What is the Ouija board? The Ouija board is used as a divination technique to find answers to questions. This is done by putting your hands on the planchette, asking the board a question, then letting the planchette move to the letters/words on the board.",
                second: "This can be explained by ideomotor effects. In this study we compare the differences between conscious and unconscious knowledge. Using the ouija board as a medium, we investigate whether the unconscious mind knows more than the conscious mind. By asking questions to participants and measuring accuracies across experimental modes, a deeper understanding of unconscious knowledge can be achieved.",
                emp: "Who is really behind the movements of the planchette? Can this phenomenon be explained by psychology?"
            },
            qa: [{
                q: "What is implicit cognition?", a: "Implicit cognition can be described as cognition that is beyond our conscious control. It can include a variety of different types of cognition: learning, memory, social, emotion, and many more. Given the unconscious nature of this area of study, there are no “direct” ways of studying implicit cognition. The Ideo project uses ideomotor effects to explore the inner-workings of implicit cognition. Ideomotor effects are actions that are not perceived as intentional, but seem to emerge with no identifiable source; often associated with a sense of involuntariness. They are unconscious movements that happen in response to knowledge or information that you may have come across in the past. A few applications of this ideomotor effect are the ouija board and the hand-held pendulum, which Gachou et al. (2012) and Olson et al. (2017) have explored. This project is currently conducting a study to explore implicit cognition and ideomotor effects: Ouija. The goal of this project is to test if a device based on the use of ideomotor effects can bypass explicit cognition and access implicit cognition."
            }],
            joinTeam: {
                whatWeDo: [
                    "The Ideo Project is investigating implicit cognition and whether we can bypass explicit cognition through the use of different devices. If you are interested in getting involved in research and the process that goes behind such a study, this could be the project for you."
                ]
            },
            publications: [
                {
                    name: "Expression of nonconscious knowledge via ideomotor actions (2012)",
                    citation: "NO CITATION PROVIDED",
                    link: "https://www.sciencedirect.com/science/article/pii/S1053810012000402"
                },
                {
                    name: "Adaptive control of ideomotor effect anticipations (2010)",
                    citation: "NO CITATION PROVIDED",
                    link: "https://www.sciencedirect.com/science/article/pii/S0001691810001800"
                }
            ]
        }, {
            name: "Dormant",
            publications: [
            ]
        },
        {
            name: "NCIS",
            publications: [
            ]
        },
        {
            name: "Image Transitions",
            description: {
                first: "A metric is a standard measurement which assigns numbers to things, like rulers! Interestingly, humans also possess a unique internal metric system, separate from the standard metric system that we use — our visual system. We are able to estimate how far an object is, whether or not it is within our reach by just eyeballing. We are also able to see objects like our car as the same size no matter how far away it’s parked. So how is the metric of our perceptual space organized? How do we perceive size, depth, brightness etc? Is everything absolute or relative?",
                second: "We use a visual search paradigm (finding a target stimulus among distractors on a display) to answer this question. Here’s an example: In order to investigate whether we perceive relative size or physical size, we used a 2 x 2 design varying viewing distance and display size (100% size, 1x distance; 100% size, 2x distance; 50% size, 1x distance; 50% size, 2x distance). Think about it! What would the results look like if it is retinal vs. physical size?",
                emp: "To Do Please Add"
            },
            qa: [{
                q: "What is the inspiration for the project?", a: "You probably realized that we have a powerful visual system. Even the car that is parked away from us looks very small, our brain knows this is about the same size as the car parked near us. This concept is called size constancy. We have the brain’s construction of the outside world including two cars (one far from us and one close to us). These constructions (or what we called as mental representation) are flexible because it accounts for changes that occur in the world."
            }, {
                q: "What are you studying and how does the inspiration above related to our study?", a: "We want to know how we perceive the size. Is it based on the item's physical size or relative size?"
            }, {
                q: "How can you manipulate the physical or relative size of the object?", a: "We used visual search, in which the participants will detect whether a target stimulus is present among distractors on a display. In our experience, we use a longer line representing the target and other relatively shorter lines as the distractors. We have different conditions varying the physical size, the distance among lines, and the background of lines to see which one affects us to perceive the size."
            }],
            members: [
                {
                    name: "Sherry Wang",
                    position: "Project Leader",
                    education: "Graduated from the Master of Data Science at UBC",
                    email: "sherryw0701@outlook.com",
                    isCurrentMember: true,
                },
                {
                    name: "Flora Zhi",
                    position: "Project Leader",
                    education: "Graduated from Cognitive Systems (linguistics) program at UBC",
                    email: "florazhi123@gmail.com",
                    isCurrentMember: true,
                },
                {
                    name: "Chenyi Zhao",
                    position: "Volunteer",
                    education: "Currently in Bachelor of Science (Mathematics program) at UBC",
                    email: "cyz1016@student.ubc.ca",
                    isCurrentMember: true,
                },
                {
                    name: "Shubhkarman Gill",
                    position: "Co-pilot",
                    education: "Currently in Bachelor of Commerce at UBC",
                    email: "shubhkarman2143@gmail.com",
                    isCurrentMember: true,
                },
                {
                    name: "Jenny Ma",
                    position: "Co-pilot",
                    education: "Currently in Bachelor of Science (Cognitive Systems program) at UBC",
                    email: "jennyma2478@gmail.com",
                    isCurrentMember: true,
                },
            ],
            publications: [
                {
                    name: "Visual search has no memory (1998)",
                    citation: "Horowitz, T. S., & Wolfe, J. M. (1998). Visual search has no memory. Nature, 394(6693), 575-577. http://www.nature.com/nature/journal/v394/n6693/full/394575a0.html",
                    link: "http://www.nature.com/nature/journal/v394/n6693/full/394575a0.html"
                },
                {
                    name: "Effects of 2D geometric transformations on visual memory (2006)",
                    citation: "Lam, H., Rensink, R. A., & Munzner, T. (2006, July). Effects of 2D geometric transformations on visual memory. In Proceedings of the 3rd symposium on Applied perception in graphics and visualization (pp. 119-126). ACM. http://dl.acm.org/citation.cfm?id=1140515 ",
                    link: "http://dl.acm.org/citation.cfm?id=1140515"
                },
                {
                    name: "Perceptual invariance of nonlinear focus+ context transformations (2004)",
                    citation: "Lau, K., Rensink, R. A., & Munzner, T. (2004, August). Perceptual invariance of nonlinear focus+ context transformations. In Proceedings of the 1st Symposium on Applied perception in graphics and visualization (pp. 65-72). ACM. http://www2.psych.ubc.ca/~rensink/publications/download/agvp-LRT.pdf",
                    link: "http://www2.psych.ubc.ca/~rensink/publications/download/agvp-LRT.pdf  "
                },
                {
                    name: "The Invariance of Visual Search to Geometric Transformation (2004)",
                    citation: "Rensink, R. (2004). The Invariance of Visual Search to Geometric Transformation. Journal of Vision, 4(8), 178. http://jov.arvojournals.org/article.aspx?articleid=2130823",
                    link: "http://jov.arvojournals.org/article.aspx?articleid=2130823"
                }
            ]
        }
    ]

    const curr_project: any = projects.find(project => project.name === match.params.project_id)

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