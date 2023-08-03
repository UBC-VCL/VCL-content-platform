import React from 'react';
import './TimelineFilter.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { SearchFilter } from './types';

import { Button, MenuItem } from "@mui/material";
import AuthorsFilter from '@components/FilterDropdown/AuthorsFilter';
import CategoriesFilter from '@components/FilterDropdown/CategoriesFilter';
import DateFilter from '@components/FilterDropdown/DateFilter';
import ProjectsFilter from '@components/FilterDropdown/ProjectsFilter';
import MobileFilterDropdown from '@components/FilterDropdown/MobileFilterDropdown';

interface PropsOBJ {
  setFilter: (obj: SearchFilter) => void;
  filterBy: SearchFilter;
}

const TimelineFilterContainer = (props: PropsOBJ) => {

  // Destrcuturing the props
  const { setFilter, filterBy } = props;

  const dummyDataForProject = ['Correlation', 'NOVA', 'SHIVA', 'Ideo', 'Project', 'NCIS'];
  const dummyDataForCategory = ['Website', 'Meeting', 'Workshop'];
  const dummyDataForDate = ['All', 'Last day', 'Last month', 'Last year'];
  const dummyDataForAuthor = ['Samanshiang Chiang', 'Michael Rotman', 'John Doe', 'Jane Doe'];

  // const [projectSelected, setProjectSelected] = React.useState<string[]>(['All']);
  // const [categorySelected, setCategorySelected] = React.useState<string[]>(['All']);
  // const [dateSelected, setDateSelected] = React.useState('Last Month');
  // const [authorSelected, setAuthorSelected] = React.useState<string[]>(['All']);
  const [projectSelected, setProjectSelected] = React.useState<string[]>(filterBy.project);
  const [categorySelected, setCategorySelected] = React.useState<string[]>(filterBy.category);
  const [dateSelected, setDateSelected] = React.useState(filterBy.date);
  const [authorSelected, setAuthorSelected] = React.useState<string[]>(filterBy.author);

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

        <div className='filter-dropdown-mobile'><MobileFilterDropdown  setFilter={setFilter} filterBy={filterBy}/></div>

      ) : (
        <div className='timeline-filter' style={{ display: 'inline' }}>
          <div style={{ display: 'inline-block' }}>
            <div className='filter-dropdown'>
              <ProjectsFilter filterBy={filterBy} setFilter={setFilter} projectSelected={projectSelected} setProjectSelected={setProjectSelected} dummyData={dummyDataForProject} />
              <span className='filter-divider'></span>
              <CategoriesFilter filterBy={filterBy} setFilter={setFilter} categorySelected={categorySelected} setCategorySelected={setCategorySelected} dummyData={dummyDataForCategory} />
              <span className='filter-divider'></span>
              <DateFilter filterBy={filterBy} setFilter={setFilter} dateSelected={dateSelected} setDateSelected={setDateSelected} dummyData={dummyDataForDate} />
              <span className='filter-divider'></span>
              <AuthorsFilter filterBy={filterBy} setFilter={setFilter} authorSelected={authorSelected} setAuthorSelected={setAuthorSelected} dummyData={dummyDataForAuthor} />
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
