import ROUTES from "./routes";
import TEXT from "./text";
require('dotenv').config();

const IS_WIP = process.env.REACT_APP_WIP;

const PROJECT_NAV = [
	{
		TITLE: TEXT.PROJECT_NAV.PROJECT_DESCRIPTION,
		REF: ROUTES.PROJECT_DESCRIPTION
	},
	{
		TITLE: TEXT.PROJECT_NAV.TEAM_AND_ALUMNI,
		REF: ROUTES.TEAM
	},
	{
		TITLE: TEXT.PROJECT_NAV.JOIN_OUR_TEAM,
		REF: ROUTES.JOIN_OUR_TEAM
	},
	... (!IS_WIP ?
		[{
			TITLE: TEXT.PROJECT_NAV.RESOURCES,
			REF: ROUTES.RESOURCES
		}] : []
	),
	{
		TITLE: TEXT.PROJECT_NAV.PROJECT_PUBLICATIONS,
		REF: ROUTES.PROJECT_PUBLICATIONS
	}

];

export default PROJECT_NAV;
