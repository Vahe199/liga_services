import React from 'react';
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    aboutTitle: {
        color: '#445E77',
        fontSize: '40px',
        textAlign: 'center',
    },
});

const MainTitle = ({mb, children}) => {
    const classes = useStyles();
    return (
        <Typography mb={mb} className={classes.aboutTitle}>{children}</Typography>
    )
}

export default MainTitle;