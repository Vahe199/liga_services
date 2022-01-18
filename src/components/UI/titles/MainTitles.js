import React from 'react';
import {makeStyles} from "@material-ui/core";
import Typography from "@mui/material/Typography";

export const useStyles = makeStyles({
    aboutTitle: {
        color: '#445E77',
        fontSize: '40px',
        textAlign: 'center',
    },
});

const MainTitle = ({mb, mt, children}) => {
    const classes = useStyles();
    return (
        <Typography mb={mb} mt={mt} className={classes.aboutTitle}>{children}</Typography>
    )
}

export default MainTitle;