import React, {useState} from 'react';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import Calendar from '../../../assets/image/Calendar.png';
import {makeStyles} from "@material-ui/core";
import Box from "@mui/material/Box";

export const useStyles = makeStyles({
    root: {
        color: '#000',
        backgroundColor: '#fff',
        '& > .MuiPickerDTToolbar-toolbar.MuiToolbar-root': {
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#808080',
                borderRadius: '10px',
                //width: '100%',
                backgroundColor: 'transparent',
            },
            '&:hover fieldset': {
                borderColor: 'blue',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'gray',
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #808080",
                borderRadius: '10px',
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #808080",
                borderRadius: '10px',
            },
            //focus
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid blue",
            }
        },
    }
});

const CustomDatePicker = ({value, name, fun, touched, errors}) => {
    const [open,setOpen] = useState(false)
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    value={value}
                    name={name}
                    open={open}
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                    }}
                    onChange={(date) => {
                        setOpen(!open)
                        fun(date)
                    }}
                    renderInput={(params) => <TextField
                        error={touched && Boolean(errors)}
                        helperText={touched && errors}
                        autoComplete={'off'}
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
                            input: {height:10, borderRadius:20},
                        }}/>}
                />
            </LocalizationProvider>
        </Box>
    )
}

export default CustomDatePicker;