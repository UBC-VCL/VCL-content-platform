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
  },

  PROJECT_NAV: {
      PROJECT_DESCRIPTION: 'Project Description',
      JOIN_THE_TEAM: 'Join the Team',
      RESOURCES: 'Resources',
      TEAM: 'Team',
      CONTACT: 'Contact',
  },

  ALERTS: {
    AUTH_SUCCESS: 'Authentication successful.',
    AUTH_FAILED: 'Authentication failed.',
    LOGIN_SUCCESS: 'Successfully logged in.',
    LOGOUT_SUCCESS: 'Successfully logged out.',
  },

  LAB_INFO: {
      TEL: '604 822 9653',
      FAX: '604 822 6923',
      EMAIL: 'vclmanager@gmail.com',
      DRRENSINK_CONTACT: 'rensink@psych.ubc.ca',
      CAMPUS: 'Vancouver Campus'
  },

  LANDING_PAGE: {
      TITLE: 'Investigating Visual Intelligence',
      DESCRIPTION: 'What is the Visual Cognition Lab? We investigate visual intelligence – '+ 
                  'the way in which the human visual system uses the light entering the eyes to create a variety of perceptual experiences.',
      UBC_PAGE_BUTTON: 'Official UBC Home Page'
  },

  MISSION_STATEMENT: {
    TITLE: 'Mission Statement',
    LAB_GOALS: 'Description of the goals of the lab here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
} as const;

export default TEXT;
