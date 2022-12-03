import React from "react";
import "./FilterDropdown.css";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CONSTANTS } from '@statics';

const projects = [
    'Correlation',
    'NOVA',
    'Perceptual Modes',
    'IDEO',
    'IT',
    'Image Transitions',
    'Dormant',
  ];

const FilterDropdown = () => {
    const [project, setProject] = React.useState('');

    const handleChangeProject = (event: SelectChangeEvent) => {
      setProject(event.target.value);
    };

    return (
        <div className='filter-dropdown'>
            <FormControl 
                variant="standard" 
                sx={{
                    maxWidth: 150
                }}
            >
                <div className="filterOption">
                    <div className="filterLabel">
                        Project: 
                    </div>
                    <Select
                        value={project}
                        onChange={handleChangeProject}
                        displayEmpty
                        disableUnderline
                        sx={{ width: 150, color: 'rgba(47, 47, 47, 0.8)'}}
                    >
                        <MenuItem value="">
                            All
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
        </div>
    )
}

export default FilterDropdown