import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};


const MobileDateFilter = ({ dateSelected, setDateSelected, dummyData }: {
  dateSelected: string,
  setDateSelected: React.Dispatch<React.SetStateAction<string>>,
  dummyData: string[],
}) => {

  const list = {
    'name': 'Date',
    'options': dummyData,
  };
  const handleChange = (event: SelectChangeEvent<typeof dateSelected>) => {
    setDateSelected(event.target.value);
  };

  return (

    <FormControl sx={{ m: 1, width: '100%' }}>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        variant="standard"
        disableUnderline
        value={dateSelected}
        label="Date"
        onChange={handleChange}
        MenuProps={MenuProps}
        displayEmpty={true}
        renderValue={() => {
          return 'Date';
        }}
        sx={{ width: 490, color: '#7e7e7e', textAlign: 'left'}}
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

export default MobileDateFilter
