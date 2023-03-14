import React, { useState } from 'react';
import './TimelineFilter.css';

import { Button } from "@mui/material";
import AuthorsFilter from '@components/FilterDropdown/AuthorsFilter';
import CategoriesFilter from '@components/FilterDropdown/CategoriesFilter';
import DateFilter from '@components/FilterDropdown/DateFilter';
import ProjectsFilter from '@components/FilterDropdown/ProjectsFilter';
import { useEffect } from 'react';
import axios from 'axios';
import { SnapShot } from './Timeline';
import { Link } from 'react-router-dom';
import { ROUTES } from '@statics';

const dummyDataForProject = ['Correlation', 'NOVA', 'SHIVA', 'IDEO', 'Projects'];
const dummyDataForCategory = ['hiring', 'Workshops', 'Analysis', 'Conditions', 'Meetings', 'Guest Speaker', 'Resources', 'Dev/Code', 'Progress'];
const dummyDataForDate = ['Last day', 'Last month', 'Last year'];
const dummyDataForAuthor = ['One', 'two', 'three'];

interface TimelineFilterProps {
  setCommits(arg: Array<SnapShot>): void;
  allCommits: Array<SnapShot>;
}

const TimelineFilterContainer: React.FC<TimelineFilterProps> = (props) => {

  const [dataForProject, setDataForProject] = useState<string[]>([]);
  useEffect(() => {
    //fetch data for projects
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
    
    // fetch data for users
    // axios
    //   .get('http://localhost:4000/api/users')
    //   .then(response => {
    //     let users = response.data.data;
    //     let data: string[] = [];
    //     for (var user of users) {
    //       data.push(user.name);
    //     } 
    //     setDataForProject(data);
    //   });
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
            <ProjectsFilter projectSelected={projectSelected} setProjectSelected={setProjectSelected} dummyData={dataForProject} setCommits={props.setCommits} allCommits={props.allCommits}/>
            <span className='filter-divider'></span> 
            <CategoriesFilter categorySelected={categorySelected} setCategorySelected={setCategorySelected} dummyData={dummyDataForCategory} setCommits={props.setCommits} allCommits={props.allCommits}/>
            <span className='filter-divider'></span> 
            <DateFilter dateSelected={dateSelected} setDateSelected={setDateSelected} dummyData={dummyDataForDate} setCommits={props.setCommits} allCommits={props.allCommits}/>
            <span className='filter-divider'></span>  
            <AuthorsFilter authorSelected={authorSelected} setAuthorSelected={setAuthorSelected} dummyData={dummyDataForAuthor}/>
          </div>
        </div>

        <div className='add-update-button' style={{display: 'inline-block'}}>
            <Link to={ROUTES.TIMELINE_CREATE} style={{textDecoration: 'none'}}>
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
            </Link>
        </div>
    </div>
  );
}

export default TimelineFilterContainer