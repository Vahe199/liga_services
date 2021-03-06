import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import MainTitle from "../../../UI/titles/MainTitles";
import RatingBlock from "../../../UI/ratingBlock/RatingBlock";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    card: {
        //borderRadius: '30px',
        display: 'flex',
        //height: '648px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.13)',
        padding: '30px 5px',
    },
    btn: {
        backgroundColor: '#49942B',
        borderRadius: '30px',
        padding: '10px 27px',
        fontSize: '17px',
        color: '#fff',
        fontWeight: '400',
    },
});

const TrustedExperts = ({our_checked_specialists =[]}) => {
    const classes = useStyles();
    return (
        <>
            <MainTitle mt={'75px'} mb={'75px'}>Наши Провереные Специалисты</MainTitle>
            <Grid container spacing={6} justifyContent="center"
                  alignItems="center" mb={'100px'}>
                {our_checked_specialists.map((expert, index) =>
                    <Grid key={index} item sm={8} md={6} lg={4} >
                        <Card sx={{
                            ':hover': {
                                boxShadow: 20
                            }
                        }} className={classes.card} style={{borderRadius: '30px'}}>
                            <Avatar src={expert.users.img_path} mb={'24px'} style={{height: '108px', width: '108px'}} />
                            <CardContent>
                                <Typography noWrap mb={'15px'} gutterBottom style={{fontSize: '30px', fontWeight: '500', textAlign: 'center'}} color={'#49942B'}>
                                    {expert.users.name}
                                </Typography>
                                <Typography noWrap mb={'9px'} style={{fontSize: '18px', textAlign: 'center'}} color={'#808080'} gutterBottom>
                                    Была в сети сегодня в 15:07
                                </Typography>
                                <RatingBlock reviews={expert.total_reiting} />
                                <Typography mb={'24px'} style={{fontSize: '20px', fontWeight: '500',textAlign: 'center'}}>
                                    {expert.special}
                                </Typography>
                                <Typography style={{fontSize: '18px', textAlign: 'left'}}>
                                    Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа дальнейших направлений развития. Товарищи! консультация с широким активом способствует подготовки и
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.btn} variant="contained" color="success">
                                    Узнать больше
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default TrustedExperts;
