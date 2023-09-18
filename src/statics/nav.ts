import ROUTES from "./routes";
import TEXT from "./text";

require('dotenv').config();

const IS_WIP = process.env.REACT_APP_WIP === 'true';

const baseNav = [
	{
	  TITLE: TEXT.PAGE_TITLES.HOME,
	  REF: ROUTES.HOME
	},
	{
	  TITLE: TEXT.PAGE_TITLES.PROJECTS,
	  REF: ROUTES.PROJECT.BASE
	},
	{
	  TITLE: TEXT.PAGE_TITLES.PEOPLE,
	  REF: ROUTES.PEOPLE
	},
	{
	  TITLE: TEXT.PAGE_TITLES.GET_INVOLVED,
	  REF: ROUTES.GET_INVOLVED
	},
	...(!IS_WIP
	  ? [
		  {
			TITLE: TEXT.PAGE_TITLES.TIMELINE,
			REF: ROUTES.TIMELINE
		  },
		  {
			TITLE: TEXT.PAGE_TITLES.RESOURCES,
			REF: ROUTES.RESOURCES
		  }
		]
	  : [])
  ];
  
  const NAV = baseNav;
  
export default NAV;