import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SearchFilter } from "@pages/Timeline/types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};


const MobileProjectsFilter = ({ projectSelected, setProjectSelected, dummyData,
  setFilter, filterBy }: {
    projectSelected: string[],
    setProjectSelected: React.Dispatch<React.SetStateAction<string[]>>,
    dummyData: string[],
    setFilter: (obj: SearchFilter) => void,
    filterBy: SearchFilter
  }) => {

  const list = {
    'name': 'Project',
    'options': dummyData,
  };
  
  const handleChange = (event: SelectChangeEvent<typeof projectSelected>) => {
    const {
      target: { value },
    } = event;
    setProjectSelected(
      typeof value === 'string' ? value.split(',') : value,
    );

    setFilter({ ...filterBy, project: typeof value === 'string' ? value.split(',') : value, })
  };

  return (

    <FormControl sx={{ m: 1, width: '100%' }}>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        variant="standard"
        disableUnderline
        multiple
        value={projectSelected}
        onChange={handleChange}
        MenuProps={MenuProps}
        displayEmpty={true}
        renderValue={() => {
          return 'Project';
        }}
        sx={{ width: 490, color: '#7e7e7e', textAlign: 'left' }}
      >
        {list.options.map((name) => (
          <MenuItem
            key={name}
            value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MobileProjectsFilter
