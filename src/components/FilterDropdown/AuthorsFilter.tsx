import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FilterOBJ } from "@pages/Timeline/types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const AuthorsFilter = ({
  authorSelected, setAuthorSelected,
  dummyData, 
  setFilter, filterBy }: {
    authorSelected: string[],
    setAuthorSelected: React.Dispatch<React.SetStateAction<string[]>>,
    dummyData: string[],
    setFilter: (obj: FilterOBJ) => void,
    filterBy: FilterOBJ
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
    <FormControl sx={{ m: 1, display: 'inline' }}>
      <div style={{ display: 'inline-block', color: '#7e7e7e', marginRight: '10px' }}>
        {list.name}:
      </div>
      <div style={{ display: 'inline-block' }}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          variant="standard"
          disableUnderline
          multiple
          value={authorSelected}
          onChange={handleChange}
          MenuProps={MenuProps}
          renderValue={(selected) => {
            if (selected.length === dummyData.length) {
              return 'All';
            }
            return selected.join(', ');
          }}
          sx={{ width: 120 }}
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
      </div>
    </FormControl>
  )
}

export default AuthorsFilter
