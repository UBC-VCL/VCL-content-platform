import React, { useState } from 'react';
import './TimelineFilter.css';

import { Button } from "@mui/material";
import AuthorsFilter from '@components/FilterDropdown/AuthorsFilter';
import CategoriesFilter from '@components/FilterDropdown/CategoriesFilter';
import DateFilter from '@components/FilterDropdown/DateFilter';
import ProjectsFilter from '@components/FilterDropdown/ProjectsFilter';
import { useEffect } from 'react';
import axios from 'axios';
const dummyDataForProject = ['Correlation', 'NOVA', 'SHIVA', 'IDEO', 'Projects'];
const dummyDataForCategory = ['Website', 'Meeting', 'Workshop'];
const dummyDataForDate = ['Last day', 'Last month', 'Last year'];
const dummyDataForAuthor = ['One', 'two', 'three'];

const TimelineFilterContainer = () => {

  const [dataForProject, setDataForProject] = useState<string[]>([]);
  useEffect(() => {
    //fetch data
    axios
      .get('http://localhost:4000/api/projects')
      .then(response => {
        let prjs = response.data.data;
        let data: string[] = [];
        for (var prj of prjs) {
          data.push(prj.name);
        } 
        setDataForProject(data);
      });
  }, []);
  

  // const [projectSelected, setProjectSelected] = React.useState<string[]>(['All']);
  // const [categorySelected, setCategorySelected] = React.useState<string[]>(['All']);
  // const [dateSelected, setDateSelected] = React.useState('Last Month');
  // const [authorSelected, setAuthorSelected] = React.useState<string[]>(['All']);
  const [projectSelected, setProjectSelected] = React.useState<string[]>(dataForProject);
  const [categorySelected, setCategorySelected] = React.useState<string[]>(dummyDataForCategory);
  const [dateSelected, setDateSelected] = React.useState(dummyDataForDate[0]);
  const [authorSelected, setAuthorSelected] = React.useState<string[]>(dummyDataForAuthor);

  

  

  return (
    <div className='timeline-filter' style={{display: 'inline'}}>
        <div style={{display: 'inline-block'}}>
          <div className='filter-dropdown'>
            <ProjectsFilter projectSelected={projectSelected} setProjectSelected={setProjectSelected} dummyData={dataForProject}/>
            <span className='filter-divider'></span> 
            <CategoriesFilter categorySelected={categorySelected} setCategorySelected={setCategorySelected} dummyData={dummyDataForCategory}/>
            <span className='filter-divider'></span> 
            <DateFilter dateSelected={dateSelected} setDateSelected={setDateSelected} dummyData={dummyDataForDate}/>
            <span className='filter-divider'></span>  
            <AuthorsFilter authorSelected={authorSelected} setAuthorSelected={setAuthorSelected} dummyData={dummyDataForAuthor}/>
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