import React from 'react'
import "./TimelineFilterContainer.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {Button, Typography} from "@mui/material";
import { CONSTANTS } from '@statics';
import FilterDropdown from "@components/FilterDropdown/FilterDropdown";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const projects = [
    'Correlation',
    'NOVA',
    'Perceptual Modes',
    'IDEO',
    'IT',
    'Image Transitions',
    'Dormant',
  ];

const TimelineFilterContainer = () => {
    // const projects = useAppSelector(selectProjects);
    const [project, setProject] = React.useState('');

    const handleChangeProject = (event: SelectChangeEvent) => {
      setProject(event.target.value);
    };

    {/* TODO: refactor to fetch data from backend, currently hard-coded */}
    return (
        <div className='timeline-filter-container'>
            <div className='filter-dropdown-container'>
                <FilterDropdown />
                <FilterDropdown />
                <FilterDropdown />
                <FilterDropdown />
                {/* <FilterDropdown /> */}


                <div className='add-update-button'>
                    <Button
                        // onClick={formik.handleSubmit}
                        variant="outlined" 
                        style={{
                            backgroundColor: "#1E5487",
                            color: "white",
                            width: 150,
                        }}
                    >
                        Add Update
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TimelineFilterContainer;

