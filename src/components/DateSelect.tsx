import * as React from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

export default function DateSelect({date, setDate}: {
    date: Date | null, setDate:
        React.Dispatch<React.SetStateAction<Date | null>>
}) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Date"
                value={date}
                onChange={(newDate) => {
                    setDate(newDate);
                }}
                renderInput={(params) => <TextField {...params} sx={{width: 317}}/>}
                inputFormat="yyyy/MM/dd"
            />
        </LocalizationProvider>
    );
}
