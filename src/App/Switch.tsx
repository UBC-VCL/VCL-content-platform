import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '@statics/routes';
import Timeline from '@pages/Timeline';
import Home from '@pages/Home';
import { ProjectWrapper, ProjectOverview } from '@pages/Project';
import Resources from '@pages/Resources';
import TimelineEntry from "@pages/Timeline/TimelineEntry";
import EditTimelineEntry from '@pages/Timeline/EditTimelineEntry/EditTimelineEntry';
import GetInvolved from '@pages/GetInvolved/GetInvolved';

const AppSwitch = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.TIMELINE} component={Timeline} />
      <Route exact path={ROUTES.TIMELINE_CREATE} component={TimelineEntry}/>
      <Route exact path={ROUTES.TIMELINE_EDIT} component={EditTimelineEntry}/>
      <Route exact path={ROUTES.PROJECT.BASE} component={ProjectOverview} />
      <Route path={ROUTES.PROJECT.PATH} component={ProjectWrapper} />
      <Route exact path={ROUTES.RESOURCES} component={Resources} />
      <Route exact path={ROUTES.GET_INVOLVED} component={GetInvolved} />
    </Switch>
  );
}

export default AppSwitch;
