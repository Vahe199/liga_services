import React from 'react';
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import {createStyles, makeStyles} from "@material-ui/core";
import Button from '@mui/material/Button'

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            fontSize: '40px',
            fontWeight: 700,
        }
    })
);

const Intro = () => {
    const classes = useStyles();
    return (
        <Grid mt={'20px'} container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography mb={'20px'} className={classes.title} color={'#445E77'}>ВСЕ СПЕЦИАЛИСТЫ ВАШЕГО ГОРОДА В ОДНОМ МЕСТЕ</Typography>
                <Button size={'large'} variant="contained" color="success">
                    Оставить задание
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography>czdacs</Typography>
            </Grid>
        </Grid>
    )
}

export default Intro;
