const ROUTES = {
  HOME: '/',
  TIMELINE: '/timeline',
  TIMELINE_CREATE: '/timeline/create',
  TIMELINE_EDIT: '/timeline/:timeline_id/edit',
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
  RESOURCES: '/resources',
  GET_INVOLVED: '/get_involved',
} as const;

export default ROUTES;
