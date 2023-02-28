import React from "react";
import './TimelineSearchbar.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import {ReactComponent as SearchIcon} from '@statics/images/search-icon.svg';
import { useState } from "react";
import { SnapShot } from "@pages/Timeline/Timeline";
import { filter } from "lodash";

interface TimelineSearchbarProps {
  commits: Array<SnapShot>;
  setCommits(arg: Array<SnapShot>): void;
  allCommits: Array<SnapShot>;
}

const TimelineSearchbar: React.FC<TimelineSearchbarProps> = (props) => {
  
  let [keyword, setKeyword] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    console.log(`This is the current keyword ${keyword}`);
    filterCommits(props.allCommits, keyword);
  }

  // filter commits based on keywords, setCommits to present real-time changes
  const filterCommits = (commits: Array<SnapShot>, key: string) => {
    let currCommits = commits.filter(commit => commit.title.includes(key) || commit.description.includes(key));
    props.setCommits(currCommits);
  }

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
                onChange={handleChange}
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
