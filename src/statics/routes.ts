const ROUTES = {
  HOME: '/',
  TIMELINE: '/timeline',
  TIMELINE_CREATE: '/timeline/create',
  TIMELINE_EDIT: '/timeline/:timeline_id/edit',
  TIMELINE_ADD: '/timeline/add',
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
  PROJECT_PUBLICATIONS: '/publications',
  SUBPAGE1: '/subpage1',
  SUBPAGE2: '/subpage2'
} as const;

export default ROUTES;
