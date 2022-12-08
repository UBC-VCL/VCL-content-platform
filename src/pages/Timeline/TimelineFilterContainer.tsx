import React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FilterDropdown from '@components/FilterDropdown';
import {Button, Typography} from "@mui/material";

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

const TimelineFilterContainer = () => {
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
    <div className='timeline-filter-container' style={{display: 'inline'}}>
        <div style={{display: 'inline-block'}}>
          <FilterDropdown />  
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
                }}
            >
                Add Update
            </Button>
        </div>
    </div>
  );
}

export default TimelineFilterContainer