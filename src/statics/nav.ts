import ROUTES from "./routes";
import TEXT from "./text";

const NAV = [
	{
		TITLE: TEXT.PAGE_TITLES.HOME,
		REF: ROUTES.HOME
	},
	{
		TITLE: TEXT.PAGE_TITLES.TIMELINE,
		REF: ROUTES.TIMELINE
	},
	{
		TITLE: TEXT.PAGE_TITLES.PROJECTS,
		REF: ROUTES.PROJECT.BASE
	},
	{
		TITLE: TEXT.PAGE_TITLES.RESOURCES,
		REF: ROUTES.RESOURCES
	},
	{
		TITLE: TEXT.PAGE_TITLES.GET_INVOLVED,
		REF: ROUTES.GET_INVOLVED
	}
];

export default NAV;
