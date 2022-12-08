import React from 'react';
import './FilterDropdown.css'
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: 350,
    },
  },
};

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

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const FilterDropdown = () => {
  const theme = useTheme();
  const [projectSelected, setProjectSelected] = React.useState<string[]>([]);
  const [categorySelected, setCategorySelected] = React.useState<string[]>([]);
  const [dateSelected, setDateSelected] = React.useState<string[]>([]);
  const [authorSelected, setAuthorSelected] = React.useState<string[]>([]);

  const handleChangeProject = (event: SelectChangeEvent<typeof projectSelected>) => {
    const {
      target: { value },
    } = event;
    setProjectSelected(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleChangeCategory = (event: SelectChangeEvent<typeof categorySelected>) => {
    const {
      target: { value },
    } = event;
    setCategorySelected(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleChangeDate = (event: SelectChangeEvent<typeof dateSelected>) => {
    const {
      target: { value },
    } = event;
    setDateSelected(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleChangeAuthor = (event: SelectChangeEvent<typeof authorSelected>) => {
    const {
      target: { value },
    } = event;
    setAuthorSelected(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className='filter-dropdown'>
      <FormControl sx={{ m: 1, display: 'inline' }}>
        <div className='filter-dropdown-text'>Project:</div>
        <div style={{display: 'inline-block'}}>
            <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            variant="standard"
            disableUnderline
            multiple
            value={projectSelected}
            onChange={handleChangeProject}
            MenuProps={MenuProps}
            sx={{ width: 120 }}
            >
            {projects.options.map((name) => (
                <MenuItem
                key={name}
                value={name}
                style={getStyles(name, projectSelected, theme)}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </div>
      </FormControl>

      <span className='filter-divider'></span> 

      <FormControl sx={{ m: 1, display: 'inline' }}>
        <div className='filter-dropdown-text'>Category:</div>
        <div style={{display: 'inline-block'}}>
            <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            variant="standard"
            disableUnderline
            multiple
            value={categorySelected}
            onChange={handleChangeCategory}
            MenuProps={MenuProps}
            sx={{ width: 120 }}
            >
            {categories.options.map((name) => (
                <MenuItem
                key={name}
                value={name}
                style={getStyles(name, categorySelected, theme)}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </div>
      </FormControl>  

      <span className='filter-divider'></span> 

      <FormControl sx={{ m: 1, display: 'inline' }}>
        <div className='filter-dropdown-text'>Date:</div>
        <div style={{display: 'inline-block'}}>
            <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            variant="standard"
            disableUnderline
            multiple
            value={dateSelected}
            onChange={handleChangeDate}
            MenuProps={MenuProps}
            sx={{ width: 120 }}
            >
            {dates.options.map((name) => (
                <MenuItem
                key={name}
                value={name}
                style={getStyles(name, dateSelected, theme)}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </div>
      </FormControl>  

      <span className='filter-divider'></span> 

      <FormControl sx={{ m: 1, display: 'inline' }}>
        <div className='filter-dropdown-text'>
            Author:
        </div>
        <div style={{display: 'inline-block'}}>
            <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            variant="standard"
            disableUnderline
            multiple
            value={authorSelected}
            onChange={handleChangeAuthor}
            MenuProps={MenuProps}
            sx={{ width: 120 }}
            >
            {authors.options.map((name) => (
                <MenuItem
                key={name}
                value={name}
                style={getStyles(name, authorSelected, theme)}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </div>
      </FormControl>       
    </div>
  );
}

export default FilterDropdown