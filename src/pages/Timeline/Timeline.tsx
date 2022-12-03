import React from "react";
import './Timeline.css';
import {Button, Typography} from "@mui/material";
import TimelineSearchbar from '@components/TimelineSearchbar';
import TimelineFilter from '@components/FilterDropdown';
import TimelineEntry from './TimelineEntry';
import TimelineFilterContainer from "./TimelineFilterContainer";

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = (props) => {
  return (
      <div className="Timeline">
        <div className="header">
          <h1>
            TIMELINE
          </h1>
        </div>
        <div className='sub-header'>
          <p>Browse project history and detailed updates</p>
        </div>
        <TimelineSearchbar />
        {/* <FilterContainer /> */}
        <TimelineFilterContainer />
          <TimelineEntry />
      </div>
    );
};

export default Timeline;
