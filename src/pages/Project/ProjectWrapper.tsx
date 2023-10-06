import React from "react";
import { RouteComponentProps, Switch, Route } from "react-router";
import { Project } from "@entities/Project";
import ROUTES from "@statics/routes";
import PROJECT_NAV from "@statics/projectNav";
import ProjectNavbar from "@components/ProjectNavbar";
import "./ProjectWrapper.css";
import correlationGallery1 from "@statics/images/correlation/correlation1.png";
import correlationGallery2 from "@statics/images/correlation/correlation3.png";
import correlationMainStream1 from "@statics/images/correlation/correlation2.png";
import correlationSequence1 from "@statics/images/correlation/correlation4.png";
import correlationSequence2 from "@statics/images/correlation/correlationSequence1.png";
import correlationSequence3 from "@statics/images/correlation/correlationSequence2.png";
import correlationSequence4 from "@statics/images/correlation/correlationSequence3.png";
import correlationSequence5 from "@statics/images/correlation/correlationSequence4.png";
import nova1 from "@statics/images/nova/novaImage1.png";
import nova2 from "@statics/images/nova/novaImage2.png";
import nova3 from "@statics/images/nova/novaImage3.png";
import shiva1 from "@statics/images/shiva/shiva1.png";
import shiva2 from "@statics/images/shiva/shiva2.png";
import ideo1 from "@statics/images/ideo/ideo1.png";
import ideo2 from "@statics/images/ideo/ideo2.png";
import it1 from "@statics/images/it/it1.png";
import it2 from "@statics/images/it/it2.png";

