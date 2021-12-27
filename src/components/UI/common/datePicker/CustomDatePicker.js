import React, {useState} from 'react';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {CalendarSVG} from "../../../../assets/svg/CalendarSVG";
import Calendar from "../../../../assets/image/Calendar.png"
const color = "#c44242";
const CustomDatePicker = ({value, name, fun, touched, errors}) => {
    const [open,setOpen] = useState(false)
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                value={value}
                name={name}
                open={open}
                onChange={(date) => {
                    setOpen(!open)
                    fun(date)
                }}
                autoComplete={'off'}
                renderInput={(params) => <TextField
                    error={touched && Boolean(errors)}
                    helperText={touched && errors}
                    {...params}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={(e) => setOpen(!open)} >
                                  <img src={Calendar} height={20} width={20}/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                         svg: { display: "none" },
                        input: {height:10, borderRadius:20,width:150},
                    }}/>}
            />
        </LocalizationProvider>
    )
}

export default CustomDatePicker;
