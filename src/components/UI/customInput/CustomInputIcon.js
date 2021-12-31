import React from 'react';
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import InputAdornment from '@mui/material/InputAdornment';
import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        width: '100%',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: "1px solid #808080",
                borderRadius: '10px',
                //height: '30px',
                padding: '5px 5px',
            },
            '&:hover fieldset': {
                border: "1px solid blue",
            },
            '&.Mui-focused fieldset': {
                borderColor: 'gray',
            },
            '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
              padding: '10px',
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
                border: "1px solid #808080",
            }
        },
    },
    inputText: {
        fontSize: '15px',
        textAlign: 'left',
        width: '100%',
        margin: 0,
        height: '40px',
    },
});


const CustomInputIcon = ({label,
                         name,
                         value,
                         handleChange,
                         touched,
                         error,
                         textArea = false,
                         icon = false,
                         mb = 10,
                         width = '100%',
                         placeholder}) => {
    const classes = useStyles();
    return (
            <TextField
                variant={"outlined"}
                multiline={textArea}
                placeholder={placeholder}
                InputProps={{
                    endAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
                }}
                className={classes.root}
                name={name}
                autoComplete={'off'}
                value={value}
                onChange={handleChange}
                rows={2}
                maxRows={4}
                error={touched && Boolean(error)}
                helperText={touched && error}
            />
    )
}

export default CustomInputIcon;