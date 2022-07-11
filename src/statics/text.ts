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
      TEAM: 'Team',
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
      TEL: '604 822 9653',
      FAX: '604 822 6923',
      EMAIL: 'vclmanager@gmail.com',
      DRRENSINK_CONTACT: 'rensink@psych.ubc.ca',
      CAMPUS: 'Vancouver Campus'
  }
} as const;

export default TEXT;
