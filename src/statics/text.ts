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
  }
} as const;

export default TEXT;
