import React from 'react'
import "./TimelineFilterContainer.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Button, Typography} from "@mui/material";
import { CONSTANTS } from '@statics';
import FilterDropdown from "@components/FilterDropdown/FilterDropdown";

const projects = {
    'name': 'Project', 
    'options': ['Correlation', 'NOVA', 'SHIVA', 'IDEO', 'Projects'],
};
const categories = {
    'name': 'Category', 
    'options': ['Website', 'Meeting', 'Workshop'],
};
const dates = {
    'name': 'Date', 
    'options': ['Last day', 'Last month', 'Last year'],
};
const authors = {
    'name': 'Author', 
    'options': ['Author One', 'Author two', 'Author three'],
};

const TimelineFilterContainer = () => {
    {/* TODO: refactor to fetch data from backend, currently hard-coded */}
    return (
        <div className='timeline-filter-container'>
            <Box sx={{ flexGrow: 1, justifyContent: "center"}}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <FilterDropdown list={projects} />
                    </Grid>
                    <Grid item xs={3}>
                        <FilterDropdown list={categories} />
                    </Grid>
                    <Grid item xs={3}>
                        <FilterDropdown list={dates} />
                    </Grid>
                    <Grid item xs={3}>
                        <FilterDropdown list={authors} />
                    </Grid>
                </Grid>
            </Box>
            <div className='add-update-button'>
                <Button
                    // onClick={formik.handleSubmit}
                    variant="outlined" 
                    style={{
                        backgroundColor: "#4a668a",
                        color: "white",
                        width: 160,
                        padding: 11,
                        textTransform: 'none',
                        fontSize: 16,
                    }}
                >
                    Add Update
                </Button>
            </div>
        </div>
    )
}

export default TimelineFilterContainer;

