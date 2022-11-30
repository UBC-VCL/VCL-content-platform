import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '@statics/routes';
import Timeline from '@pages/Timeline';
import Home from '@pages/Home';
import { ProjectWrapper, ProjectOverview } from '@pages/Project';
import About from '@pages/About';
import Resources from '@pages/Resources';
import TimelineEntry from "@pages/Timeline/TimelineEntry";
import EditTimelineEntry from '@pages/Timeline/EditTimelineEntry/EditTimelineEntry';

const AppSwitch = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.TIMELINE} component={Timeline} />
      <Route path={ROUTES.PROJECT.PATH} component={ProjectWrapper} />
      <Route exact path={ROUTES.PROJECT.BASE} component={ProjectOverview} />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.ABOUT} component={About} />
      <Route exact path={ROUTES.RESOURCES} component={Resources} />
      <Route exact path={ROUTES.TIMELINE_CREATE} component={TimelineEntry}/>
      <Route exact path={ROUTES.TIMELINE_EDIT} component={EditTimelineEntry}/>
    </Switch>
  );
}

export default AppSwitch;
