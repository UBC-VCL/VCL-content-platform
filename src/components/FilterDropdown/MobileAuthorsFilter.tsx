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

const MobileAuthorsFilter = ({
  authorSelected, setAuthorSelected,
  dummyData,
  setFilter, filterBy }: {
    authorSelected: string[],
    setAuthorSelected: React.Dispatch<React.SetStateAction<string[]>>,
    dummyData: string[],
    setFilter: (obj: SearchFilter) => void,
    filterBy: SearchFilter
  }) => {

  const list = {
    'name': 'Author',
    'options': dummyData,
  };
  const handleChange = (event: SelectChangeEvent<typeof authorSelected>) => {
    const { target: { value } } = event;
    setAuthorSelected(
      typeof value === 'string' ? value.split(',') : value
    );

    setFilter({ ...filterBy, author: typeof value === 'string' ? value.split(',') : value })
  };

  return (

    <FormControl sx={{ m: 1, width: '100%' }}>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        variant="standard"
        disableUnderline
        multiple
        value={authorSelected}
        onChange={handleChange}
        MenuProps={MenuProps}
        displayEmpty={true}
        renderValue={() => {
          return 'Author';
        }}
        sx={{ width: 490, color: '#7e7e7e', textAlign: 'left' }}
      >
        {list.options.map((name) => (
          <MenuItem
            key={name}
            value={name}
            sx={{ color: '#7e7e7e' }}
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

export default MobileAuthorsFilter
