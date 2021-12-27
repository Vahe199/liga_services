import React from 'react';
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useStyles} from "../../../../globalStyles/ModalStyles";
import InputAdornment from '@mui/material/InputAdornment';

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
        <Box style={{marginBottom: mb, width}} className={classes.boxInput}>
            <p className={classes.inputText}>{label}</p>
            <TextField
                variant={"outlined"}
                multiline={textArea}
                placeholder={placeholder}
                InputProps={icon && {
                    endAdornment: <InputAdornment style={{borderRadius: '10px'}} position="start">{'Руб.'}</InputAdornment>,
                }}
                className={classes.input}
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