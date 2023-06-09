import React from 'react';
import './TimelineFilter.css';
import { useState } from 'react';
import { useEffect } from 'react';

import { Button } from "@mui/material";
import MobileMainFilter from '@components/FilterDropdown/MobileMainFilter';
import AuthorsFilter from '@components/FilterDropdown/AuthorsFilter';
import CategoriesFilter from '@components/FilterDropdown/CategoriesFilter';
import DateFilter from '@components/FilterDropdown/DateFilter';
import ProjectsFilter from '@components/FilterDropdown/ProjectsFilter';

const dummyDataForProject = ['Correlation', 'NOVA', 'SHIVA', 'IDEO', 'Projects'];
const dummyDataForCategory = ['Website', 'Meeting', 'Workshop'];
const dummyDataForDate = ['Last day', 'Last month', 'Last year'];
const dummyDataForAuthor = ['One', 'two', 'three'];

const TimelineFilterContainer = () => {

  // const [projectSelected, setProjectSelected] = React.useState<string[]>(['All']);
  // const [categorySelected, setCategorySelected] = React.useState<string[]>(['All']);
  // const [dateSelected, setDateSelected] = React.useState('Last Month');
  // const [authorSelected, setAuthorSelected] = React.useState<string[]>(['All']);
  const [mobileMainFilterSelected, setMobileMainFilterSelected] = React.useState<string[]>();
  const [projectSelected, setProjectSelected] = React.useState<string[]>(dummyDataForProject);
  const [categorySelected, setCategorySelected] = React.useState<string[]>(dummyDataForCategory);
  const [dateSelected, setDateSelected] = React.useState(dummyDataForDate[0]);
  const [authorSelected, setAuthorSelected] = React.useState<string[]>(dummyDataForAuthor);

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth <= 1000) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className='timeline-filter-main'>

      {isMobile ? (

        <div className='timeline-filter-mobile' style={{ display: 'inline-block' }}> 
          {/*<MobileMainFilter/>*/}
          <div className='filter-dropdown-mobile'>
            <div className='single-dropdown-mobile'>
              <ProjectsFilter projectSelected={projectSelected} setProjectSelected={setProjectSelected} dummyData={dummyDataForProject} />
            </div>
            <span className='filter-divider-mobile'></span>
            <div className='single-dropdown-mobile'>
              <CategoriesFilter categorySelected={categorySelected} setCategorySelected={setCategorySelected} dummyData={dummyDataForCategory} />
            </div>
            <span className='filter-divider-mobile'></span>
            <div className='single-dropdown-mobile'>
              <DateFilter dateSelected={dateSelected} setDateSelected={setDateSelected} dummyData={dummyDataForDate} />
            </div>
            <span className='filter-divider-mobile'></span>
            <div className='single-dropdown-mobile'>
              <AuthorsFilter authorSelected={authorSelected} setAuthorSelected={setAuthorSelected} dummyData={dummyDataForAuthor} />
            </div>
          </div>
        </div>

      ) : (
        <div className='timeline-filter' style={{ display: 'inline' }}>
          <div style={{ display: 'inline-block' }}>
            <div className='filter-dropdown'>
              <ProjectsFilter projectSelected={projectSelected} setProjectSelected={setProjectSelected} dummyData={dummyDataForProject} />
              <span className='filter-divider'></span>
              <CategoriesFilter categorySelected={categorySelected} setCategorySelected={setCategorySelected} dummyData={dummyDataForCategory} />
              <span className='filter-divider'></span>
              <DateFilter dateSelected={dateSelected} setDateSelected={setDateSelected} dummyData={dummyDataForDate} />
              <span className='filter-divider'></span>
              <AuthorsFilter authorSelected={authorSelected} setAuthorSelected={setAuthorSelected} dummyData={dummyDataForAuthor} />
            </div>
          </div>

          <div className='add-update-button' style={{ display: 'inline-block' }}>
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
      )}
    </div>
  );
}

export default TimelineFilterContainer
