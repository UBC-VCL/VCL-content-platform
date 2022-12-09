import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const list = {
    'name': 'Date', 
    'options': ['Last day', 'Last month', 'Last year'],
};

const DateFilter = ({dateSelected, setDateSelected}: {
    dateSelected: string,
    setDateSelected: React.Dispatch<React.SetStateAction<string>>
}) => {
    const handleChange = (event: SelectChangeEvent<typeof dateSelected>) => {
        setDateSelected(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, display: 'inline' }}>
            <div style={{ display: 'inline-block', color: '#7e7e7e', marginRight: '10px' }}>
                {list.name}:
            </div>
            <div style={{display: 'inline-block'}}>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    variant="standard"
                    disableUnderline
                    value={dateSelected}
                    onChange={handleChange}
                    label="Date"
                    MenuProps={MenuProps}
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

export default DateFilter
