import React from 'react';
import {FormControl, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {FormHelperText, makeStyles} from "@material-ui/core";
import Box from "@mui/material/Box";
import {useStyles} from "../customInput/CustomInput";



const CustomSelect = ({label, handleChange, value, name, touched, error, mt}) => {
    const classes = useStyles();
    return (
        <Box className={classes.boxInput}>
            <p style={{marginTop: mt}} className={classes.inputText}>{label}</p>
            <FormControl style={{height: '10px', marginBottom: '10px'}} fullWidth>
                <Select
                    onChange={handleChange}
                    value={value}
                    name={name}
                    error={touched && Boolean(error)}
                >
                    <MenuItem value={'Ten'}>Ten</MenuItem>
                    <MenuItem value={'Twenty'}>Twenty</MenuItem>
                    <MenuItem value={'Thirty'}>Thirty</MenuItem>
                </Select>
                {touched && error && <FormHelperText style={{color: '#F44336', paddingLeft: '15px'}}>{error}</FormHelperText>}
            </FormControl>
        </Box>
    )
}

export default CustomSelect;