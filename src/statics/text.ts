import constants from "./constants";

const TEXT = {
  COMMON: {
    SUBMIT: "Submit",
    BACK: "Back",
    NEXT: "Next",
    TITLE: "UBC Visual Cognition Lab",
    LAB_TITLE_ONLY: "Visual Cognition Lab",
    LOGIN: "Login",
    LOGOUT: "Logout",
  },

  LOGIN: {
    TITLE:
      "Login to gain edit permissions. Please contact Tech Manager to create account.",
    USERNAME: "Username",
    USERNAME_EMPTY_ERROR: "Username is required",
    USERNAME_LENGTH_ERROR: `Minimum ${constants.MIN_USERNAME_LENGTH} characters`,
    PASSWORD: "Password",
    PASSWORD_EMPTY_ERROR: "Password is required",
    PASSWORD_LENGTH_ERROR: `Minimum ${constants.MIN_PASSWORD_LENGTH} characters`,
  },

  PAGE_TITLES: {
    NAVIGATE: "Navigate",
    HOME: "Home",
    TIMELINE: "Timeline",
    PROJECTS: "Projects",
    OVERVIEW: "Overview",
    ABOUT: "About",
    RESOURCES: "Resources",
    GET_INVOLVED: "Get Involved",
    PROJECT_TIMELINE: "Timeline",
    PEOPLE: "People",
  },

  PROJECT_NAV: {
    PROJECT_DESCRIPTION: "Project Description",
    JOIN_OUR_TEAM: "Join Our Team",
    RESOURCES: "Resources",
    TEAM_AND_ALUMNI: "Team & Alumni",
    CONTACT: "Contact",
    PROJECT_TIMELINE: "Timeline",
  },

  PROJECT_NAMES: {
    CORRELATION: "Correlation",
    IDEO: "Ideo",
    IMG_TRANSITIONS: "Image Transitions",
    NOVA: "NOVA",
    SHIVA: "SHIVA",
    NCIS: "NCIS",
  },

  ALERTS: {
    AUTH_SUCCESS: "Authentication successful.",
    AUTH_FAILED: "Authentication failed.",
    LOGIN_SUCCESS: "Successfully logged in.",
    LOGOUT_SUCCESS: "Successfully logged out.",
  },

  LAB_INFO: {
    TEL_TEXT: "Tel",
    TEL: "604 822 9653",
    FAX_TEXT: "Fax",
    FAX: "604 822 6923",
    EMAIL: "vclmanager@gmail.com",
    LAB_TEXT: "Lab",
    DR_RENSINK: "Dr. Rensink",
    DRRENSINK_CONTACT: "rensink@psych.ubc.ca",
    ADMIN_CONTACT: {
      DANIEL: "",
      SARA: "",
      SOGOL: "",
    },
    CAMPUS: "Vancouver Campus",
    ADDRESS_LINE_ONE: "3204 - 2136 West Mall",
    ADDRESS_LINE_TWO: "Vancouver, BC Canada V6T 1Z4",
    HOURS: {
      WEEKDAYS: "Weekdays: 9AM-5PM",
      WEEKENDS: "Closed",
    },
  },

  LANDING_PAGE: {
    TITLE: "Investigating Visual Intelligence",
    DESCRIPTION:
      "What is the Visual Cognition Lab? We investigate visual intelligence – " +
      "the way in which the human visual system uses the light entering the eyes to create a variety of perceptual experiences.",
    UBC_PAGE_BUTTON: "Official UBC Home Page",
    MISSION_STATEMENT: {
      TITLE: "Mission Statement",
      LAB_GOALS:
        "Our mission is to provide opportunities to learn about scientific research in a positive working environment that encourages open lines of communication, group cohesion, and most of all, respect for everyone. We strive towards personal and professional excellence in pursuit of scientific knowledge. Instead of perfection, we value constant evolution towards improvement, both on an individual and a lab-wide basis – and in doing so, we aim to become a role model for other labs by setting the standards of a professional research laboratory.",
    },
    CURRENT_PROJECTS: {
      TITLE: "Current Projects",
    },
  },

  TIMELINE_PAGE: {
    TITLE: "Timeline",
    SUBHEADER: "Browse project history and detailed updates",
    ERROR_MESSAGE: "Something went wrong :(",
  },

  ABOUT_PAGE: {
    MAIN: {
      DESCRIPTION: {
        P1: "The UBC Visual Cognition Lab is a vision science lab in the Psychology Department of the University of British Columbia. Dr. Ronald A. Rensink is the principal investigator. We investigate visual intelligence – the way in which the human visual system uses the light entering the eyes to create a variety of perceptual experiences. We are interested both in exploring the mechanisms that carry this out, and the ways in which this knowledge can help with the design of effective visual displays.",
      },
      PHILOSOPHY: {
        HEADER: "Our Philosophy",
        P1: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        P2: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      },
      RESPONSIBILITIES: {
        HEADER: "Our Responsibilities",
        SUBHEADER:
          "As a member of the lab, you will be asked to think critically, show initiative in research, and actively participate in the lab. You should respond to your project leader's directives - they are also responsible for supporting you in your role. Your personal responsibilities include:",

        R1: "Develop a deep understanding of your project and tasks",
        R2: "Collect high-quality data",
        R3: "Treat everyone with respect and help others in the lab whenever needed",
        R4: "Keep yourself informed about lab-related issues",
        R5: "Attend lab meetings whenever possible",
      },
      VALUES: {
        HEADER: "Our Core Values",
        VALUE_1: "Treating everyone with respect",
        VALUE_2: "Maintaining a positive environment",
        VALUE_3: "Constant evolution in pursuit of scientific knowledge",
      },
    },
    BP_PLACEHOLDER:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    GAIN_SECTION: {
      HEADER: "Who is this for?",
      DIRECTED_STUDIES: {
        HEADER: "Directed Studies",
        DESCRIPTION:
          "Take ownership of your own project. Typically for COGS 402, but we welcome other forms of directed studies too",
      },
      RESEARCH_EXP: {
        HEADER: "Research Experience",
        DESCRIPTION: "If you want to obtain professional research experience",
      },
      GRADUATE_STUDENTS: {
        HEADER: "Graduate Students",
        DESCRIPTION:
          "Complete a Master's thesis or PhD dissertation related directly to the lab's research goals",
      },
      GLOBAL_RESEARCH: {
        HEADER: "Global Research",
        DESCRIPTION:
          "Collaborate with other cutting-edge labs researching visual cognition",
      },
    },
  },
  PROJECT_JOIN: {
    HOME_SECTION: {
      TITLE: "Join our Team",
      INTEREST:
        "Interested in research? Good news, we're always looking for new co-pilots.",
      COPILOT_DESCRIPTION:
        "Co-Pilots sign a contract with the lab that lasts for a school term, with the possibility for renewal. Co-Pilots are assigned to a particular project team based on their interests, but have the freedom to explore different projects.",
      RESEARCH_BACKGROUND:
        "No background in research is needed, and co-pilots have the flexibility of helping out whenever they want!",
      APPPLICATION_INSTRUCTION: "Application Instructions",
    },
    WHAT_WE_DO: {
      TITLE: "What We Do",
      DESCRIPTION_1:
        "In a scatter plot, data is translated into a graphic form by placing points on a cartesian (x-y) coordinate plane according to their values on each variable. Correlation in a scatter-plot corresponds to the degree to which the points form a straight line.",
      DESCRIPTION_2:
        "Scatter plots represent the variability in a data set with a single visual variable, position, but there are others (ie: size, color, texture, and brightness) which could be used instead. For example, consider the two ring strip-plots below. They represent the same data-set as the scatter plots above, but they use ring-size rather than y-position to represent variability in one of the variables.",
    },
    YOU_MIGHT_LIKE: {
      TITLE: "You might like this if you like...",
    },
    PAST_POSITIONS_AND_PROJECTS: {
      TITLE: "Past Positions and Projects",
      VCL_WEB_APP: {
        TITLE: "VCL Web-App",
        DESCRIPTION:
          "Include a short description of what this project is about, what roles people took on, etc.",
      },
      PROJECT1: {
        TITLE: "Project 1",
        DESCRIPTION:
          "Include a short description of what this project is about, what roles people took on, etc.",
      },
      PROJECT2: {
        TITLE: "Project 2",
        DESCRIPTION:
          "Include a short description of what this project is about, what roles people took on, etc.",
      },
    },
    MEMBER_TESTIMONIALS: {
      TITLE: "What our team members say",
    },
    APPLICATION_INSTRUCTIONS: {
      TITLE: "Application Instructions",
      STEP1: {
        TITLE: "Step 1",
        TEXT: "Head over to the Orientation page to see if our lab philosophy matches yours",
      },
      STEP2: {
        TITLE: "Step 2",
        TEXT: "Email vclmanager@gmail.com with “VCL Co-Pilots” as subject, and include:",
        BULLET_POINTS: {
          BULLET_1: "Resume/CV",
          BULLET_2: "List of relevant courses you have taken so far",
          BULLET_3: "Research projects you’re interested in and why",
        },
      },
    },
  },
} as const;

export default TEXT;
