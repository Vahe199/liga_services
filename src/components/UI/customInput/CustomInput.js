import React from 'react';
import Box from "@mui/material/Box";
import InputAdornment from '@mui/material/InputAdornment';
import {makeStyles} from "@material-ui/core";
import {TextField} from "@mui/material";

export const useStyles = makeStyles({
    root: {
        //width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '18px',
        '& .MuiFormHelperText-root': {
            color: 'red',
            position:" absolute",
            top: "-20px",
            right: 0
        },
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
                         placeholder,
                         password}) => {
    const classes = useStyles();
    return (
        <Box style={{marginBottom: mb, width, display: 'flex', alignItems: 'flex-start'}} className={classes.root}>
            <p className={classes.inputText}>{label}</p>
            <TextField
                variant={"outlined"}
                multiline={textArea}
                placeholder={placeholder}
                InputProps={icon && {
                    endAdornment: <InputAdornment position="start">{'??????.'}</InputAdornment>,
                }}
                name={name}
                type={password}
                autoComplete={'off'}
                value={value}
                style={{width: '100%'}}
                onChange={(e) =>handleChange(e.target.value)}
                rows={textArea ? 2 : 0}
                error={Boolean(touched && error)}
                helperText={touched && error}
            />
        </Box>
    )
}

export default CustomInput;
