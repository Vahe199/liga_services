import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import {useStyles} from "./CustomDatePicker";
import {IconButton, InputAdornment} from "@mui/material";
import Calendar from "../../../assets/image/Calendar.png";

const RangeDatePicker = ({value, name, fun, touched, errors}) => {
    //const [value, setValue] = React.useState([null, null]);
    const classes = useStyles();
    const [open,setOpen] = useState(false)
    return (
        <Box className={classes.root}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div>
                    <DateRangePicker
                        startText="От"
                        endText="До"
                        value={value}
                        name={name}
                        open={open}
                        onChange={(newValue) => {
                            setOpen(!open)
                            fun(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps}
                                           error={Boolean(touched && errors)}
                                           helperText={touched && errors}
                                           autoComplete={'off'}
                                           InputProps={{
                                               style: {
                                                   paddingBottom: '2px',
                                               },
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
                                               input: {height: 10, borderRadius:20},
                                           }}
                                />
                                <Box sx={{ margin: '0 5px' }}> - </Box>
                                <TextField {...endProps}
                                           error={Boolean(touched && errors)}
                                           helperText={touched && errors}
                                           autoComplete={'off'}
                                           InputProps={{
                                               style: {
                                                   paddingBottom: '2px',
                                               },
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
                                               input: {height: 10, borderRadius:20},
                                           }}
                                />
                            </React.Fragment>
                        )}
                    />
                </div>
            </LocalizationProvider>
        </Box>
    );
}

export default RangeDatePicker;
