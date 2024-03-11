import React from 'react';
import './TimelineFilter.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { SearchFilter, dateTuple } from './types';

import { Button, MenuItem } from "@mui/material";
import AuthorsFilter from '@components/FilterDropdown/AuthorsFilter';
import CategoriesFilter from '@components/FilterDropdown/CategoriesFilter';
import DateFilter from '@components/FilterDropdown/DateFilter';
import ProjectsFilter from '@components/FilterDropdown/ProjectsFilter';
import { useHistory } from "react-router-dom";
import { selectAuth, selectIsLoggedIn } from '@redux/slices/AuthRedux';
import { useAppSelector } from '@redux/hooks';



import MobileFilterDropdownContainer from '@components/FilterDropdown/MobileFilterDropdown';

interface PropsOBJ {
  setFilter: (obj: SearchFilter) => void;
  filterBy: SearchFilter;
  dynamicProjects: Array<string>;
  dynamicAuthors: Array<string>;
  dynamicCategories: Array<string>;
}

const TimelineFilterContainer = (props: PropsOBJ) => {

  // Destrcuturing the props
  const { setFilter, filterBy, dynamicProjects, dynamicAuthors, dynamicCategories } = props;

  const dummyDataForProject = dynamicProjects;
  const dummyDataForCategory = dynamicCategories;
  const dummyDataForAuthor = dynamicAuthors;


  // const [projectSelected, setProjectSelected] = React.useState<string[]>(['All']);
  // const [categorySelected, setCategorySelected] = React.useState<string[]>(['All']);
  // const [dateSelected, setDateSelected] = React.useState('Last Month');
  // const [authorSelected, setAuthorSelected] = React.useState<string[]>(['All']);
  const [projectSelected, setProjectSelected] = React.useState<string[]>(filterBy.project);
  const [categorySelected, setCategorySelected] = React.useState<string[]>(filterBy.category);
  const [dateRange, setRange] = React.useState<[dateTuple, dateTuple]>([['initial', ""], ['target', ""]]);
  const [authorSelected, setAuthorSelected] = React.useState<string[]>(filterBy.author);


  useEffect(() => {
    setProjectSelected(dynamicProjects)
    setCategorySelected(dynamicCategories)
    setAuthorSelected(dynamicAuthors)
  }, [dynamicProjects, dynamicAuthors, dynamicCategories])

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
  const history = useHistory();

  const handleAddEntry = () => {
    history.push('/timeline/add');
  }

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <div className='timeline-filter' style={{ display: 'inline' }}>
      {isMobile ? (

        <div className='filter-dropdown-mobile'><MobileFilterDropdownContainer setFilter={setFilter} filterBy={filterBy} setRange={setRange} dateRange={dateRange} /></div>

      ) : (
        <div className="main-body-filter">
          <div className='filter-dropdown'>
            <ProjectsFilter filterBy={filterBy} setFilter={setFilter} projectSelected={projectSelected} setProjectSelected={setProjectSelected} dummyData={dummyDataForProject} />
            <span className='filter-divider'></span>
            <CategoriesFilter filterBy={filterBy} setFilter={setFilter} categorySelected={categorySelected} setCategorySelected={setCategorySelected} dummyData={dummyDataForCategory} />
            <span className='filter-divider'></span>
            <DateFilter filterBy={filterBy} setFilter={setFilter} setRange={setRange} dateRange={dateRange} />
            <span className='filter-divider'></span>
            <AuthorsFilter filterBy={filterBy} setFilter={setFilter} authorSelected={authorSelected} setAuthorSelected={setAuthorSelected} dummyData={dummyDataForAuthor} />
          </div>
          <div>
            {isLoggedIn &&
              <div className='add-update-button' style={{ display: 'inline-block' }}>
                <Button
                  onClick={handleAddEntry}
                  variant="outlined"
                  style={{
                    backgroundColor: "#1E5487",
                    color: "white",
                    width: 150,
                    height: 52,
                    textTransform: 'none',
                    marginLeft: '10px',
                    fontSize: 16,
                  }}
                >
                  Add New Entry
                </Button>
              </div>
            }
          </div>
        </div>
      )}
    </div>)
}
export default TimelineFilterContainer;
