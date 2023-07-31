import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SearchFilter, dateTuple } from "@pages/Timeline/types";
import  DateRangePicker from "../../components/DateRangePicker/DateRangePicker"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};

const DateFilter = ({ 
    // dateSelected, setDateSelected, 
    dateRange, setRange,
    dummyData,
    setFilter, filterBy }: {
        dateRange: [dateTuple, dateTuple],
        setRange: (array:[dateTuple, dateTuple]) => void,
        dummyData: string[],
        setFilter: (obj: SearchFilter) => void,
        filterBy: SearchFilter
    }) => {

    const list = {
        'name': 'Date',
        'options': dummyData,
    };

    return (
        <FormControl sx={{ m: 1, display: 'inline' }}>
            {/* <div style={{ display: 'inline-block', color: '#7e7e7e', marginRight: '10px' }}>
                {list.name}:
            </div> */}
            <div style={{ display: 'inline-block' }}>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    variant="standard"
                    disableUnderline
                    label="Date"
                    value={"Date"}
                    MenuProps={MenuProps}
                    renderValue={() => "Date"}
                    sx={{ width: 120 }}
                >
                    {/* {list.options.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))} */}
                    <DateRangePicker dateRange={dateRange} setDateRange={setRange} filterBy={filterBy} setFilter={setFilter} />
                </Select>
            </div>
        </FormControl>
    )
}

export default DateFilter
