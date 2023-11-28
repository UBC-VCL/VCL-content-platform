import { Switch, Route } from "react-router-dom";
import ROUTES from "@statics/routes";
import { DefaultTimeline } from "@pages/Timeline";
import Home from "@pages/Home";
import { ProjectWrapper, ProjectOverview } from "@pages/Project";
import ProjectV2Wrapper from "@pages/ProjectV2/Wrapper/ProjectV2Wrapper";
import Resources from "@pages/Resources";
import TimelineEntry from "@pages/Timeline/TimelineEntry";
import EditTimelineEntry from "@pages/Timeline/EditTimelineEntry/EditTimelineEntry";
import AddTimelineEntry from "@pages/Timeline/AddTimelineEntry/AddTimelineEntry";
import GetInvolved from "@pages/GetInvolved/GetInvolved";
import { useAppSelector } from "@redux/hooks";
import { selectIsLoggedIn } from "@redux/slices/AuthRedux";
import People from "@pages/People/People";
require("dotenv").config();

const IS_WIP = process.env.REACT_APP_WIP == "development";

const AppSwitch = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.PROJECT.BASE} component={ProjectOverview} />
      <Route exact path={ROUTES.PROJECT.BASE2} component={ProjectOverview} />
      <Route path={ROUTES.PROJECT.PATH} component={ProjectWrapper} />
      <Route exact path={ROUTES.GET_INVOLVED} component={GetInvolved} />
      <Route exact path={ROUTES.PEOPLE} component={People} />
      <Route exact path={ROUTES.RESOURCES} component={Resources} />
      <Route path={ROUTES.PROJECT.PATH2} component={ProjectV2Wrapper}/>
      
      {IS_WIP && (
        <>
          <Route exact path={ROUTES.TIMELINE} component={DefaultTimeline} />
          <Route exact path={ROUTES.TIMELINE_CREATE} component={TimelineEntry} />
          <Route exact path={ROUTES.TIMELINE_EDIT} component={EditTimelineEntry} />
        </>
      )}
      {isLoggedIn && (
        <Route exact path={ROUTES.TIMELINE_ADD} component={AddTimelineEntry} />
      )}
      {/* <Route path="*" 
      render={() => {
        return (
          <p>
            DOES NOT EXIST
          </p>
        )
      }}/> */}
    </Switch>
  );
};

export default AppSwitch;
