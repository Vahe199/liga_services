import React from 'react';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import {TextField} from "@mui/material";


const CustomDatePicker = ({value, name, fun, touched, errors}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                value={value}
                name={name}
                onChange={(date) => {
                    fun(name, date)
                }}
                autoComplete={'off'}
                renderInput={(params) => <TextField
                    error={touched && Boolean(errors)}
                    helperText={touched && errors}
                    {...params} />}
            />
        </LocalizationProvider>
    )
}

export default CustomDatePicker;