interface MatchParams {
  project_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {}

const ProjectWrapper: React.FC<ProjectProps> = ({ match }) => {
  const [selected, setSelected] = React.useState(true);
  const expand = selected ? "expand" : "";

  // const projects = useAppSelector(selectProjects);

  const projects: Project[] = [
    {
      // dummy projects
      name: "Correlation",
      description: {
        first:
          "The Correlation project studies the visual perception of correlation[https://en.wikipedia.org/wiki/Pearson_correlation_coefficient] in data visualizations. Data visualization is a graphical representation of a data set. Scatterplots are a simple and common example of visualizing data with two variables. In a scatter plot, data is presented in a graphic form by placing points on a cartesian (x-y) coordinate plane according to their values on each variable. For simple linear data, correlation in a scatter plot corresponds to the degree to which the points form a straight line. We use a classic methods from psychophysics [https://en.wikipedia.org/wiki/Psychophysics] to derive our measures – discrimination tasks using the staircase method to measure precision. Performance in this aspect is regular and well described by Weber and Fechner laws regardless of visual variable choice used to represent the data.",
        second:
          "Currently we are working on two projects to determine the perception of correlation. The Mainstream Correlation Team studies how manipulating different visual attributes within the scatterplots affect the way we perceive the information shown in the scatterplot, and whether we are able to see Weber and Fechner’s law hold true. The Sequencing Correlation Team studies how different timings for the display duration of the scatterplots or other graphs and symbols used to represent correlation impact its perception. And if Weber's law still holds in these conditions where the graphs are shown for only a brief moment of time.",
        emp: "The Perception of Correlation has been thought to be done through a slow top-down process, however, there is evidence that suggests it is actually done through a fast bottom-up process--a visual process. The Correlation Team focuses on researching and gathering more evidence to support this “new science of visual perception",
      },
      qa: [
        {
          q: "What is implicit cognition?",
          a: "Implicit cognition can be described as cognition that is beyond our conscious control. It can include a variety of different types of cognition: learning, memory, social, emotion, and many more. Given the unconscious nature of this area of study, there are no “direct” ways of studying implicit cognition. The Ideo project uses ideomotor effects to explore the inner-workings of implicit cognition. Ideomotor effects are actions that are not perceived as intentional, but seem to emerge with no identifiable source; often associated with a sense of involuntariness. They are unconscious movements that happen in response to knowledge or information that you may have come across in the past. A few applications of this ideomotor effect are the ouija board and the hand-held pendulum, which Gachou et al. (2012) and Olson et al. (2017) have explored. This project is currently conducting a study to explore implicit cognition and ideomotor effects: Ouija. The goal of this project is to test if a device based on the use of ideomotor effects can bypass explicit cognition and access implicit cognition.",
        },
      ],
      members: [
        {
          name: "Jose Navarro",
          position: "Project Leader",
          isCurrentMember: true,
        },
        {
          name: "Edris Wu",
          position: "Project Leader",
          isCurrentMember: true,
        },
        {
          name: "Ford Atwater",
          position: "Project Leader",
          isCurrentMember: false,
        },
        {
          name: "Rishika Aggarwal",
          position: "Project Secondary",
          isCurrentMember: true,
        },
        {
          name: "Aaron Wong",
          position: "Co-pilot",
          isCurrentMember: true,
        },
        {
          name: "Richard Mao",
          position: "Co-pilot",
          isCurrentMember: true,
        },
        {
          name: "Dusty Fox",
          position: "Co-pilot",
          isCurrentMember: false,
        },
        {
          name: "Wenqi Zhang",
          position: "Co-pilot",
          isCurrentMember: true,
        },
        
        {
          name: "Nicolas Navarre",
          position: "Co-pilot",
          isCurrentMember: false,
        },
        {
          name: "Philippe Chapdelaine",
          position: "Co-pilot",
          isCurrentMember: false,
        },
      ],
      publications: [
        {
          name: "Invariance of Correlation Perception (2012)",
          citation:
            "Rensink RA (2012). Invariance of Correlation Perception. Journal of Vision, 2012;12(9):433. doi: 10.1167/12.9.433.",
          link: "https://jov.arvojournals.org/article.aspx?articleid=2141080",
        },
        {
          name: "The perception of correlation in scatterplots (2010)",
          citation:
            "Rensink RA, and Baldridge G (2010). The perception of correlation in scatterplots. Computer Graphics Forum, 29: 1203-1210.",
          link: "http://www2.psych.ubc.ca/~rensink/publications/abs.10.4.html",
        },
        {
          name: "On the Prospects for a Science of Visualization (2014)",
          citation:
            "Rensink RA (2014a). On the Prospects for a Science of Visualization.  In W. Huang (Ed.) Handbook of Human Centric Visualization: Theories, Methodologies, and Case Studies. New York: Springer.  pp. 147-175.",
          link: "http://www2.psych.ubc.ca/~rensink/publications/abs.14.1.html",
        },
      ],
      subpage: [
        {
          name: "Mainstream Correlation",
          description: {
            first:
              "We are studying how manipulating different visual attributes within the scatterplots affect the way we perceive the information shown in the scatterplot, and whether we are able to see Weber and Fechner’s law hold true. We are currently manipulating the dots within the scatterplot (the effect of size, shape, colour, opacity etc.), before moving onto manipulating the dot cloud (number of dots, scale, location etc.), and finally manipulating the frame of the scatter plot with different border thickness, location of axes and so on. ",
            second:
              "We are currently manipulating the dots within the scatterplot (the effect of size, shape, colour, opacity etc.), before moving onto manipulating the dot cloud (number of dots, scale, location etc.), and finally manipulating the frame of the scatter plot with different border thickness, location of axes and so on. Scatter plots represent the variability in a data set with a single visual variable, position, but there are others (ie: size, color, texture, and brightness) which could be used instead. For example, consider the two ring strip-plots below. They represent the same data-set as the scatter plots above, but they use ring-size rather than y-position to represent variability in one of the variables.",
            emp: "",
          },
          galleryList: [
            {
              img: correlationMainStream1,
              title: "Figure 1.1",
              description:
                "Two ring plots where the y-value is represented by the ring size. High correlation (top) and low correlation (bottom)",
              cardType: "default",
            },
          ],
        },
        {
          name: "Sequence Correlation",
          description: {
            first:
              "The Correlation Sequencing team is investigating the Perception of Correlation in scatter plots when shown only for a brief moment of time. We show participants to plots with a similar correlation level and try to reduce the difference between the correlation until we find the Just Noticeable Difference (JND for short). Traditionally, determining correlation in scatterplots has been a slow high-level cognitive process, like interpreting pictorial representations. However, there is evidence that scatterplot perception follows Weber’s law [https://en.wikipedia.org/wiki/Weber%E2%80%93Fechner_law] which is usually associated with quick perceptual processes –  a linear relationship for discrimination and a logarithmic curve for estimation.",
            second:
              "This project has been focused on replicating and expanding upon these foundational findings by running our experiments on a variety of graph designs. The “Sequencing” name came from the first condition we ran where the Scatterplots would be shown in a sequence, also known as the “Timing” condition. The two independent variables were the Base Correlation of the scatter plots (the intensity of the stimulus) and the duration the first scatter plot was shown for. The first graph was shown for only a brief moment of time to make sure it is being perceived by a visual process, which would be fast.",
            emp: "",
          },
          galleryList: [
            {
              img: correlationSequence1,
              title: "Figure 1.1",
              description:
                "Side-by-side sequencing experiment design showcasing the graph sequence. First the two side-by-side scatter plots are shown for 100/ 400/ 1600 ms, followed by a mask shown for 200 ms, followed by the blank screen that is shown indefinitely where the participant makes the decision.",
              cardType: "default",
            },
            {
              img: correlationSequence2,
              title: "Figure 1.2",
              description:
                "The results from the original Rensink RA, and Baldridge G (2010) paper. Weber’s Law is showcased on the graph on the left while the confidence rating for each display timing is on the right.",
              cardType: "default",
            },
            {
              img: correlationSequence3,
              title: "Figure 1.3",
              description:
                "Side-by-side sequencing experiment design showcasing the graph sequence. First the two side-by-side scatter plots are shown for 100/ 400/ 1600 ms, followed by a mask shown for 200 ms, followed by the blank screen that is shown indefinitely where the participant makes the decision.",
              cardType: "default",
            },
            {
              img: correlationSequence4,
              title: "Figure 1.4",
              description:
                "A scatter plot and strip plot used to compare correlation between the two graphs.",
              cardType: "default",
            },
            {
              img: correlationSequence5,
              title: "Figure 1.5",
              description:
                "The precision graph from the side-by-side experiment showcasing Weber's Law being followed. The JND precision is proportional to the intensity of the stimulus (correlation)",
              cardType: "default",
            },
          ],
        },
      ],
      galleryList: [
        {
          img: correlationGallery1,
          title: "Figure 1.1",
          description:
            "Two side-by-side scatter plots. The scatterplot on the left shows a high correlation while the one on the right shows a low correlation. In a scatter plot, data is presented in a graphic form by placing points on a cartesian (x-y) coordinate plane according to their values on each variable. For simple linear data, correlation in a scatter plot corresponds to the degree to which the points form a straight line. We use classic methods from psychophysics to derive our measures – discrimination tasks using the staircase method to measure precision. Performance in this aspect is regular and well described by Weber and Fechner laws regardless of visual variable choice used to represent the data.",
          cardType: "default",
        },
        {
          img: correlationGallery2,
          title: "Figure 1.2",
          description:
            "Scatterplot image descriptions: scatterplot for the mixed colour condition (left). Scatterplot with size 8mm dots for the size condition (right)",
          cardType: "default",
        },
      ],
      testimonials: [
        {
          name:'Jose Navarro',
          position: 'Team Lead',
          description: 'Being a member of the correlation team has provided me great experience not only as a developer and researcher, but also as a team member and team leader.',
          cardType: 'no-photo-test'
        },
        {
          name:'Dusty Fox',
          position: 'Co-pilot',
          description: 'Working at the lab on the correlation project has been a really educational experience! I`ve learned so much about how labs operate in practice and being able to actively participate in research has been exciting.',
          cardType: 'no-photo-test'
        },
        {
          name:'Aaron Wong',
          position: 'Co-pilot',
          description: 'Being on the correlation team is a very welcoming and enlightening experience. Everyone on the team is extremely friendly and patient and I would highly recommend anyone who wants to start their journey into research to start here.',
          cardType: 'no-photo-test'
        },
        {
          name:'Richard Mao',
          position: 'Co-pilot',
          description: 'During my time on the team, I have gained valuable insights and experience into the world of research. It has helped me a lot in my pursuit of both academic and career endeavors.',
          cardType: 'no-photo-test'
        },
      ],
      joinTeam: {
        whatWeDo:[
        'The Correlation project studies the visual perception of correlation in data visualizations. Data visualization is a graphical representation of a data set. Scatterplots are a simple and common example of visualizing data with two variables. In a scatter plot, data is presented in a graphic form by placing points on a cartesian (x-y) coordinate plane according to their values on each variable. For simple linear data, correlation in a scatter plot corresponds to the degree to which the points form a straight line. ',
        'Currently we are working on two projects to determine the perception of correlation. The Mainstream Correlation Team studies how manipulating different visual attributes within the scatterplots affect the way we perceive the information shown in the scatterplot, and whether we are able to see Weber and Fechner’s law hold true. The Sequencing Correlation Team studies how different timings for the display duration of the scatterplots or other graphs and symbols used to represent correlation impact its perception. And if Weber\'s law still holds in these conditions where the graphs are shown for only a brief moment of time.'
        ]
      }
        
    },
    {
      name: "NOVA",
      publications: [
        {
          name: "Robust inattentional blindness (2005)",
          citation:
            "Rensink, R. A. (2005). Robust inattentional blindness. Journal of Vision, 5(8), 790: https://jov.arvojournals.org/article.aspx?articleid=2132583",
          link: "https://jov.arvojournals.org/article.aspx?articleid=2132583",
        },
      ],
      galleryList: [
        {
          img: nova1,
          title: "Figure 1.1",
          description:
            "The Money Business Illusion, colloquially referred to as the “gorilla video”, demonstrates multiple instances of the inattentional blindness phenomenon taking place. As described, participants are told to count how many times the basketball is passed between two groups of individuals (3 with black shirts, and 3 with white shirts). Video: https://www.youtube.com/watch?v=IGQmdoK_ZfY&ab_channel=DanielSimons",
          cardType: "default",
        },
        {
          img: nova2,
          title: "Figure 1.2",
          description:
            "The first, and most well-known instance is participants’ failure to notice the presence of a man in a gorilla suit walking across the screen, due to their attention being focused on the people passing the basketball to each other. ",
          cardType: "default",
        },
        {
          img: nova3,
          title: "Figure 1.3",
          description:
            "The second instance of inattentional blindness in the video is the participants’ failure to notice the colour of the curtain in the background changing partway through. The third example of this phenomenon is the participants’ failure to notice that one of the featured people (wearing a black shirt) leaves the scene entirely.",
          cardType: "default",
        },
        // {
        //     img: correlationGallery1,
        //     title: "Figure 1.4",
        //     description:
        //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        //     cardType: "default",
        // },
        // {
        //     img: correlationGallery1,
        //     title: "Figure 1.5",
        //     description:
        //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        //     cardType: "default",
        // },
      ],
      description: {
        first:
          "The NOVA project studies the effects of Inattentional Blindness and cueing within a single paradigm. Inattentional Blindness is the phenomenon that occurs when something is plainly in the field of view but is not consciously percieved. This occurs the most when the viewer’s attention is focused intensely on something else in their field of view due to our limited capacity for attention being able to focus on a limited amount of things at the time. A famous example of this is the “Gorilla video” where the participants were asked to count the number of basketball tosses, and as a result they fail to see the person in a gorilla suit walk through the scene. Once the participant is informed about the gorilla, they are able to see it clearly the next time the video is watched. This means that Inattentional Blindness tasks can only be used once. The NOVA project, on the other hand, offers a robust way to test this phenomenon.",
        second:
          "The NOVA project also focuses on Cueing. Cueing occurs when the viewer's attention is intentionally re-focused to another object without them realizing that this cue happened. For example, if the viewer sees an arrow pointing to an object, they will likely shift their attention to that object even if they did not consciously perceive the arrow.                Currently the NOVA project is looking at the differences in cueing effects when the viewers do not consciously perceive the cue versus when they do. Some of these conditions include more abstract symbols to test the boundaries of how much we know. The results from this project will hopefully help us understand more about the role of consciousness in visual perception.",
        emp: "Inattentional Blindness is the phenomenon that occurs when something is plainly in the field of view but is not consciously perceived.",
      },
      members: [
        {
          name: "Isha Verma",
          position: "Project Leader",
          isCurrentMember: true,
        },
        {
          name: "Tsubasa Shima",
          position: "Research Assistant",
          isCurrentMember: true,
        },
        {
          name: "Francesca Schoettler",
          position: "Volunteer Research Assistant",
          isCurrentMember: true,
        },
        {
          name: "Brian Vu",
          position: "Volunteer Research Assistant/402 Student",
          isCurrentMember: true,
        },
        {
          name: "Tiffany Wu",
          position: "Research Assistant",
          isCurrentMember: true,
        },
        {
          name: "Ying Zeng",
          position: "Research Assistant",
          isCurrentMember: true,
        },
        {
          name: "Sam Sidhu",
          position: "co-pilot",
          isCurrentMember: true,
        },
        {
          name: "Sam Elley",
          position: "co-pilot",
          isCurrentMember: true,
        },
        {
          name: "Sarah Ibrahim",
          position: "402 Student",
          isCurrentMember: true,
        },
      ],
      qa: [
        {
          q: "What is Inattentional Blindness?",
          a: "Inattentional Blindness is the failure to see the presence of an item when it is not attended (Rensink, R. A., 2005). This means that even when something is within a person’s field of view, they don’t perceive it because their attention is not directed at it.",
        },
        {
          q: "How do you study Inattentional Blindness",
          a: "Most previous research on inattentional blindness used methodologies that were not robust. A famous example of this is the `Gorilla video` where the participants are told to count the number of basketball tosses, and as a result they fail to see the gorilla walk through in plain sight. Once they are informed about the gorilla, they are able to see it clearly the next time the video is watched, so the video can only be used once to demonstrate inattentional blindness. However, The NOVA project's paradigm offers a way to robustly test this phenomenon. We have two important aspects in our paradigm, one being our technique, in which the apperance of a briefly-presented test stimulus appeared the moment observers attended to somewhere else. With this, participants are repeatedly shown the experiment, but still can only allocate little attention to the cue when it appears. The other aspect is cueing. Cueing occurs when the viewers attention is intentionally re-focused to another object without them realizing that this cue happened. A directional cue can direct attention after a few milliseconds from its appearance (Gibson & Bryant, 2005). When cues are reported unseen, it suggested that participants never experienced them at all.",
        },
        {
          q: "What responsibilities can I expect in the team?",
          a: "As a co-pilot, you will be trained to collect data by running participants throught the experiment while on Zoom meetings and scheduling time slots on UBC’s Human Subject Pool website. As a volunteer research assistant, you will be expected to take on more responsibilities in the form of data analysis and condition creation, which involve learning technical skills in Visual Studio Code and Photoshop.                     ",
        },
      ],
      testimonials: [
        {
          cardType:"no-photo-test",
          description:"I joined NOVA midway through my fourth year, and by that point, it was easy to feel like I was playing catch up with gaining research experience. Fortunately for me, my first term as a Co-Pilot showed me just how irrational those worries were with how seamlessly my training went and how rewarding the process of learning new skills was. My teammates were welcoming and my project leader was patient and communicative with me throughout the training process. By the time the next term had come around, I felt so at home that I’ve continued working here for another full year.",
          name:"Tsubasa",
        },
      ],
      joinTeam: {
        whatWeDo: ["The NOVA team follows a weekly routine for collecting, analyzing and reporting about data. Every member of the team, from the project leader to the co-pilots, is trained expected to learn how to schedule meetings with participants through UBC’s Human Subject Pool website. Through HSP, meetings are scheduled with participants to run them through the experimental process for an hour, answering any questions or troubleshooting technical issues along the way. Once a week’s worth of data is collected, volunteers and research assistants analyze the data through Python on Microsoft Visual Studio Code. The analysis results are then reported to the principal investor and recorded in a shared document. Based on whether the analysis yields noteworthy results, the team may continue to run the current conditions or create a novel condition with a visual stimulus graphic."]

      }
      

    },
    // {
    //     name: "Perceptual Modes",
    //     publications: [
    //         {
    //             name: "Example",
    //             citation: "Example",
    //             link: ""
    //         }
    //     ]
    // },
    {
      name: "SHIVA",
      description: {
        first: `When we say ‘mode of visual perception’ or ‘perceptual mode,’ we refer to the particular way in which a person makes sense of scenes presented before their eyes. In the SHIVA project, we refer to a perceptual mode as something which encompasses a specific group of equations that the brain uses to draw conclusions from information derived by the retina. We think that the brain’s process of choosing this mode could be automatic rather than consciously controlled. Whenever the brain changes its mode of perception, its specific process of drawing conclusions is also changed, and a person will perceive things differently.`,

        second:
          "Work done in the UBC VCL has revealed the possibility that a person’s visual perceptual mode can be changed. The change is measured by the use of a visual search paradigm called visual search asymmetry. Thus far, it seems that our subjects are not willfully changing their mode of perception, but rather their perceptual mode changes because of specific external factors in their visual environment. Our subjects seem to be unaware of any perceptual mode change occurring, so it is likely a subconscious occurrence. \n\nThe SHIVA project is investigating factors which shift these visual perceptual modes. Some questions we ask are: What range of factors or external stimuli can affect these perceptual modes? To what degree are perceptual modes affected by these factors? Do some factors lose their effect on perceptual modes when certain other factors are present?",
        emp: `The SHIVA project arose from an interest in how culture may have a significant effect on the mode of visual perception a person uses.`,
      },
      galleryList: [
        {
          img: shiva1,
          title: "Figure 1.1",
          description:
            "Example of a cirlce target amongst bisected circle distractors (left) and a bisected circle target amongst circle distractors (right). ",
          cardType: "default",
        },
        {
          img: shiva2,
          title: "Figure 1.2",
          description:
            "Example of a short line target amongst long line distractors (left) and a long line target amongst short line stimuli (right).",
          cardType: "default",
        },
      ],
      publications: [
        {
          name: "Asymmetries in visual search: An introduction (2001)",
          citation:
            "Wolfe, J. M. (2001). Asymmetries in visual search: An introduction. Perception & Psychophysics, 63(3), 381-389. doi:10.3758/BF03194406. https://search.bwh.harvard.edu/new/pubs/IntrotoSearchAsym.pdf",
          link: "https://search.bwh.harvard.edu/new/pubs/IntrotoSearchAsym.pdf",
        },
      ],
      members: [
        {
          name: "Sogol Ghattan",
          position: "Project Leader",
          education: "",
          email: "",
          isCurrentMember: true,
        },
        {
          name: "Stephen Li",
          position: "Volunteer",
          education: "",
          email: "",
          isCurrentMember: true,
        },
        {
          name: "Danny Yu",
          position: "Volunteer",
          education: "",
          email: "",
          isCurrentMember: true,
        },
      ],
      testimonials: [
        {
          name: "Danny",
          position: "Volunteer",
          description:
            "When I entered the team as a first-year, I had limited knowledge about the research process, how it is conducted and what it means to be a responsible researcher. I joined the lab in hopes of getting exposure to research environments and being able to apply theories learned in class to the real world. Not only did SHIVA satisfy my interests, but it encouraged me to think critically about the research that I am producing. I learned new applications in R, discussed ideas with other researchers, and developed a better understanding of research. I highly recommend anyone to apply and not be apprehensive by a lack of experience",
          cardType: "no-photo-test",
        },
        {
          name: "Stephen",
          position: "Volunteer",
          description:
            "I joined the SHIVA team because I was looking for a topic that I would be interested in for my COGS 402. My experience has been extremely positive, the work environment is productive and friendly. Mistakes can happen, but they’re resolved kindly and effectively. I have learned a lot about the research process, from running participants to detailed data analysis with R, as well as soft skills such as communicating effectively.",
          cardType: "no-photo-test",
        },
      ],
      joinTeam: {
        whatWeDo:[
        'In SHIVA, we examine factors that can shift a person’s perceptual modes. In other words, we are interested in factors that can affect how a person makes sense of their visual environment. We’re particularly interested in a person’s visual environment as well as their cultural background. To examine these factors, the participant’s visual environment is varied before and during visual search tasks. Afterwards, we collect and examine their cultural information (for more details, please check out our Q&A!). In our older tests, performing various pre-tasks before the main visual search task has seen various degrees of success in changing a person’s perceptual mode. More recently however, we have been examining how the transition to an online test environment may shift a person’s perceptual modes.'
        ]
      }
    },
    {
      name: "Ideo",
      description: {
        first:
          "What is the Ouija board? The Ouija board is used as a divination technique to find answers to questions. This is done by putting your hands on the planchette, asking the board a question, then letting the planchette move to the letters/words on the board. This can be explained by ideomotor effects. In this study we compare the differences between conscious and unconscious knowledge.",
        second:
          " Using the ouija board as a medium, we investigate whether the unconscious mind knows more than the conscious mind. By asking questions to participants and measuring accuracies across experimental modes, a deeper understanding of unconscious knowledge can be achieved.",
        emp: "Who is really behind the movements of the planchette? Can this phenomenon be explained by psychology?",
      },
      qa: [
        {
          q: "What is implicit cognition?",
          a: "Implicit cognition can be described as cognition that is beyond our conscious control. It can include a variety of different types of cognition: learning, memory, social, emotion, and many more. Given the unconscious nature of this area of study, there are no “direct” ways of studying implicit cognition. The Ideo project uses ideomotor effects to explore the inner-workings of implicit cognition. Ideomotor effects are actions that are not perceived as intentional, but seem to emerge with no identifiable source; often associated with a sense of involuntariness. They are unconscious movements that happen in response to knowledge or information that you may have come across in the past. A few applications of this ideomotor effect are the ouija board and the hand-held pendulum, which Gachou et al. (2012) and Olson et al. (2017) have explored. This project is currently conducting a study to explore implicit cognition and ideomotor effects: Ouija. The goal of this project is to test if a device based on the use of ideomotor effects can bypass explicit cognition and access implicit cognition.",
        },
        {
          q: "What are Ideomotor effects?",
          a: "Ideomotor effects are actions that are not perceived as intentional, but seem to emerge with no identifiable source; often associated with a sense of involuntariness. They are unconscious movements that happen in response to knowledge or information that you may have come across in the past. A few applications of this ideomotor effect are the ouija board and the hand-held pendulum, which Gachou et al. (2012) and Olson et al. (2017) have explored. This project is currently conducting a study to explore implicit cognition and ideomotor effects: Ouija. The goal of this project is to test if a device based on the use of ideomotor effects can bypass explicit cognition and access implicit cognition.",
        },
      ],
      joinTeam: {
        whatWeDo: [
          "The project's primary objective is to replicate the findings originally obtained by Gauchou et al. in their 2012 study. Additionally, we aim to explore the impact of introducing new sets of questions and implementing certain modifications to the experiment's design. Our research team is composed of dedicated research assistants, volunteers, and co-pilots, all working collaboratively to execute this investigation effectively. To facilitate coordination and progress tracking, we have scheduled weekly meetings where we discuss the developments and outcomes of the ongoing week.",
          "The study itself entails running participants through HSP in exchange for course credits, followed by meticulous data collection and comprehensive analysis of the gathered results. Each experimental session typically lasts between 45 to 60 minutes and is conducted in a face-to-face setting. Our analysis encompasses a diverse array of variables, categorized into various types, which will be distributed among team members over the course of the term for thorough examination and interpretation.",
        ],
      },
      publications: [
        {
          name: "Expression of nonconscious knowledge via ideomotor actions (2012)",
          citation:
            "Gauchou, H. L., Rensink, R. A., & Fels, S. (2012). Expression of nonconscious knowledge via ideomotor actions. Consciousness and Cognition, 21(2), 976-982. https://doi.org/10.1016/j.concog.2012.01.016",
          link: "https://www.sciencedirect.com/science/article/pii/S1053810012000402",
        },
        {
          name: "Adaptive control of ideomotor effect anticipations (2010)",
          citation:
            "Pfister, R., Kiesel, A., & Melcher, T. (2010). Adaptive control of ideomotor effect anticipations. Acta Psychologica, 135(3), 316-322. https://doi.org/10.1016/j.actpsy.2010.08.006",
          link: "https://www.sciencedirect.com/science/article/pii/S0001691810001800",
        },
      ],
      members: [
        {
          name: "Janavi Nainani",
          position: "Research Assistant (Team Lead)",
          isCurrentMember: true,
        },
        {
          name: "Parisa Zaini",
          position: "Research Assistant (Co-lead)",
          isCurrentMember: true,
        },
        {
          name: "Jayden Pun",
          position: "Volunteer",
          isCurrentMember: true,
        },
        {
          name: "Nandika Kumar",
          position: "Volunteer",
          isCurrentMember: true,
        },
        {
          name: "Astrid Tam",
          position: "Co-pilot",
          isCurrentMember: true,
        },
        {
          name: "Yebin Cho",
          position: "Co-pilot",
          isCurrentMember: true,
        },
      ],
      galleryList: [
        {
          img: ideo1,
          title: "Figure 1.1",
          description:
            "Example of a cirlce target amongst bisected circle distractors (left) and a bisected circle target amongst circle distractors (right).",
          cardType: "default",
        },
        {
          img: ideo2,
          title: "Figure 1.2",
          description:
            "Example of a cirlce target amongst bisected circle distractors (left) and a bisected circle target amongst circle distractors (right).",
          cardType: "default",
        },
      ],
      testimonials: [
        {
          name: "John Doe",
          position: "Volunteer",
          description:
            "VCL is an open door for those who wants to learn. From statistical analysis to running experiments, VCL is a great place to start a hands on experience in a lab. There is still much to be explored about our unconscious knowledge and it's a privilege to be able to study it with amazing people.",
          cardType: "no-photo-test",
        },
      ],
    },
    {
      name: "Dormant",
      publications: [],
    },
    {
      name: "Image Transitions",
      description: {
        first:
          "A metric is a standard measurement which assigns numbers to things, like rulers! Interestingly, humans also possess a unique internal metric system, separate from the standard metric system that we use — our visual system. We are able to estimate how far an object is, whether or not it is within our reach by just eyeballing. We are also able to see objects like our car as the same size no matter how far away it’s parked. So how is the metric of our perceptual space organized? How do we perceive size, depth, brightness etc? Is everything absolute or relative?",
        second:
          "We use a visual search paradigm (finding a target stimulus among distractors on a display) to answer this question. Here’s an example: In order to investigate whether we perceive relative size or physical size, we used a 2 x 2 design varying viewing distance and display size (100% size, 1x distance; 100% size, 2x distance; 50% size, 1x distance; 50% size, 2x distance). Think about it! What would the results look like if it is retinal vs. physical size?",
        emp: "",
      },
      qa: [
        {
          q: "What is the inspiration for the project?",
          a: "You probably realized that we have a powerful visual system. Even the car that is parked away from us looks very small, our brain knows this is about the same size as the car parked near us. This concept is called size constancy. We have the brain’s construction of the outside world including two cars (one far from us and one close to us). These constructions (or what we called as mental representation) are flexible because it accounts for changes that occur in the world.",
        },
        {
          q: "What are you studying and how does the inspiration above related to our study?",
          a: "We want to know how we perceive the size. Is it based on the item's physical size or relative size?",
        },
        {
          q: "How can you manipulate the physical or relative size of the object?",
          a: "We used visual search, in which the participants will detect whether a target stimulus is present among distractors on a display. In our experience, we use a longer line representing the target and other relatively shorter lines as the distractors. We have different conditions varying the physical size, the distance among lines, and the background of lines to see which one affects us to perceive the size.",
        },
      ],
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
          education:
            "Graduated from Cognitive Systems (linguistics) program at UBC",
          email: "florazhi123@gmail.com",
          isCurrentMember: true,
        },
        {
          name: "Chenyi Zhao",
          position: "Volunteer",
          education:
            "Currently in Bachelor of Science (Mathematics program) at UBC",
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
          education:
            "Currently in Bachelor of Science (Cognitive Systems program) at UBC",
          email: "jennyma2478@gmail.com",
          isCurrentMember: true,
        },
      ],
      publications: [
        {
          name: "Visual search has no memory (1998)",
          citation:
            "Horowitz, T. S., & Wolfe, J. M. (1998). Visual search has no memory. Nature, 394(6693), 575-577. http://www.nature.com/nature/journal/v394/n6693/full/394575a0.html",
          link: "http://www.nature.com/nature/journal/v394/n6693/full/394575a0.html",
        },
        {
          name: "Effects of 2D geometric transformations on visual memory (2006)",
          citation:
            "Lam, H., Rensink, R. A., & Munzner, T. (2006, July). Effects of 2D geometric transformations on visual memory. In Proceedings of the 3rd symposium on Applied perception in graphics and visualization (pp. 119-126). ACM. http://dl.acm.org/citation.cfm?id=1140515 ",
          link: "http://dl.acm.org/citation.cfm?id=1140515",
        },
        {
          name: "Perceptual invariance of nonlinear focus+ context transformations (2004)",
          citation:
            "Lau, K., Rensink, R. A., & Munzner, T. (2004, August). Perceptual invariance of nonlinear focus+ context transformations. In Proceedings of the 1st Symposium on Applied perception in graphics and visualization (pp. 65-72). ACM. http://www2.psych.ubc.ca/~rensink/publications/download/agvp-LRT.pdf",
          link: "http://www2.psych.ubc.ca/~rensink/publications/download/agvp-LRT.pdf  ",
        },
        {
          name: "The Invariance of Visual Search to Geometric Transformation (2004)",
          citation:
            "Rensink, R. (2004). The Invariance of Visual Search to Geometric Transformation. Journal of Vision, 4(8), 178. http://jov.arvojournals.org/article.aspx?articleid=2130823",
          link: "http://jov.arvojournals.org/article.aspx?articleid=2130823",
        },
      ],
      galleryList: [
        {
          img: it1,
          title: "Figure 1.1",
          description: "",
          cardType: "default",
        },
        {
          img: it2,
          title: "Figure 1.2",
          description: "",
          cardType: "default",
        },
      ],
      joinTeam: {
        whatWeDo:[]
      }
    },
    {
      name: "NCIS",
      description: {
        first:
          "Nautical Crime Investigation Services Corp. (NCIS) is a startup based in Vancouver. NCIS develops AI and hardware maritime defence technologies to detect and deter criminal activities at sea.",
        second:
          "Through its research and development process, NCIS embraces collaboration and partnerships between academia, industry, NGOs and government entities. We welcome applications from motivated students who are looking to apply their academic knowledge to finding real world solutions to this century’s number one problem in the oceans.",
      },
      joinTeam: {
        whatWeDo: [
          "We are currently recruiting for new members interested in joining this project. We have positions focusing on research, UX, and software development. If you feel that you would be a good fit, please take a look at the Get Involved section of our website for more information. Email us at vclmanager@gmail.com with your resume, a list of related academic courses you’ve taken, and a brief description of your interest in the project.",
        ],
      },
    },
  ];

  const curr_project: any = projects.find(
    (project) => project.name === match.params.project_id
  );

  if (!curr_project) {
    return <div>Selected project does not exist</div>;
  }

  let links: { title: string; ref: string }[] = PROJECT_NAV.map(
    (project_nav) => {
      return {
        title: project_nav.TITLE,
        ref: ROUTES.PROJECT.BASE + "/" + curr_project.name + project_nav.REF,
      };
    }
  );

  return (
    <div className={"project-page"}>
      <ProjectNavbar links={links} currProject={curr_project} match={match} />
    </div>
  );
};

export default ProjectWrapper;
