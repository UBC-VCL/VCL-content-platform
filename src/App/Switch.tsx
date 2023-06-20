import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ROUTES from '@statics/routes';
import Timeline from '@pages/Timeline';
import Home from '@pages/Home';
import { ProjectWrapper, ProjectOverview } from '@pages/Project';
import About from '@pages/About';
import Resources from '@pages/Resources';
import TimelineEntry from "@pages/Timeline/TimelineEntry";
import EditTimelineEntry from '@pages/Timeline/EditTimelineEntry/EditTimelineEntry';
import GetInvolved from '@pages/GetInvolved/GetInvolved';
import { useAppSelector } from '@redux/hooks';
import { selectIsLoggedIn } from '@redux/slices/AuthRedux';


const AppSwitch = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.TIMELINE} component={Timeline} />
      <Route exact path={ROUTES.TIMELINE_CREATE} component={TimelineEntry}/>
      <Route exact path={ROUTES.TIMELINE_EDIT} component={EditTimelineEntry}/>
      <Route exact path={ROUTES.PROJECT.BASE} component={ProjectOverview} />
      <Route path={ROUTES.PROJECT.PATH} component={ProjectWrapper} />
      <Route exact path={ROUTES.ABOUT} component={About} />
      <Route exact path={ROUTES.RESOURCES}> 
        { isLoggedIn ? <Resources /> : <Redirect to={ROUTES.HOME} /> }
      </Route>
      <Route exact path={ROUTES.GET_INVOLVED} component={GetInvolved} />
    </Switch>
  );
}

export default AppSwitch;
