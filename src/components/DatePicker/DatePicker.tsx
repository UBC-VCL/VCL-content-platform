import DateFnsUtils from "@date-io/date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import Box from "@mui/material/Box";


const DatePicker = () => {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(

    );

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="yyyy/MM/dd"
                    margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                />

        </MuiPickersUtilsProvider>
    );
}
export default DatePicker