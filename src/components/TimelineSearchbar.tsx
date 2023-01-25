import React from "react";
import './TimelineSearchbar.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import {ReactComponent as SearchIcon} from '@statics/images/search-icon.svg';

interface TimelineSearchbarProps {}

const TimelineSearchbar: React.FC<TimelineSearchbarProps> = (props) => {

    return(
        <div  className="TimelineSearchbar" >
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
                sx={{ input: { color: 'rgba(47, 47, 47, 0.8)' }}}
                onFocus={(e) => e.target.value = ""}
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
                      <Box sx={{  ml: 2 }} >
                        <IconButton><SearchIcon />
                        </IconButton>
                      </Box>
                      <Box sx={{ mt: 1, mx: 2 }}>
                        <div className="">|</div>
                      </Box>
                    </Box>
                  ),
                }}
              />
          </Box>
        </div>
    );
};


export default TimelineSearchbar;
