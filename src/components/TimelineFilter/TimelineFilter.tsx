import React from "react";
import './TimelineFilter.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface TimelineFilterProps {}

const dates = [
  'last three days',
  'last week',
  'last month',
  'last year',
];

const authors = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const projects = [
  'Correlation',
  'NOVA',
  'Perceptual Modes',
  'IDEO',
  'IT',
  'Image Transitions',
  'Dormant',
];

const categories = [
  'Workshops',
  'Conditions',
  'Hiring',
  'Meetings',
  'Guest Speaker',
  'Resources',
];

const TimelineFilter: React.FC<TimelineFilterProps> = (props) => {

  const [project, setProject] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleChangeDate = (event: SelectChangeEvent) => {
    setDate(event.target.value);
  };

  const handleChangeProject = (event: SelectChangeEvent) => {
    setProject(event.target.value);
  };

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleChangeAuthor = (event: SelectChangeEvent) => {
    setAuthor(event.target.value);
  };

  return (
    <div className="TimelineFilter">
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Grid container rowSpacing={1} columnSpacing={{ sm: 11, md: 2 }}>

                <Grid xs={2}>
                    <FormControl variant="standard" sx={{ m: 2, width: "150px" }}>
            <div className="filterOption">
                <div className="filterLabel">
                    Project: 
                </div>
                <Select
                    value={project}
                    onChange={handleChangeProject}
                    displayEmpty
                    disableUnderline
                    sx={{ minWidth: "100px", maxWidth: "150px" }}
                >
                    <MenuItem value="">
                    <em>All</em>
                    </MenuItem>
                    {projects.map((option) => (
                    <MenuItem
                        key={option}
                        value={option}
                    >
                        {option}
                    </MenuItem>
                    ))}
                </Select>
            </div>
                    </FormControl >
                </Grid>

                <Grid xs={1}>
                    <Box sx={{ mx: 2, display: 'flex', justifyContent: 'center' }}>
                        <h2 className="icon icon--spacer">|</h2>
                    </Box>
                </Grid>

                <Grid xs={2}>
                    <FormControl variant="standard" sx={{ m: 2, width: "150px" }}>
        <div className="filterOption">
            <div className="filterLabel">
                Project: 
            </div>
            <Select
                value={project}
                onChange={handleChangeProject}
                displayEmpty
                disableUnderline
                sx={{ minWidth: "100px", maxWidth: "150px" }}
            >
                <MenuItem value="">
                <em>All</em>
                </MenuItem>
                {projects.map((option) => (
                <MenuItem
                    key={option}
                    value={option}
                >
                    {option}
                </MenuItem>
                ))}
            </Select>
        </div>
                    </FormControl >
                </Grid>
                
                <Grid xs={1}>
                    <Box sx={{ mx: 2, display: 'flex', justifyContent: 'center' }}>
                        <h2 className="icon icon--spacer">|</h2>
                    </Box>
                </Grid>

                <Grid xs={2}>
                    <FormControl variant="standard" sx={{ m: 2, width: "150px" }}>
            <div className="filterOption">
                <div className="filterLabel">
                    Project: 
                </div>
                <Select
                    value={project}
                    onChange={handleChangeProject}
                    displayEmpty
                    disableUnderline
                    sx={{ minWidth: "100px", maxWidth: "150px" }}
                >
                    <MenuItem value="">
                    <em>All</em>
                    </MenuItem>
                    {projects.map((option) => (
                    <MenuItem
                        key={option}
                        value={option}
                    >
                        {option}
                    </MenuItem>
                    ))}
                </Select>
            </div>
                    </FormControl >
                </Grid>
                
                <Grid xs={1}>
                    <Box sx={{ mx: 2, display: 'flex', justifyContent: 'center' }}>
                        <h2 className="icon icon--spacer">|</h2>
                    </Box>
                </Grid>

                <Grid xs={2}>
                    <FormControl variant="standard" sx={{ m: 2, width: "150px" }}>
        <div className="filterOption">
            <div className="filterLabel">
                Project: 
            </div>
            <Select
                value={project}
                onChange={handleChangeProject}
                displayEmpty
                disableUnderline
                sx={{ minWidth: "100px", maxWidth: "150px" }}
            >
                <MenuItem value="">
                <em>All</em>
                </MenuItem>
                {projects.map((option) => (
                <MenuItem
                    key={option}
                    value={option}
                >
                    {option}
                </MenuItem>
                ))}
            </Select>
        </div>
                    </FormControl >
                </Grid>
            </Grid>
        </Box>

      {/* <FormControl variant="standard" sx={{ m: 1, width: "150px" }}>
        <div className="filterOption">
            <div className="filterLabel">
                Project: 
            </div>
            <Select
                value={project}
                onChange={handleChangeProject}
                displayEmpty
                disableUnderline
                sx={{ minWidth: "100px", maxWidth: "150px" }}
            >
                <MenuItem value="">
                <em>All</em>
                </MenuItem>
                {projects.map((option) => (
                <MenuItem
                    key={option}
                    value={option}
                >
                    {option}
                </MenuItem>
                ))}
            </Select>
        </div>
      </FormControl >

      <Box sx={{ mx: 5, mt: 1 }}>
        <h2 className="icon icon--spacer">|</h2>
      </Box>
      
      <FormControl variant="standard" sx={{ m: 1, width: "150px" }}>
        <div className="filterOption">
            <div className="filterLabel">
                Category: 
            </div>
            <Select
            value={category}
            onChange={handleChangeCategory}
            displayEmpty
            disableUnderline
            sx={{ minWidth: "100px", maxWidth: "150px" }}
            >
            <MenuItem value="">
                <em>All</em>
            </MenuItem>
            {categories.map((option) => (
                <MenuItem
                key={option}
                value={option}
                //   style={getStyles(option, date, theme)}
                >
                {option}
                </MenuItem>
            ))}
            </Select>
        </div>
      </FormControl >

      <Box sx={{ mx: 5, mt: 1 }}>
        <h2 className="icon icon--spacer">|</h2>
      </Box>
      
      <FormControl variant="standard" sx={{ m: 1, width: "150px" }}>
        <div className="filterOption">
            <div className="filterLabel">
                Date:
            </div>
            <Select
                value={date}
                onChange={handleChangeDate}
                displayEmpty
                disableUnderline
                sx={{ minWidth: "100px", maxWidth: "150px" }}
                >
                <MenuItem value="">
                    <em>All</em>
                </MenuItem>
                {dates.map((option) => (
                    <MenuItem
                    key={option}
                    value={option}
                    >
                    {option}
                    </MenuItem>
                ))}
            </Select>
        </div>
      </FormControl >

      <Box sx={{ mx: 5, mt: 1 }}>
        <h2 className="icon icon--spacer">|</h2>
      </Box>
      
      <FormControl variant="standard" sx={{ m: 1, width: "150px" }}>
        <div className="filterOption">
            <div className="filterLabel">
                Author:
            </div>
            <Select
                value={author}
                onChange={handleChangeAuthor}
                displayEmpty
                disableUnderline
                sx={{ minWidth: "100px", maxWidth: "150px" }}
            >
                <MenuItem value="">
                    <em>All</em>
                </MenuItem>
                {authors.map((option) => (
                    <MenuItem
                    key={option}
                    value={option}
                    >
                    {option}
                    </MenuItem>
                ))}
            </Select>
        </div>
      </FormControl > */}

    </div>
    );
};


export default TimelineFilter;

