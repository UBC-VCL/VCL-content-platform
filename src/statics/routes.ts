require('dotenv').config();

const IS_WIP = process.env.REACT_APP_WIP === 'true';

const baseRoutes = {
  HOME: '/',
  PROJECT: {
    PATH: '/projects/:project_id/',
    BASE: '/projects',
    OVERVIEW: '/projects/overview',
  },
  PROJECT_DESCRIPTION: '/',
  JOIN_OUR_TEAM: '/join',
  TEAM: '/team',
  CONTACT: '/contact',
  ABOUT: '/about',
  GET_INVOLVED: '/get_involved',
  PROJECT_PUBLICATIONS: '/publications',
  PEOPLE: '/people',
} as const;

const timelineRoutes = {
  RESOURCES: '/resources',
  TIMELINE: '/timeline',
  TIMELINE_CREATE: '/timeline/create',
  TIMELINE_EDIT: '/timeline/:timeline_id/edit',
  TIMELINE_ADD: '/timeline/add',
  PROJECT_TIMELINE: '/timeline',
} as const;

const ROUTES = {
  ...baseRoutes,
  ...(!IS_WIP? timelineRoutes : {}), // Include timeline routes conditionally
} as const;


export default ROUTES;
