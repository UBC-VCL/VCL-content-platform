import React from 'react';
import './TimelineFilter.css';

import { Button } from "@mui/material";
import AuthorsFilter from '@components/FilterDropdown/AuthorsFilter';
import CategoriesFilter from '@components/FilterDropdown/CategoriesFilter';
import DateFilter from '@components/FilterDropdown/DateFilter';
import ProjectsFilter from '@components/FilterDropdown/ProjectsFilter';

const TimelineFilterContainer = () => {

  const [projectSelected, setProjectSelected] = React.useState<string[]>([]);
  const [categorySelected, setCategorySelected] = React.useState<string[]>([]);
  const [dateSelected, setDateSelected] = React.useState('');
  const [authorSelected, setAuthorSelected] = React.useState<string[]>([]);

  return (
    <div className='timeline-filter' style={{display: 'inline'}}>
        <div style={{display: 'inline-block'}}>
          <div className='filter-dropdown'>
            <ProjectsFilter projectSelected={projectSelected} setProjectSelected={setProjectSelected}/>
            <span className='filter-divider'></span> 
            <CategoriesFilter categorySelected={categorySelected} setCategorySelected={setCategorySelected}/>
            <span className='filter-divider'></span> 
            <DateFilter dateSelected={dateSelected} setDateSelected={setDateSelected}/>
            <span className='filter-divider'></span>  
            <AuthorsFilter authorSelected={authorSelected} setAuthorSelected={setAuthorSelected}/>
          </div>
        </div>

        <div className='add-update-button' style={{display: 'inline-block'}}>
            <Button
                // onClick={formik.handleSubmit}
                variant="outlined" 
                style={{
                    backgroundColor: "#1E5487",
                    color: "white",
                    width: 150,
                    height: 50,
                    textTransform: 'none',
                    marginLeft: '10px',
                    fontSize: 16,
                }}
            >
                Add New Entry
            </Button>
        </div>
    </div>
  );
}

export default TimelineFilterContainer