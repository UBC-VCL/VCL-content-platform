import React from "react";
import './Timeline.css';
import {Button, Typography} from "@mui/material";
import TimelineSearchbar from '@components/TimelineSearchbar';
import TimelineFilter from '@components/TimelineFilter';
import TimelineEntry from './TimelineEntry';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import {ReactComponent as SearchIcon} from '@statics/images/search-icon.svg';

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
			  <div className="main-body">
          <div className="main-body-filter">
          <TimelineFilter />

            <Button
              // onClick={formik.handleSubmit}
              variant="outlined" style={{
              backgroundColor: "#1E5487",
              color: "white",
              width: 200,
              height: "50px",
              marginLeft: 20
            }}>
                Add Update
            </Button>
          </div>

        </div>
      </div>
    );
};

export default Timeline;
