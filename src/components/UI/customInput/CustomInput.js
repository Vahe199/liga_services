import React from 'react';
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import InputAdornment from '@mui/material/InputAdornment';
import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
                }
        },
        //input
        // '& MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
        //   width: '100%',
        // },

        // '& ..css-1sbn0x8-MuiInputBase-root-MuiOutlinedInput-root': {
        //     border: '2px solid green',
        // },
        // '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
        //     marginBottom: '10px',
        //     width: '100%',
        // },
        // '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
        //     borderRadius: '10px',
        //     border: '1px solid #808080',
        // },
        // '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        //     height: '10px',
        // },
        // //button
        // '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root': {
        //     backgroundColor: '#445E77',
        //     fontSize: '15px',
        //     color: '#FAFAFA',
        //     padding: '7px 24px',
        //     fontWeight: 500,
        //     marginBottom: '10px',
        //     borderRadius: '10px',
        //     width: '190px',
        //     whiteSpace: 'noWrap',
        // },
        // '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root:hover': {
        //     backgroundColor: '#3a4e61',
        // },
        // //checkbox
        // '& .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label': {
        //     color: '#808080',
        //     fontSize: '16px',
        // },
        // '& MuiBox-root css-0': {
        //     width: '40%',
        // },
        // //select
        // '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
        //     padding: '10px',
        // },
        // //textArea
        // '& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root': {
        //     borderRadius: '10px',
        //     border: '1px solid #808080',
        //     height: '73px',
        // },
        // '& MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputMultiline css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
        //     height: '100%'
        // },
        // //DatePicker
        // '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
        //     width: '170px',
        //     borderRadius: '10px',
        //     border: '1px solid #808080',
        //     height: '45px',
        // },
        // //input file
        // '& .MuiBox-root css-0': {
        //     width: '40%',
        // }
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
        <Box style={{marginBottom: mb, width}} className={classes.root}>
            <p className={classes.inputText}>{label}</p>
            <TextField
                variant={"outlined"}
                multiline={textArea}
                placeholder={placeholder}
                InputProps={icon && {
                    endAdornment: <InputAdornment position="start">{'Руб.'}</InputAdornment>,
                }}
                //className={classes.inputBase}
                name={name}
                autoComplete={'off'}
                value={value}
                onChange={handleChange}
                rows={2}
                maxRows={4}
                error={touched && Boolean(error)}
                helperText={touched && error}
            />
        </Box>
    )
}

export default CustomInput;