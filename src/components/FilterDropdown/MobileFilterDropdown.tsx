import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import MobileAuthorsFilter from '@components/FilterDropdown/MobileAuthorsFilter';
import MobileCategoriesFilter from '@components/FilterDropdown/MobileCategoriesFilter';
import MobileDateFilter from '@components/FilterDropdown/MobileDateFilter';
import MobileProjectsFilter from '@components/FilterDropdown/MobileProjectsFilter';

const dummyDataForProject = ['Correlation', 'NOVA', 'SHIVA', 'IDEO', 'Projects'];
const dummyDataForCategory = ['Website', 'Meeting', 'Workshop'];
const dummyDataForDate = ['Last day', 'Last month', 'Last year'];
const dummyDataForAuthor = ['One', 'two', 'three'];


export default function MobileFilterDropdown() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [projectSelected, setProjectSelected] = React.useState<string[]>(dummyDataForProject);
  const [categorySelected, setCategorySelected] = React.useState<string[]>(dummyDataForCategory);
  const [dateSelected, setDateSelected] = React.useState(dummyDataForDate[0]);
  const [authorSelected, setAuthorSelected] = React.useState<string[]>(dummyDataForAuthor);

  return (
    <div className='timeline-filter-mobile'>
      <List
        sx={{ width: '95%', maxWidth: 650, bgcolor: 'background.paper', margin: '0 auto' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Filters" sx={{ color: '#7e7e7e' }}/>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>

          <div className='mobile-filter-dropdown'>
            <MobileProjectsFilter projectSelected={projectSelected} setProjectSelected={setProjectSelected} dummyData={dummyDataForProject} /> </div>
          <div className='mobile-filter-dropdown'>
            <MobileCategoriesFilter categorySelected={categorySelected} setCategorySelected={setCategorySelected} dummyData={dummyDataForCategory} /></div>
          <div className='mobile-filter-dropdown'>
            <MobileDateFilter dateSelected={dateSelected} setDateSelected={setDateSelected} dummyData={dummyDataForDate} /></div>
          <div className='mobile-filter-dropdown' style={{ marginBottom: '15px' }}>
            <MobileAuthorsFilter authorSelected={authorSelected} setAuthorSelected={setAuthorSelected} dummyData={dummyDataForAuthor} /></div>

        </Collapse>
      </List>
    </div>
  );
}
