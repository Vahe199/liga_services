import React from 'react';
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {trustedExperts} from "../../utils/data/trustedExperts/TrustedExperts";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {GreenArrowSvg} from "../../assets/svg/intro/GreenArrowSvg";
import {GoToChatSvg} from "../../assets/svg/intro/GoToChatSvg";

export const useStyles = makeStyles({
    aboutTitle: {
        color: '#445E77',
        fontSize: '40px',
        textAlign: 'center',
    },
});

const TrustedExperts = () => {
    const classes = useStyles();
    return (
        <>
        <Typography mb={'75px'} className={classes.aboutTitle}>Наши Провереные Специалисты</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    {trustedExperts.map(expert =>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {expert.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {expert.special}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    )}
                </Grid>
            </Grid>
        </>
    )
}

export default TrustedExperts;