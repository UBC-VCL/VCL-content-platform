import constants from './constants';

const TEXT = {
  COMMON: {
    SUBMIT: 'Submit',
    BACK: 'Back',
    NEXT: 'Next',
    TITLE: 'UBC Visual Cognition Lab',
    LOGIN: 'Login',
    LOGOUT: 'Logout',
  },

  LOGIN: {
    TITLE:
      'Login to gain edit permissions. Please contact Tech Manager to create account.',
    USERNAME: 'Username',
    USERNAME_EMPTY_ERROR: 'Username is required',
    USERNAME_LENGTH_ERROR: `Minimum ${constants.MIN_USERNAME_LENGTH} characters`,
    PASSWORD: 'Password',
    PASSWORD_EMPTY_ERROR: 'Password is required',
    PASSWORD_LENGTH_ERROR: `Minimum ${constants.MIN_PASSWORD_LENGTH} characters`,
  },

  PAGE_TITLES: {
    NAVIGATE: 'Navigate',
    HOME: 'Home',
    TIMELINE: 'Timeline',
    PROJECTS: 'Projects',
    OVERVIEW: 'Overview',
    ABOUT: 'About',
    RESOURCES: 'Resources',
    JOIN_THE_TEAM: 'Get involved'
  },

  PROJECT_NAV: {
      PROJECT_DESCRIPTION: 'Project Description',
      JOIN_THE_TEAM: 'Join the Team',
      RESOURCES: 'Resources',
      TEAM_AND_ALUMNI: 'Team & Alumni',
      CONTACT: 'Contact',
  },

  PROJECT_NAMES: {
    CORRELATION: 'Correlation',
    IDEO: 'IDEO',
    IMG_TRANSITIONS: 'Image Transitions',
    NOVA: 'NOVA',
    PERCEPTUAL_MODES: 'Perceptual Modes',
},

  ALERTS: {
    AUTH_SUCCESS: 'Authentication successful.',
    AUTH_FAILED: 'Authentication failed.',
    LOGIN_SUCCESS: 'Successfully logged in.',
    LOGOUT_SUCCESS: 'Successfully logged out.',
  },

  LAB_INFO: {
      TEL_TEXT: 'Tel',
      TEL: '604 822 9653',
      FAX_TEXT: 'Fax',
      FAX: '604 822 6923',
      EMAIL: 'vclmanager@gmail.com',
      LAB_TEXT: 'Lab',
      DR_RENSINK: 'Dr. Rensink',
      DRRENSINK_CONTACT: 'rensink@psych.ubc.ca',
      ADMIN_CONTACT: {
        DANIEL: '',
        SARA: '',
        SOGOL: ''
      },
      CAMPUS: 'Vancouver Campus',
      ADDRESS: '3204 - 2136 West Mall Vancouver, BC CANADA V6T 1Z4',
      HOURS: {
        WEEKDAYS: 'Weekdays: 9AM-5PM',
        WEEKENDS: 'Closed'
      }
  },

  LANDING_PAGE: {
    TITLE: 'Investigating Visual Intelligence',
    DESCRIPTION: 'What is the Visual Cognition Lab? We investigate visual intelligence – '+ 
                'the way in which the human visual system uses the light entering the eyes to create a variety of perceptual experiences.',
    UBC_PAGE_BUTTON: 'Official UBC Home Page',      
    MISSION_STATEMENT: {
      TITLE: 'Mission Statement',
      LAB_GOALS: 'Description of the goals of the lab here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  },

  ABOUT_PAGE: {
    MAIN: {
      DESCRIPTION: {
        P1: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        P2: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
      },
      PHILOSOPHY: {
        HEADER: 'Our Philosophy',
        P1: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        P2: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
      },
      RESPONSIBILITIES: {
        HEADER: 'Our Responsibilities'
      },
      VALUES: {
        HEADER: 'Our Core Values'
      }
    },
    BP_PLACEHOLDER: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    GAIN_SECTION: {
      HEADER: 'What can you gain?',
      DIRECTED_STUDIES: {
        HEADER: 'Directed Studies',
        DESCRIPTION: 'Description of how the lab can help COGS students with this project'
      },
      RESEARCH_EXP: {
        HEADER: 'Research Experience',
        DESCRIPTION: 'Description of how the lab can help COGS students with this project'
      },
      GRADUATE_STUDENTS: {
        HEADER: 'Graduate Students',
        DESCRIPTION: 'Description of how the lab can help COGS students with this project'
      },
      GLOBAL_RESEARCH: {
        HEADER: 'Global Research',
        DESCRIPTION: 'Description of how the lab can help COGS students with this project'
      }
    }
  },
  PROJECT_JOIN: {
    HOME_SECTION: {
      TITLE:"Join our Team",
      INTEREST:"Interested in research? Good news, we're always looking for new co-pilots.",
      COPILOT_DESCRIPTION: "Co-Pilots sign a contract with the lab that lasts for a school term, with the possibility for renewal. Co-Pilots are assigned to a particular project team based on their interests, but have the freedom to explore different projects.",
      RESEARCH_BACKGROUND: "No background in research is needed, and co-pilots have the flexibility of helping out whenever they want!",
      APPPLICATION_INSTRUCTION:"Application Instructions"
    },
    WHAT_WE_DO:{
      TITLE:"What We Do",
      DESCRIPTION_1:"In a scatter plot, data is translated into a graphic form by placing points on a cartesian (x-y) coordinate plane according to their values on each variable. Correlation in a scatter-plot corresponds to the degree to which the points form a straight line.",
      DESCRIPTION_2:"Scatter plots represent the variability in a data set with a single visual variable, position, but there are others (ie: size, color, texture, and brightness) which could be used instead. For example, consider the two ring strip-plots below. They represent the same data-set as the scatter plots above, but they use ring-size rather than y-position to represent variability in one of the variables."
    }, 
    YOU_MIGHT_LIKE:{
      TITLE:"You might like this if you are..."
    },
    PAST_POSITIONS_AND_PROJECTS:{
      TITLE:"Past Positions and Projects",
      VCL_WEB_APP:{
        TITLE:"VCL Web-App",
        DESCRIPTION:"Include a short description of what this project is about, what roles people took on, etc."
      },
      PROJECT1:{
        TITLE:"Project 1",
        DESCRIPTION:"Include a short description of what this project is about, what roles people took on, etc."
      },
      PROJECT2:{
        TITLE:"Project 2",
        DESCRIPTION:"Include a short description of what this project is about, what roles people took on, etc."
      }
    },
    WHAT_OUR_TEAM_SAY:{
      TITLE:"What our team members say"
    },
    APPLICATION_INSTRUCTIONS:{
      TITLE:"Application Instructions",
      STEP1:{
        TITLE:"Step 1",
        TEXT:"Head over to the Orientation page to see if our lab philosophy matches yours"
      },
      STEP2:{
        TITLE:"Step 2",
        TEXT:"Email vclmanager@gmail.com with “VCL Co-Pilots” as subject, and include:",
        BULLET_POINTS:{
          BULLET_1:"Resume/CV",
          BULLET_2:"List of relevant courses you have taken so far",
          BULLET_3:"Research projects you’re interested in and why",
        }
      }
    }
  },
} as const;

export default TEXT;
