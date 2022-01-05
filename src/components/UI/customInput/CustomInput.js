import React from 'react';
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import InputAdornment from '@mui/material/InputAdornment';
import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        //width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '18px',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: "1px solid #808080",
                borderRadius: '10px',
                //width: '100%',
            },
            '&:hover fieldset': {
                border: "1px solid blue",
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
                border: "1px solid #808080",
            },
            '& .MuiOutlinedInput-input': {
                //height: '30px',
               // padding: '10px',
            },
        },
    },
    boxInput: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '18px',
    },
    inputText: {
        fontSize: '15px',
        textAlign: 'left',
        width: '100%',
        margin: 0,
    },
});


const CustomInput = ({label,
                         name,
                         value,
                         handleChange,
                         touched,
                         error,
                         textArea = false,
                         mb = 10,
                         icon = false,
                         width = '100%',
                         placeholder}) => {
    const classes = useStyles();
    return (
        <Box style={{marginBottom: mb, width, display: 'flex', alignItems: 'flex-start'}} className={classes.root}>
            <p className={classes.inputText}>{label}</p>
            <TextField
                variant={"outlined"}
                multiline={textArea}
                placeholder={placeholder}
                InputProps={icon && {
                    endAdornment: <InputAdornment position="start">{'Руб.'}</InputAdornment>,
                }}
                name={name}
                autoComplete={'off'}
                value={value}
                style={{width: '100%'}}
                onChange={handleChange}
                rows={textArea ? 2 : 0}
                error={touched && Boolean(error)}
                helperText={touched && error}
            />
        </Box>
    )
}

export default CustomInput;