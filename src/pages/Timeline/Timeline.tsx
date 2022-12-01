import React from "react";
import './Timeline.css';

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
        <div  className="searchBarBadge" >
          <Box
            className="searchBarRounded"
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
                fullWidth
                id="inputRounded"
                className="inputRounded"
                variant="outlined"
                defaultValue="Search by keyword"
                InputProps={{
                  startAdornment: (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                      }}
                    >
                      <Box sx={{ my: 2, ml: 3 }} >
                        <IconButton><SearchIcon />
                        </IconButton>
                      </Box>
                      <Box sx={{ mx: 5 }}>
                        <h2 className="icon icon--spacer">|</h2>
                      </Box>
                    </Box>
                  ),
                }}
              />
          </Box>
        </div>
      </div>
    );
};

export default Timeline;
