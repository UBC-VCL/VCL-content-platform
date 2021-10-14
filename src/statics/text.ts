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
    HOME: 'Home',
    TIMELINE: 'Timeline',
    PROJECTS: 'Projects',
    ABOUT: 'About',
    RESOURCES: 'Resources',
  },

  ALERTS: {
    AUTH_SUCCESS: 'Authentication successful.',
    AUTH_FAILED: 'Authentication failed.',
    LOGIN_SUCCESS: 'Successfully logged in.',
    LOGOUT_SUCCESS: 'Successfully logged out.',
  },
} as const;

export default TEXT;
