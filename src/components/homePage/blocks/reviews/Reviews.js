import React from 'react';
import {makeStyles} from "@material-ui/core";
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import MainTitle from "../../../UI/titles/MainTitles";
import {reviews} from "../../../../utils/data/reviews/Reviiews";
import Box from "@mui/material/Box";
import RatingBlock from "../../../UI/ratingBlock/RatingBlock";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const useStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        boxShadow: 'none',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '12px',
    },
});

const Reviews = () => {
    const classes = useStyles();
    return (
        <>
            <MainTitle mb={'75px'}>Отзывы</MainTitle>
            <Grid container spacing={8} justifyContent="center"
                  alignItems="center">
                {reviews.map((review, index) =>
                    <Grid  key={index}  item sm={10} md={8} lg={3} >
                        <Paper className={classes.card}>
                            <CardContent>
                                <Box className={classes.cardContent}>
                                    <Avatar style={{height: '50px', width: '50px'}} />
                                    <Box>
                                        <Typography noWrap gutterBottom style={{fontSize: '24px', paddingLeft: '10px'}}>
                                            {review.name}
                                        </Typography>
                                        <RatingBlock reviews={60} size={'small'} />
                                    </Box>

                                </Box>

                                <Typography style={{fontSize: '18px', textAlign: 'left'}}>
                                    Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа дальнейших направлений развития. Товарищи! консультация с широким активом способствует подготовки и реализации.
                                </Typography>
                            </CardContent>
                        </Paper>
                    </Grid>
                )}
            </Grid>
            <Typography mb={'200px'} color={'#808080'} style={{fontSize: '22px'}}>589 434 отзыва оставили клиенты за последние 12 месяцев. Из них 558 742 — положительные.</Typography>
        </>
    )
}

export default Reviews;
