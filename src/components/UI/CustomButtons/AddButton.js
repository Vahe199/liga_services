import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
      display: 'flex',
      marginTop: '20px',
      alignItems: 'center',
    },
    btn: {
        backgroundColor: '#EBEBEB',
        borderRadius: '5px',
        marginRight: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '35px',
        height: '35px',
        color: '#808080',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#D5D5D5',
        },
    },
    btnText: {
        color: '#808080',
    },

})

const AddButton = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
          <Box className={classes.btn}>+</Box>
          <Typography className={classes.btnText}>Добавить</Typography>
        </Box>
    )
}

export default AddButton;