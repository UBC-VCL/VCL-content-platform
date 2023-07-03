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


const MobileCategoriesFilter = ({ categorySelected, setCategorySelected, dummyData, setFilter, filterBy }: {
  categorySelected: string[],
  setCategorySelected: React.Dispatch<React.SetStateAction<string[]>>,
  dummyData: string[],
  setFilter: (obj: SearchFilter) => void,
  filterBy: SearchFilter
}) => {

  const list = {
    'name': 'Category',
    'options': dummyData,
  };

  const handleChange = (event: SelectChangeEvent<typeof categorySelected>) => {
    const {
      target: { value },
    } = event;
    setCategorySelected(
      typeof value === 'string' ? value.split(',') : value,
    );
    setFilter({ ...filterBy, category: typeof value === 'string' ? value.split(',') : value })
  };

  return (

    <FormControl sx={{ m: 1, width: '100%' }}>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        variant="standard"
        disableUnderline
        multiple
        value={categorySelected}
        onChange={handleChange}
        MenuProps={MenuProps}
        displayEmpty={true}
        renderValue={() => {
          return 'Category';
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





    // <List sx={{ m: 1, display: 'inline' }}>

    //   <ListItemButton onClick={handleClick}>
    //     <ListItemText primary="Author" sx={{ color: '#7e7e7e' }} />
    //     {open ? <ExpandLess /> : <ExpandMore />}
    //   </ListItemButton>

    //   <Collapse in={open} timeout="auto" unmountOnExit>
    //     {list.options.map((name) => (
    //       <ListItemButton selected={true}>
    //         {name}
    //       </ListItemButton>
    //     ))}

    //   </Collapse>
    // </List >


  )
}

export default MobileCategoriesFilter
