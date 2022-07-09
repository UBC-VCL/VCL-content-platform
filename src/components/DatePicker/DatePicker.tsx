import DateFnsUtils from "@date-io/date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";


const DatePicker = () => {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(

    );

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="yyyy/MM/dd"
                    margin="normal"
                    id="date-picker-inline"
                    label="Select a date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}
export default DatePicker